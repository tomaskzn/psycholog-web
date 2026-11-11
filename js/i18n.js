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
    "meta.title": "Mgr. Táňa Garajová, PhD. – psychologička | Bratislava",
    "meta.description": "Psychoterapeutické a psychologické konzultácie s dospelými a dospievajúcimi v Bratislave. Jungiánsky prístup a Otvorený dialóg.",

    "skip": "Preskočiť na obsah",
    "logo.sub": "psychologička",
    "nav.home": "Domov",
    "nav.label": "Hlavná navigácia",
    "nav.offerings": "Ponúkam",
    "nav.about": "O mne",
    "nav.process": "Priebeh konzultácií",
    "nav.contact": "Kontakt",
    "nav.cta": "Objednať sa",
    "nav.menu": "Menu",

    "hero.eyebrow": "Psychologička · Bratislava",
    "hero.lead": "Psychoterapeutické a psychologické konzultácie s dospelými a dospievajúcimi v Bratislave.",
    "hero.cta1": "Objednať sa",
    "hero.cta2": "Ako pracujem",
    "hero.badge1": "Dospelí a dospievajúci",
    "hero.badge2": "Osobne aj online",
    "hero.badge3": "Bratislava",
    "hero.portraitAlt": "Portrét – Mgr. Táňa Garajová, PhD.",
    "hero.phd": "sociálna psychológia",

    "quote.label": "Citát",
    "quote.brach": "„Jediná cesta, ktorá nás môže priviesť domov, je cesta sebasúcitu.“",
    "quote.jung": "„Svet visí na vlásku a tým je ľudská duša.“",

    "tick.1": "Jungiánska psychoterapia",
    "tick.2": "Otvorený dialóg",
    "tick.3": "Seba-súcit",
    "tick.4": "Vzájomný rešpekt",
    "tick.5": "Dôvera",
    "tick.6": "Bezpečné prostredie",

    "off.eyebrow": "Ponúkam",
    "off.title": "Individuálne konzultácie pod supervíziou",
    "off.lead": "Som psychologička a ponúkam individuálne konzultácie pod supervíziou pre dospelých a dospievajúcich v Bratislave.",
    "off.approach": "Môj prístup má korene v jungiánskej psychoterapii a smere Otvorený dialóg.",
    "off.c1.t": "Jungiánska psychoterapia",
    "off.c1.d": "Jungiánsky orientovaná psychoterapia pristupuje k vnútornému svetu človeka s hlbokou úctou a kladie dôraz na rešpekt k hľadaniu vlastnej cesty každého z nás. Duševné a telesné symptómy chápe ako volanie duše vydať sa k hľadaniu rovnováhy medzi vonkajším a vnútorným, k hľadaniu dialógu medzi vedomím a nevedomím.",
    "off.c2.t": "Otvorený dialóg",
    "off.c2.d": "Prístup Otvorený dialóg namiesto zamerania na izolovaného človeka a jeho diagnózu vníma krízu ako udalosť, ktorá sa odohráva v celom vzťahovom systéme (rodina, priatelia, komunita).",
    "off.values.t": "Istými hodnotami v neistých situáciách sú pre mňa",
    "off.v1": "seba-súcit",
    "off.v2": "vzájomný rešpekt",
    "off.v3": "dôvera",
    "off.safe": "V spolupráci so mnou môžete počítať s bezpečným prostredím, prijatím a otvorenosťou.",
    "off.ethics": "Som frekventantkou výcviku ČSAP a členkou SSAP. Riadim sa etickými princípmi Európskej asociácie pre psychoterapiu.",
    "off.topics.t": "Orientujem sa v problematike",
    "off.t1": "ageizmu",
    "off.t2": "rasizmu",
    "off.t3": "feminizmu",
    "off.t5": "klimatickej krízy",

    "about.eyebrow": "O mne",
    "about.p1": "Pred zahájením terapeutickej praxe som ako výskumníčka a psychologička v zdravotníctve poznávala rôzne podoby starnutia a skúsenosť sexuality, disability, porúch pamäti a osamelosti ľudí v druhej polovici života (neurológie FNUSA-ICRC, Institut výzkumu dětí, mládeže a rodiny FSS MUNI a i.).",
    "about.p2": "V roku 2018 som ako mnohí ľudia v mojej generácii zmenila smerovanie. Po občianskom angažovaní som sa venovala rozvoju a manažmentu sociálnej podpory pre zraniteľné skupiny obyvateľov Bratislavy. Zlepšovali sme tiež pracovné podmienky pre odborníčky a odborníkov pracujúcich v sociálnych službách. Debarierizovali sme verejné inštitúcie a priestory pre ľudí so znevýhodnením, rodičov a ich deti.",
    "about.p3": "S priateľkami a priateľmi tvoríme komunitu občianskeho združenia Zrejme, ktoré podporuje medzigeneračnú spoluprácu a dialóg. Vo voľnom čase rada objavujem knižné vydavateľstvá a divadlá. Ako mama denne kráčam po boku jednej citlivej ľudskej duše.",
    "about.edu": "Štúdium a výcviky",
    "about.e1": "ČSAP: Dlhodobý psychoterapeutický výcvik v analytickej psychológii a psychoterapii",
    "about.e2": "Katedra psychológie, FSS MUNI: PhD. sociálna psychológia",
    "about.e3": "Palackého univerzita v Olomouci: Psycholog ve zdravotnictví",
    "about.e4": "Živica: Sokratov inštitút",
    "about.e5": "Narativ: Možnosti dialogu",
    "about.e6": "Magisterský titul v jednoodborovej psychológii na FSS MUNI",
    "about.courses": "Výber nedávnych kratších kurzov",
    "about.k1": "Rok so súcitom (a) so sebou (SlPE)",
    "about.k2": "Bdelosť a súcit (Centrum long)",
    "about.k3": "Zvyšovanie povedomia o transrodových ľuďoch (OZ Saplinq)",
    "about.k4": "Tělo jako kompas na naší životní cestě (IPOP CZ)",
    "about.k5": "Jak hovořit s člověkem v krizi (Gaudia)",
    "about.k6": "Sexualita lidí v seniorském věku (Freya)",
    "about.k7": "Férové využívanie moci (POPI SK)",
    "about.k8": "Priebežne kurzy v rámci C. G. Jung Institute Zürich a SSAP (napr. práca s queerness témami, symbol stromu, schopnosť rêverie, bratia a sestry a i.)",

    "legal.note": "Poznámka: Nie som poskytovateľkou zdravotnej starostlivosti podľa zákona č. 578/2004 Z. z. Ponúkané služby nenahrádzajú zdravotnú starostlivosť v zdravotníckom zariadení.",

    "proc.eyebrow": "Priebeh konzultácií",
    "proc.title": "Ako prebieha prvá konzultácia?",
    "proc.first": "V úvodnej konzultácii zväčša hovoríme o tom, čo Vás privádza, zoznamujeme sa s Vaším príbehom a okolnosťami Vašej návštevy. Na konci prvého stretnutia sa dohodneme na tom, či a akým spôsobom budeme spolu ďalej pracovať.",
    "proc.journey.t": "Spoločné putovanie",
    "proc.journey.d": "Pravidelnú spoluprácu v rámci našich konzultácií vnímam ako spoločné putovanie a sprevádzanie na individuálnej ceste. Počas tohto putovania pracujeme ako tím – vy ste expertkou alebo expertom na svoj život a mojou úlohou je starostlivosť o terapeutický proces. Vy do našej spolupráce prinášate svoju skúsenosť a ja prinášam prehlbujúce otázky, reflexie, asociácie, postupy. Spolu vytvárame liečivý proces, ktorý ponúka nové možnosti a perspektívy a odkrýva ďalšie východiská v putovaní.",
    "proc.len.l": "Dĺžka",
    "proc.len.d": "Konzultácie obvykle trvajú 45–50 minút.",
    "proc.price.l": "Cena",
    "proc.price.d": "Cena za individuálnu konzultáciu.",
    "proc.online.l": "Online",
    "proc.online.d": "Cena za online konzultáciu.",
    "proc.cancel.l": "Zrušenie termínu",
    "proc.cancel.d": "Čas pre Vás je starostlivo plánovaný a vyhradený výlučne pre Vás. Dohodnutý termín je možné zrušiť najneskôr 48 hodín vopred telefonicky alebo e-mailom. Storno poplatok, ak je rezervácia zrušená menej ako 48 h vopred, je 25 €.",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Objednanie",
    "contact.lead": "Objednanie je možné prostredníctvom e-mailu alebo na telefónnom čísle.",
    "contact.phone": "Telefón",
    "contact.places": "Kde ma nájdete",
    "contact.map1": "Mapa – Podjavorinskej 4, Bratislava",
    "contact.map2": "Mapa – Lazaretská 24, Bratislava",

    "footer.emTitle": "Potrebujete okamžitú pomoc?",
    "footer.emText": "Neposkytujem akútnu krízovú pomoc. V prípade ohrozenia života volajte <a href=\"tel:112\">112</a> alebo nonstop <a href=\"tel:0800500333\">Linku dôvery 0800 500 333</a>.",
    "footer.rights": "Všetky práva vyhradené."
  },

  en: {
    "meta.title": "Táňa Garajová, PhD – Psychologist | Bratislava",
    "meta.description": "Psychotherapeutic and psychological consultations for adults and adolescents in Bratislava. Jungian approach and Open Dialogue.",

    "skip": "Skip to content",
    "logo.sub": "psychologist",
    "nav.home": "Home",
    "nav.label": "Main navigation",
    "nav.offerings": "What I offer",
    "nav.about": "About me",
    "nav.process": "Consultations",
    "nav.contact": "Contact",
    "nav.cta": "Book a session",
    "nav.menu": "Menu",

    "hero.eyebrow": "Psychologist · Bratislava",
    "hero.lead": "Psychotherapeutic and psychological consultations for adults and adolescents in Bratislava.",
    "hero.cta1": "Book a session",
    "hero.cta2": "How I work",
    "hero.badge1": "Adults & adolescents",
    "hero.badge2": "In person & online",
    "hero.badge3": "Bratislava",
    "hero.portraitAlt": "Portrait – Táňa Garajová, PhD",
    "hero.phd": "in social psychology",

    "quote.label": "Quote",
    "quote.brach": "“The only path that can lead us home is the path of self-compassion.”",
    "quote.jung": "“The world hangs on a thin thread, and that is the psyche of man.”",

    "tick.1": "Jungian psychotherapy",
    "tick.2": "Open Dialogue",
    "tick.3": "Self-compassion",
    "tick.4": "Mutual respect",
    "tick.5": "Trust",
    "tick.6": "A safe space",

    "off.eyebrow": "What I offer",
    "off.title": "Individual consultations under supervision",
    "off.lead": "I am a psychologist offering individual consultations under supervision for adults and adolescents in Bratislava.",
    "off.approach": "My approach is rooted in Jungian psychotherapy and the Open Dialogue approach.",
    "off.c1.t": "Jungian psychotherapy",
    "off.c1.d": "Jungian-oriented psychotherapy approaches a person's inner world with deep reverence and emphasises respect for each of us finding our own path. It understands mental and physical symptoms as a call of the soul to seek balance between the outer and the inner, and a dialogue between the conscious and the unconscious.",
    "off.c2.t": "Open Dialogue",
    "off.c2.d": "Rather than focusing on an isolated person and their diagnosis, the Open Dialogue approach sees a crisis as something that unfolds within a whole network of relationships (family, friends, community).",
    "off.values.t": "Steady values in uncertain times, for me, are",
    "off.v1": "self-compassion",
    "off.v2": "mutual respect",
    "off.v3": "trust",
    "off.safe": "Working with me, you can count on a safe environment, acceptance and openness.",
    "off.ethics": "I am a trainee in the ČSAP training programme and a member of SSAP. I follow the ethical principles of the European Association for Psychotherapy.",
    "off.topics.t": "I am well informed on",
    "off.t1": "ageism",
    "off.t2": "racism",
    "off.t3": "feminism",
    "off.t5": "the climate crisis",

    "about.eyebrow": "About me",
    "about.p1": "Before starting my therapeutic practice, I worked as a researcher and a health psychologist, getting to know the many faces of ageing and the experience of sexuality, disability, memory disorders and loneliness in the second half of life (neurology at FNUSA-ICRC, the Institute for Research on Children, Youth and Family at FSS MUNI, and others).",
    "about.p2": "In 2018, like many people of my generation, I changed direction. After becoming involved in civic activism, I worked on developing and managing social support for vulnerable groups of Bratislava residents. We also improved working conditions for professionals in social services, and made public institutions and spaces accessible for people with disabilities, parents and their children.",
    "about.p3": "Together with friends, I am part of the community of the civic association Zrejme, which supports intergenerational cooperation and dialogue. In my free time I enjoy discovering book publishers and theatres. As a mother, I walk every day alongside one sensitive human soul.",
    "about.edu": "Education & training",
    "about.e1": "ČSAP: Long-term psychotherapy training in analytical psychology and psychotherapy",
    "about.e2": "Department of Psychology, FSS MUNI: PhD in social psychology",
    "about.e3": "Palacký University Olomouc: Psychologist in healthcare",
    "about.e4": "Živica: Socrates Institute",
    "about.e5": "Narativ: Possibilities of dialogue",
    "about.e6": "Master's degree in psychology (single-subject), FSS MUNI",
    "about.courses": "Selected recent short courses",
    "about.k1": "A year with compassion (and) for oneself (SlPE)",
    "about.k2": "Mindfulness and compassion (Centrum long)",
    "about.k3": "Raising awareness about transgender people (OZ Saplinq)",
    "about.k4": "The body as a compass on our life's journey (IPOP CZ)",
    "about.k5": "How to talk with a person in crisis (Gaudia)",
    "about.k6": "Sexuality in older age (Freya)",
    "about.k7": "Fair use of power (POPI SK)",
    "about.k8": "Ongoing courses with the C. G. Jung Institute Zürich and SSAP (e.g. working with queerness, the symbol of the tree, the capacity for rêverie, brothers and sisters, and more)",

    "legal.note": "Note: I am not a healthcare provider under Slovak Act No. 578/2004 Coll. The services offered do not replace healthcare in a medical facility.",

    "proc.eyebrow": "Consultations",
    "proc.title": "What happens in the first consultation?",
    "proc.first": "In the first consultation we usually talk about what brings you, and I get to know your story and the circumstances of your visit. At the end of the first meeting we agree whether, and how, we will continue working together.",
    "proc.journey.t": "A shared journey",
    "proc.journey.d": "I see our regular work together as a shared journey and as accompanying you on your individual path. Along the way we work as a team – you are the expert on your own life, and my role is to take care of the therapeutic process. You bring your experience, and I bring deepening questions, reflections, associations and methods. Together we create a healing process that opens new possibilities and perspectives and reveals further ways forward on the journey.",
    "proc.len.l": "Length",
    "proc.len.d": "Consultations usually last 45–50 minutes.",
    "proc.price.l": "Price",
    "proc.price.d": "Price of an individual consultation.",
    "proc.online.l": "Online",
    "proc.online.d": "Price of an online consultation.",
    "proc.cancel.l": "Cancellation",
    "proc.cancel.d": "Your time is carefully planned and reserved exclusively for you. An agreed appointment can be cancelled by phone or e-mail no later than 48 hours in advance. Cancellations made less than 48 hours in advance are charged a fee of €25.",

    "contact.eyebrow": "Contact",
    "contact.title": "Booking",
    "contact.lead": "You can book a consultation by e-mail or by phone.",
    "contact.phone": "Phone",
    "contact.places": "Where to find me",
    "contact.map1": "Map – Podjavorinskej 4, Bratislava",
    "contact.map2": "Map – Lazaretská 24, Bratislava",

    "footer.emTitle": "Need immediate help?",
    "footer.emText": "I do not provide acute crisis care. If a life is in danger, call <a href=\"tel:112\">112</a> or the 24/7 <a href=\"tel:0800500333\">Linka dôvery helpline 0800 500 333</a>.",
    "footer.rights": "All rights reserved."
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
