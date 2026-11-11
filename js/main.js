/* =========================================================
   Header: shadow on scroll + mobile menu
   ========================================================= */
const header = document.querySelector(".site-header");
const nav = document.getElementById("main-nav");
const menuToggle = document.querySelector(".menu-toggle");

function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 8);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

function setMenu(open) {
  nav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
}

menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && nav.classList.contains("open")) {
    setMenu(false);
    menuToggle.focus();
  }
});

window.matchMedia("(min-width: 1080px)").addEventListener("change", e => {
  if (e.matches) setMenu(false);
});

/* =========================================================
   Active section highlight in navigation
   ========================================================= */
const navLinks = [...nav.querySelectorAll("ul a")];
const sections = navLinks
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
    });
  });
}, { rootMargin: "-45% 0px -50% 0px" });

sections.forEach(s => sectionObserver.observe(s));

// Back at the hero: no section is active
window.addEventListener("scroll", () => {
  if (window.scrollY < window.innerHeight * 0.4) navLinks.forEach(a => a.classList.remove("active"));
}, { passive: true });

/* =========================================================
   Reveal on scroll
   ========================================================= */
const revealEls = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealEls.forEach(el => el.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  // Stagger siblings inside grids for a softer cascade
  revealEls.forEach(el => {
    const siblings = el.parentElement.querySelectorAll(":scope > .reveal");
    const index = [...siblings].indexOf(el);
    if (siblings.length > 1) el.style.transitionDelay = `${Math.min(index, 5) * 80}ms`;
    revealObserver.observe(el);
  });
}

/* =========================================================
   Hero glow follows the pointer
   ========================================================= */
const heroPanel = document.querySelector(".hero-panel");
if (heroPanel && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  let frame;
  heroPanel.addEventListener("pointermove", e => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const r = heroPanel.getBoundingClientRect();
      heroPanel.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      heroPanel.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    });
  });
}

/* =========================================================
   Gentle parallax on the nature photo
   ========================================================= */
const natureBand = document.querySelector(".nature-band");
const natureImg = document.querySelector(".nature-img");
if (natureBand && natureImg && !reduceMotion) {
  let ticking = false;
  const update = () => {
    const r = natureBand.getBoundingClientRect();
    const progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
    natureImg.style.transform = `translateY(${Math.max(-1, Math.min(1, progress)) * -36}px)`;
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}

/* =========================================================
   Footer year
   ========================================================= */
document.getElementById("year").textContent = new Date().getFullYear();
