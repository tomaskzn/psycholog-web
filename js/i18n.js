/* =========================================================
   Translations – all website texts live here.
   Edit the Slovak (sk) and English (en) values side by side.
   Keys are referenced in index.html via:
     data-i18n="key"          -> text content
     data-i18n-html="key"     -> HTML content (for <em>, <a>…)
     data-i18n-attr="attr:key" -> attribute (alt, title, aria-label)
   ========================================================= */
const translations = {
  sk: {
    "meta.title": "Mgr. Ján Novák – Psychológ | Psychologická ambulancia",
    "meta.description": "Psychologická ambulancia – individuálna terapia, pomoc pri úzkosti a strese, párové poradenstvo a online konzultácie.",

    "skip": "Preskočiť na obsah",
    "logo.sub": "psychológ",
    "nav.home": "Domov",
    "nav.label": "Hlavná navigácia",
    "nav.offerings": "Ponuka",
    "nav.about": "O mne",
    "nav.process": "Ako to prebieha",
    "nav.prices": "Cenník",
    "nav.faq": "Otázky",
    "nav.contact": "Kontakt",
    "nav.cta": "Objednať sa",
    "nav.menu": "Menu",

    "hero.eyebrow": "Psychologická ambulancia · Bratislava",
    "hero.title": "Bezpečný priestor pre <em>rozhovor</em>, pochopenie a zmenu.",
    "hero.lead": "Som Mgr. Ján Novák, psychológ. Pomáham ľuďom zvládať úzkosť, stres, náročné životné obdobia a nachádzať cestu späť k sebe.",
    "hero.cta1": "Objednať konzultáciu",
    "hero.cta2": "S čím pomáham",
    "hero.badge1": "Osobne aj online",
    "hero.badge2": "Mlčanlivosť zaručená",
    "hero.badge3": "Termín do 7 dní",
    "hero.portraitAlt": "Portrét – Mgr. Ján Novák",
    "hero.years": "rokov praxe",

    "off.eyebrow": "Ponuka",
    "off.title": "S čím vám môžem pomôcť",
    "off.lead": "Každý príbeh je iný. Spoločne nájdeme prístup, ktorý bude fungovať práve pre vás.",
    "off.c1.t": "Individuálna psychoterapia",
    "off.c1.d": "Dlhodobejšia spolupráca zameraná na pochopenie seba, svojich emócií a vzorcov správania.",
    "off.c2.t": "Úzkosť, stres a vyhorenie",
    "off.c2.d": "Praktické techniky na zvládanie panických atakov, napätia, nespavosti a pracovného preťaženia.",
    "off.c3.t": "Vzťahy a párové poradenstvo",
    "off.c3.d": "Podpora pri komunikačných ťažkostiach, konfliktoch, rozchode či budovaní zdravých hraníc.",
    "off.c4.t": "Krízová intervencia",
    "off.c4.d": "Rýchla pomoc v náročných situáciách – strata blízkeho, trauma, náhle životné zmeny.",
    "off.c5.t": "Online konzultácie",
    "off.c5.d": "Plnohodnotné sedenia cez zabezpečený videohovor – z pohodlia domova, kdekoľvek ste.",
    "off.c6.t": "Psychologická diagnostika",
    "off.c6.d": "Odborné vyšetrenie osobnosti, kognitívnych schopností a emočného prežívania vrátane správy.",

    "about.eyebrow": "O mne",
    "about.title": "Rád vás vypočujem – bez súdenia a bez ponáhľania.",
    "about.p1": "Psychológii sa venujem viac ako 10 rokov. Pracoval som v nemocničnom prostredí, v poradenskom centre a dnes otváram vlastnú ambulanciu, kde môžem klientom venovať čas a pozornosť, ktorú si zaslúžia.",
    "about.p2": "Vo svojej práci kombinujem kognitívno-behaviorálnu terapiu (KBT) s prístupom zameraným na človeka. Verím, že každý má v sebe zdroje na zmenu – mojou úlohou je pomôcť vám ich objaviť.",
    "about.v1.t": "Rešpekt",
    "about.v1.d": "Prijímam vás takého, aký ste.",
    "about.v2.t": "Diskrétnosť",
    "about.v2.d": "Všetko ostáva medzi nami.",
    "about.v3.t": "Odbornosť",
    "about.v3.d": "Overené metódy a supervízia.",
    "about.edu": "Vzdelanie a prax",
    "about.t1": "Výcvik v kognitívno-behaviorálnej terapii (KBT)",
    "about.t2": "Atestácia v klinickej psychológii",
    "about.t3": "Klinický psychológ, Univerzitná nemocnica Bratislava",
    "about.t4": "Mgr. Psychológia, Filozofická fakulta UK v Bratislave",

    "proc.eyebrow": "Ako prebieha konzultácia",
    "proc.title": "Prvý krok je ten najťažší. Ďalšie zvládneme spolu.",
    "proc.lead": "Žiadne zložité formality. Takto vyzerá naša spolupráca od prvého kontaktu.",
    "proc.s1.t": "Ozvete sa mi",
    "proc.s1.d": "Napíšte mi cez formulár, e-mail alebo zavolajte. Odpoviem do 24 hodín a dohodneme termín.",
    "proc.s2.t": "Úvodné stretnutie",
    "proc.s2.d": "Na prvom sedení (cca 60 min.) sa spoznáme, porozprávame o tom, čo vás trápi, a o vašich očakávaniach.",
    "proc.s3.t": "Spoločný plán",
    "proc.s3.d": "Dohodneme sa na cieľoch, frekvencii stretnutí a prístupe, ktorý vám bude vyhovovať.",
    "proc.s4.t": "Pravidelné sedenia",
    "proc.s4.d": "Stretávame sa spravidla raz týždenne alebo raz za dva týždne – osobne v ambulancii alebo online.",
    "proc.note": "Všetko, čo na sedení zaznie, podlieha povinnej mlčanlivosti v zmysle zákona. Vaše údaje spracúvam v súlade s GDPR.",

    "price.eyebrow": "Cenník",
    "price.title": "Transparentné ceny",
    "price.lead": "Platbu je možné uskutočniť v hotovosti, kartou alebo bankovým prevodom.",
    "price.popular": "Najčastejšie",
    "price.p1.t": "Úvodná konzultácia",
    "price.p1.dur": "60 min",
    "price.p1.f1": "Zmapovanie situácie",
    "price.p1.f2": "Odporúčanie ďalšieho postupu",
    "price.p1.f3": "Osobne alebo online",
    "price.p2.t": "Individuálne sedenie",
    "price.p2.dur": "50 min",
    "price.p2.f1": "Psychoterapia a poradenstvo",
    "price.p2.f2": "Pravidelné stretnutia",
    "price.p2.f3": "Balík 5 sedení za 200 €",
    "price.p3.t": "Párové sedenie",
    "price.p3.dur": "80 min",
    "price.p3.f1": "Pre páry a rodinných príslušníkov",
    "price.p3.f2": "Práca na komunikácii",
    "price.p3.f3": "Osobne alebo online",
    "price.note": "Psychologická diagnostika – cena podľa rozsahu vyšetrenia. Služby nie sú hradené zdravotnou poisťovňou.",

    "faq.eyebrow": "Časté otázky",
    "faq.title": "Možno vás zaujíma",
    "faq.q1": "Potrebujem odporúčanie od lekára?",
    "faq.a1": "Nie. Objednať sa môžete priamo, bez výmenného lístka. Stačí mi napísať alebo zavolať.",
    "faq.q2": "Je to, čo poviem, naozaj dôverné?",
    "faq.a2": "Áno. Psychológ je viazaný zákonnou povinnosťou mlčanlivosti. Výnimkou sú iba situácie priameho ohrozenia života, ktoré stanovuje zákon.",
    "faq.q3": "Ako funguje online konzultácia?",
    "faq.a3": "Pred sedením vám pošlem odkaz na zabezpečený videohovor. Potrebujete len počítač alebo telefón, stabilný internet a tiché miesto, kde nebudete rušení.",
    "faq.q4": "Čo ak potrebujem termín zrušiť?",
    "faq.a4": "Termín môžete bezplatne zrušiť alebo presunúť najneskôr 24 hodín vopred. Pri neskoršom zrušení si účtujem 50 % z ceny sedenia.",
    "faq.q5": "Prepláca terapiu zdravotná poisťovňa?",
    "faq.a5": "Ambulancia je zatiaľ súkromná a služby nie sú hradené z verejného zdravotného poistenia. Na požiadanie vystavím doklad o platbe.",
    "faq.q6": "Koľko sedení budem potrebovať?",
    "faq.a6": "Závisí to od vašej situácie a cieľov. Niekomu pomôžu 3–5 stretnutí, iní uprednostnia dlhodobejšiu spoluprácu. Priebežne to spolu vyhodnocujeme.",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Ozvite sa mi",
    "contact.lead": "Napíšte mi pár slov o tom, s čím by ste potrebovali pomôcť. Ozvem sa vám do 24 hodín.",
    "contact.phone": "Telefón",
    "contact.address": "Adresa",
    "contact.hours": "Ordinačné hodiny",
    "contact.closed": "Zatvorené",
    "contact.byAppt": "Stretnutia len po predchádzajúcom objednaní.",
    "contact.mapTitle": "Mapa – poloha ambulancie",
    "day.mon": "Pondelok",
    "day.tue": "Utorok",
    "day.wed": "Streda",
    "day.thu": "Štvrtok",
    "day.fri": "Piatok",
    "day.wknd": "Víkend",

    "form.name": "Meno a priezvisko",
    "form.email": "E-mail",
    "form.phone": "Telefón (nepovinné)",
    "form.type": "Mám záujem o",
    "form.type1": "Osobnú konzultáciu",
    "form.type2": "Online konzultáciu",
    "form.type3": "Párové sedenie",
    "form.type4": "Psychologickú diagnostiku",
    "form.msg": "Správa",
    "form.consent": "Súhlasím so spracovaním osobných údajov za účelom odpovede na moju správu.",
    "form.submit": "Odoslať správu",
    "form.sending": "Odosielam…",
    "form.ok": "Ďakujem za správu! Ozvem sa vám čo najskôr.",
    "form.err": "Správu sa nepodarilo odoslať. Skúste to prosím znova alebo mi napíšte e-mail.",
    "form.invalid": "Prosím, vyplňte všetky povinné polia a potvrďte súhlas.",
    "form.notConfigured": "Formulár ešte nie je prepojený. Napíšte mi zatiaľ priamo na e-mail.",

    "footer.emTitle": "Potrebujete okamžitú pomoc?",
    "footer.emText": "Ambulancia neposkytuje akútnu krízovú pomoc. V prípade ohrozenia života volajte <a href=\"tel:112\">112</a> alebo nonstop <a href=\"tel:0800500333\">Linku dôvery 0800 500 333</a>.",
    "footer.rights": "Všetky práva vyhradené.",
    "footer.gdpr": "Osobné údaje spracúvam v súlade s nariadením GDPR."
  },

  en: {
    "meta.title": "Ján Novák, MA – Psychologist | Psychology Practice",
    "meta.description": "Psychology practice – individual therapy, help with anxiety and stress, couples counselling and online consultations.",

    "skip": "Skip to content",
    "logo.sub": "psychologist",
    "nav.home": "Home",
    "nav.label": "Main navigation",
    "nav.offerings": "Services",
    "nav.about": "About me",
    "nav.process": "How it works",
    "nav.prices": "Prices",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Book a session",
    "nav.menu": "Menu",

    "hero.eyebrow": "Psychology practice · Bratislava",
    "hero.title": "A safe space for <em>conversation</em>, understanding and change.",
    "hero.lead": "I'm Ján Novák, a psychologist. I help people cope with anxiety, stress and difficult life periods, and find their way back to themselves.",
    "hero.cta1": "Book a consultation",
    "hero.cta2": "How I can help",
    "hero.badge1": "In person & online",
    "hero.badge2": "Strictly confidential",
    "hero.badge3": "Appointment within 7 days",
    "hero.portraitAlt": "Portrait – Ján Novák, psychologist",
    "hero.years": "years of practice",

    "off.eyebrow": "Services",
    "off.title": "How I can help you",
    "off.lead": "Every story is different. Together we'll find an approach that works for you.",
    "off.c1.t": "Individual psychotherapy",
    "off.c1.d": "Longer-term work focused on understanding yourself, your emotions and your patterns of behaviour.",
    "off.c2.t": "Anxiety, stress & burnout",
    "off.c2.d": "Practical techniques for managing panic attacks, tension, insomnia and work overload.",
    "off.c3.t": "Relationships & couples counselling",
    "off.c3.d": "Support with communication difficulties, conflicts, breakups or building healthy boundaries.",
    "off.c4.t": "Crisis intervention",
    "off.c4.d": "Fast help in difficult situations – loss of a loved one, trauma, sudden life changes.",
    "off.c5.t": "Online consultations",
    "off.c5.d": "Full sessions via secure video call – from the comfort of your home, wherever you are.",
    "off.c6.t": "Psychological assessment",
    "off.c6.d": "Professional assessment of personality, cognitive abilities and emotional wellbeing, including a written report.",

    "about.eyebrow": "About me",
    "about.title": "I'm here to listen – without judgement and without rushing.",
    "about.p1": "I have been working in psychology for over 10 years. I've worked in a hospital setting and a counselling centre, and now I'm opening my own practice where I can give clients the time and attention they deserve.",
    "about.p2": "In my work I combine cognitive behavioural therapy (CBT) with a person-centred approach. I believe everyone has the resources for change within them – my role is to help you discover them.",
    "about.v1.t": "Respect",
    "about.v1.d": "I accept you as you are.",
    "about.v2.t": "Discretion",
    "about.v2.d": "Everything stays between us.",
    "about.v3.t": "Expertise",
    "about.v3.d": "Proven methods and supervision.",
    "about.edu": "Education & experience",
    "about.t1": "Training in cognitive behavioural therapy (CBT)",
    "about.t2": "Board certification in clinical psychology",
    "about.t3": "Clinical psychologist, University Hospital Bratislava",
    "about.t4": "MA in Psychology, Faculty of Arts, Comenius University Bratislava",

    "proc.eyebrow": "How a consultation works",
    "proc.title": "The first step is the hardest. We'll take the rest together.",
    "proc.lead": "No complicated formalities. This is what our work together looks like, from the first contact.",
    "proc.s1.t": "You get in touch",
    "proc.s1.d": "Write to me via the form, by e-mail or give me a call. I'll reply within 24 hours and we'll find a time.",
    "proc.s2.t": "First meeting",
    "proc.s2.d": "In the first session (approx. 60 min) we get to know each other and talk about what's troubling you and what you expect.",
    "proc.s3.t": "A shared plan",
    "proc.s3.d": "We agree on goals, how often we meet and an approach that suits you.",
    "proc.s4.t": "Regular sessions",
    "proc.s4.d": "We usually meet weekly or every two weeks – in person at the practice or online.",
    "proc.note": "Everything said in a session is subject to legal professional confidentiality. Your personal data is processed in accordance with GDPR.",

    "price.eyebrow": "Prices",
    "price.title": "Transparent pricing",
    "price.lead": "You can pay in cash, by card or by bank transfer.",
    "price.popular": "Most popular",
    "price.p1.t": "Initial consultation",
    "price.p1.dur": "60 min",
    "price.p1.f1": "Understanding your situation",
    "price.p1.f2": "Recommendation for next steps",
    "price.p1.f3": "In person or online",
    "price.p2.t": "Individual session",
    "price.p2.dur": "50 min",
    "price.p2.f1": "Psychotherapy & counselling",
    "price.p2.f2": "Regular meetings",
    "price.p2.f3": "Package of 5 sessions for €200",
    "price.p3.t": "Couples session",
    "price.p3.dur": "80 min",
    "price.p3.f1": "For couples and family members",
    "price.p3.f2": "Working on communication",
    "price.p3.f3": "In person or online",
    "price.note": "Psychological assessment – price depends on the scope. Services are not covered by health insurance.",

    "faq.eyebrow": "FAQ",
    "faq.title": "You might be wondering",
    "faq.q1": "Do I need a referral from a doctor?",
    "faq.a1": "No. You can book directly, without a referral. Just send me a message or call.",
    "faq.q2": "Is what I say really confidential?",
    "faq.a2": "Yes. Psychologists are bound by a legal duty of confidentiality. The only exceptions are situations of immediate danger to life, as defined by law.",
    "faq.q3": "How does an online consultation work?",
    "faq.a3": "Before the session I'll send you a link to a secure video call. All you need is a computer or phone, a stable internet connection and a quiet place where you won't be disturbed.",
    "faq.q4": "What if I need to cancel?",
    "faq.a4": "You can cancel or reschedule free of charge up to 24 hours in advance. For later cancellations I charge 50% of the session fee.",
    "faq.q5": "Is therapy covered by health insurance?",
    "faq.a5": "The practice is currently private and services are not covered by public health insurance. I can issue a receipt on request.",
    "faq.q6": "How many sessions will I need?",
    "faq.a6": "It depends on your situation and goals. Some people benefit from 3–5 sessions, others prefer longer-term work. We review progress together along the way.",

    "contact.eyebrow": "Contact",
    "contact.title": "Get in touch",
    "contact.lead": "Write me a few words about what you'd like help with. I'll get back to you within 24 hours.",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.hours": "Opening hours",
    "contact.closed": "Closed",
    "contact.byAppt": "Sessions by appointment only.",
    "contact.mapTitle": "Map – practice location",
    "day.mon": "Monday",
    "day.tue": "Tuesday",
    "day.wed": "Wednesday",
    "day.thu": "Thursday",
    "day.fri": "Friday",
    "day.wknd": "Weekend",

    "form.name": "Full name",
    "form.email": "E-mail",
    "form.phone": "Phone (optional)",
    "form.type": "I'm interested in",
    "form.type1": "In-person consultation",
    "form.type2": "Online consultation",
    "form.type3": "Couples session",
    "form.type4": "Psychological assessment",
    "form.msg": "Message",
    "form.consent": "I agree to the processing of my personal data for the purpose of replying to my message.",
    "form.submit": "Send message",
    "form.sending": "Sending…",
    "form.ok": "Thank you for your message! I'll get back to you soon.",
    "form.err": "The message could not be sent. Please try again or e-mail me directly.",
    "form.invalid": "Please fill in all required fields and confirm your consent.",
    "form.notConfigured": "The form is not connected yet. For now, please e-mail me directly.",

    "footer.emTitle": "Need immediate help?",
    "footer.emText": "This practice does not provide acute crisis care. If a life is in danger, call <a href=\"tel:112\">112</a> or the 24/7 <a href=\"tel:0800500333\">Linka dôvery helpline 0800 500 333</a>.",
    "footer.rights": "All rights reserved.",
    "footer.gdpr": "Personal data is processed in accordance with GDPR."
  }
};

const SUPPORTED_LANGS = ["sk", "en"];
const DEFAULT_LANG = "sk";
let currentLang = DEFAULT_LANG;

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ?? translations[DEFAULT_LANG][key] ?? key;
}

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    el.dataset.i18nAttr.split(";").forEach(pair => {
      const [attr, key] = pair.split(":").map(s => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });

  document.title = t("meta.title");
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", t("meta.description"));

  document.querySelectorAll(".lang-switch [data-lang]").forEach(btn => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable */ }

  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);
}

function detectLang() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (SUPPORTED_LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (e) { /* storage unavailable */ }
  const browser = (navigator.language || "").slice(0, 2).toLowerCase();
  if (!browser || browser === "sk" || browser === "cs") return "sk";
  return "en";
}

document.querySelectorAll(".lang-switch [data-lang]").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

setLang(detectLang());
