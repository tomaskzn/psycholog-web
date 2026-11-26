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
    "meta.title": "Mgr. Táňa Garajová, PhD. – psychologička",
    "meta.description": "Psychologické konzultácie s dospelými a dospievajúcimi. Jungiánsky prístup a Otvorený dialóg.",

    "gate.text": "Stránka sa pripravuje. Pre vstup zadajte prihlasovacie údaje.",
    "gate.user": "Prihlasovacie meno",
    "gate.pass": "Heslo",
    "gate.btn": "Vstúpiť",
    "gate.err": "Nesprávne meno alebo heslo.",

    "skip": "Preskočiť na obsah",
    "logo.sub": "psychologické konzultácie",
    "nav.home": "Domov",
    "nav.label": "Hlavná navigácia",
    "nav.offerings": "O spolupráci",
    "nav.about": "O mne",
    "nav.process": "Priebeh konzultácií",
    "nav.contact": "Kontakt",
    "nav.cta": "Objednať sa",
    "nav.menu": "Menu",

    "hero.eyebrow": "Psychologička",
    "hero.lead": "Psychologické konzultácie s dospelými a dospievajúcimi, ktorí chcú podporiť svoje duševné zdravie",
    "hero.cta1": "Objednať sa",
    "hero.cta2": "Ako pracujem",
    "hero.badge1": "Dospelí a dospievajúci",
    "hero.badge2": "Osobne aj online",
    "hero.portraitAlt": "Portrét – Mgr. Táňa Garajová, PhD.",

    "quote.label": "Citát",
    "quote.brach": "„Cesta, ktorá nás vedie domov, je cesta sebasúcitu.“",
    "quote.jung": "„Svet visí na vlásku a tým je ľudská duša.“",

    "off.eyebrow": "O spolupráci",
    "off.lead": "Som psychologička a poskytujem individuálne konzultácie pod supervíziou pre tých dospelých a dospievajúcich, ktorí chcú podporiť svoje duševné zdravie. Pri spolupráci so mnou môžete počítať s bezpečným prostredím, prijatím a otvorenosťou.",
    "off.c1.t": "Jungiánska psychoterapia",
    "off.c1.d": "Môj prístup má korene v jungiánskej psychoterapii, ktorá pristupuje k vnútornému svetu človeka s úctou a kladie dôraz na rešpekt k vlastnej ceste každého z nás. Psychické a telesné symptómy chápe ako volanie duše vydať sa k hľadaniu rovnováhy medzi vonkajším a vnútorným. Na podporu dialógu medzi vedomým a nevedomým prežívaním využíva prácu so symbolom.",
    "off.c2.t": "Otvorený dialóg",
    "off.c2.d": "Školila som sa aj v prístupe Otvorený dialóg. Tento prístup nevníma ťažké psychické stavy ako izolovanú poruchu jednotlivca, ale ako udalosť, ktorá sa odohráva vo vzťahovom systéme. Popri odbornom pohľade psychológa, či psychiatra je relevantný pohľad človeka v kríze, názor jeho blízkych, priateľov a členov komunity. V dialogických konverzáciách sa rodia nové pohľady a riešenia.",
    "off.ethics": "Som frekventantkou výcviku České společnosti pro analytickou psychologii, ktorý je certifikovaný Českou asociací pro psychoterapii. Som členkou Slovenskej spoločnosti analytickej psychológie. Riadim sa etickými princípmi Európskej asociácie pre psychoterapiu. Orientujem sa v problematike vekovej a genderovej rovnosti. Zaujímam sa o témy etnickej rovnosti, LGBTQ+ práv a problematiku klimatickej krízy.",

    "about.eyebrow": "O mne",
    "about.p1": "Pred otvorením psychologickej praxe som ako výskumníčka a psychologička v zdravotníctve poznávala rôzne podoby starnutia a skúsenosť sexuality, zdravotného znevýhodnenia a osamelosti ľudí v druhej polovici života (neurológie FNUSA-ICRC, Institut výzkumu dětí, mládeže a rodiny FSS MUNI, Centrum pro výzkum stárnutí FSS MUNI).",
    "about.p2": "Po občianskom angažovaní sa v hnutí Za slušné Slovensko som v roku 2019 zmenila svoje smerovanie. Na bratislavskom magistráte som sa v manažérskej roli päť rokov venovala rozvoju a manažmentu sociálnej podpory pre zraniteľné obyvateľky a obyvateľov mesta. Sprístupňovali sme tiež verejné inštitúcie a priestory pre ľudí so znevýhodnením, rodičov a ich deti. Neskôr sme v menšom tíme skvalitňovali pracovné podmienky pre odborníčky a odborníkov pracujúcich v sociálnych službách.",
    "about.p3": "S priateľkami a priateľmi od roku 2017 tvoríme komunitu občianskeho združenia Zrejme, ktoré podporuje medzigeneračnú spoluprácu a dialóg. Vo voľnom čase rada objavujem knihy a divadelné predstavenia. Ako mama denne kráčam po boku jednej citlivej detskej duše.",
    "about.edu": "Štúdium a výcviky",
    "about.e1": "<strong>ČSAP</strong><span>Dlhodobý výcvik v analytickej psychoterapii</span>",
    "about.e2": "<strong>Katedra psychológie, FSS MUNI</strong><span>PhD. sociálna psychológia</span>",
    "about.e3": "<strong>Palackého univerzita v Olomouci</strong><span>Psychológ v zdravotníctve</span>",
    "about.e4": "<strong>Živica</strong><span>Sokratov inštitút</span>",
    "about.e5": "<strong>Narativ</strong><span>Možnosti dialógu</span>",
    "about.e6": "<strong>Katedra psychológie, FSS MUNI</strong><span>Mgr. v jednoodborovej psychológii</span>",
    "about.courses": "Výber nedávnych kratších kurzov",
    "about.k1": "Rok so súcitom (a) so sebou (<a href=\"https://www.emdr-sipe.sk/\" target=\"_blank\" rel=\"noopener\">SlPE</a>)",
    "about.k2": "Bdelosť a súcit (<a href=\"https://centrumlong.sk/\" target=\"_blank\" rel=\"noopener\">Centrum Long</a>)",
    "about.k3": "Priebežne kurzy v rámci <a href=\"https://ssap.sk/\" target=\"_blank\" rel=\"noopener\">SSAP</a> a <a href=\"https://junginstitut.ch/en/\" target=\"_blank\" rel=\"noopener\">C. G. Jung Institute Zürich</a>",
    "about.k4": "Zvyšovanie povedomia o transrodových ľuďoch (<a href=\"https://www.saplinq.org/\" target=\"_blank\" rel=\"noopener\">OZ Saplinq</a>)",
    "about.k5": "Telo ako kompas na našej životnej ceste (<a href=\"https://www.processwork.cz/\" target=\"_blank\" rel=\"noopener\">IPOP CZ</a>)",
    "about.k6": "Ako hovoriť s človekom v kríze (<a href=\"https://gaudia.cz/\" target=\"_blank\" rel=\"noopener\">Gaudia</a>)",
    "about.k7": "Sexualita ľudí v seniorskom veku (<a href=\"https://www.freya.live/cs\" target=\"_blank\" rel=\"noopener\">Freya</a>)",
    "about.k8": "Férové využívanie moci (<a href=\"https://www.processwork.sk/\" target=\"_blank\" rel=\"noopener\">POPI SK</a>)",

    "legal.note": "Poznámka: Nie som poskytovateľkou zdravotnej starostlivosti podľa zákona č. 578/2004 Z. z. Ponúkané služby nenahrádzajú zdravotnú starostlivosť v zdravotníckom zariadení.",

    "proc.eyebrow": "Priebeh konzultácií",
    "proc.title": "Ako prebieha prvá konzultácia?",
    "proc.first": "V úvodnej konzultácii zväčša hovoríme o tom, čo Vás privádza a zoznamujeme sa s Vaším príbehom. Na konci prvého stretnutia sa dohodneme na tom, akým spôsobom budeme spolu ďalej pracovať.",
    "proc.journey.t": "Ako si predstaviť spoločné konzultácie?",
    "proc.journey.d": "Pravidelnú spoluprácu v rámci našich konzultácií vnímam ako sprevádzanie na individuálnej ceste a zároveň ako spoločné putovanie. Počas tohto putovania pracujeme ako tím – vy ste expertkou alebo expertom na svoj život a mojou úlohou je starostlivosť o terapeutický proces. Vy do našej spolupráce prinášate svoju skúsenosť a ja prinášam prehlbujúce otázky, reflexie, asociácie, postupy. Spolu vytvárame liečivý proces, ktorý ponúka nové možnosti a perspektívy a odkrýva ďalšie východiská v putovaní.",
    "proc.len.l": "Dĺžka",
    "proc.len.d": "Konzultácie obvykle trvajú 45–50 minút.",
    "proc.price.l": "Cena",
    "proc.price.d": "Cena za individuálnu konzultáciu osobne aj online.",
    "proc.cancel.l": "Zrušenie termínu",
    "proc.cancel.d": "Čas pre Vás je starostlivo plánovaný a vyhradený výlučne pre Vás. Dohodnutý termín je možné zrušiť najneskôr 48 hodín vopred telefonicky alebo e-mailom. Ak je rezervácia zrušená menej ako 48 h vopred, storno poplatok je 25 €.",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Objednanie",
    "contact.lead": "Objednanie je možné e-mailom alebo na telefónnom čísle prostredníctvom SMS / WhatsApp. Využiť môžete tiež formulár. Kontaktujem Vás hneď, ako to bude možné.",

    "form.name": "Meno a priezvisko",
    "form.email": "E-mail",
    "form.phone": "Telefón (nepovinné)",
    "form.type": "Mám záujem o",
    "form.type1": "Osobnú konzultáciu",
    "form.type2": "Online konzultáciu",
    "form.msg": "Správa",
    "form.consent": "Súhlasím so spracovaním osobných údajov za účelom odpovede na moju správu.",
    "form.submit": "Odoslať správu",
    "form.sending": "Odosielam…",
    "form.ok": "Ďakujem za správu! Ozvem sa vám čo najskôr.",
    "form.err": "Správu sa nepodarilo odoslať. Skúste to prosím znova alebo mi napíšte e-mail.",
    "form.invalid": "Prosím, vyplňte všetky povinné polia a potvrďte súhlas.",
    "contact.phone": "SMS / WhatsApp",
    "contact.places": "Kde ma nájdete",
    "contact.map2": "Mapa – Lazaretská 24, Bratislava",

    "off.sit.t": "V akých situáciách Vás môžu konzultácie podporiť?",
    "off.s1": "Životné zmeny a krízy",
    "off.s2": "Vzťahové problémy",
    "off.s3": "Vzťah k sebe a práca s hranicami",
    "off.s4": "Stres, preťaženie a strata radosti",
    "off.s5": "Straty a smútenie",
    "off.s6": "Strachy a úzkosti",
    "off.s7": "Pocity opustenia a samoty",
    "off.s8": "Psychosomatické ťažkosti",
    "off.s9": "Coming-out a tranzícia",
    "off.s10": "iné",
    "off.how.t": "Ako pracujem?",
    "contact.access": "Vstup do budovy je bezbariérový.",
    "footer.emTitle": "Potrebujete okamžitú pomoc?",
    "footer.emText": "V prípade akútnej krízovej situácie kontaktujte <a href=\"tel:0800800566\">Linku Nezábudka 0800 800 566</a>.",
    "footer.rights": "Všetky práva vyhradené."
  },

  en: {
    "meta.title": "Táňa Garajová, PhD – Psychologist",
    "meta.description": "Psychological counselling for adults and adolescents who wish to support their mental health. Jungian approach and Open Dialogue.",

    "gate.text": "This website is being prepared. Please log in to continue.",
    "gate.user": "Username",
    "gate.pass": "Password",
    "gate.btn": "Enter",
    "gate.err": "Incorrect username or password.",

    "skip": "Skip to content",
    "logo.sub": "psychological consultations",
    "nav.home": "Home",
    "nav.label": "Main navigation",
    "nav.offerings": "About our cooperation",
    "nav.about": "About me",
    "nav.process": "Consultations",
    "nav.contact": "Contact",
    "nav.cta": "Book a session",
    "nav.menu": "Menu",

    "hero.eyebrow": "Psychologist",
    "hero.lead": "Psychological counselling for adults and adolescents who wish to support their mental health",
    "hero.cta1": "Book a session",
    "hero.cta2": "How I work",
    "hero.badge1": "Adults & adolescents",
    "hero.badge2": "In person & online",
    "hero.portraitAlt": "Portrait – Táňa Garajová, PhD",

    "quote.label": "Quote",
    "quote.brach": "“The path that leads us home is the path of self-compassion.”",
    "quote.jung": "“The world hangs by a thread, and that thread is the human soul.”",

    "off.eyebrow": "About our cooperation",
    "off.lead": "I am a psychologist and provide individual counselling under supervision for adults and adolescents who wish to support their mental health. When working with me, you can count on a safe environment, acceptance and openness.",
    "off.c1.t": "Jungian psychotherapy",
    "off.c1.d": "My approach is rooted in Jungian psychotherapy, which treats a person’s inner world with deep respect and emphasises understanding for each individual’s own journey. It understands psychological and physical symptoms as a call from the soul to set out in search of a balance between the external and the internal. To support a dialogue between conscious and unconscious experiences, it uses symbolic work.",
    "off.c2.t": "Open Dialogue",
    "off.c2.d": "I have also received training in the Open Dialogue approach. This approach does not see severe psychological states as an isolated disorder of the individual, but as an event that unfolds within a system of relationships. Alongside the professional view of a psychologist or psychiatrist, the perspective of the person in crisis and the views of their loved ones, friends and community members are also relevant. New perspectives and solutions emerge from dialogic conversations.",
    "off.ethics": "I am a trainee with the Czech Society for Analytical Psychology, a programme certified by the Czech Association for Psychotherapy. I am a member of the Slovak Society for Analytical Psychology. I adhere to the ethical principles of the European Association for Psychotherapy. I specialise in issues of age and gender equality. And I am interested in the issues of ethnic equality, LGBTQ+ rights and the climate crisis.",

    "about.eyebrow": "About me",
    "about.p1": "Before opening my psychology practice, I worked as a researcher and psychologist in the healthcare sector, gaining insight into the various aspects of ageing and the experiences of sexuality, health-related disadvantages and loneliness among people in the second half of their lives (Neurology Department at FNUSA-ICRC, Institute for Research on Children, Youth and Family at the Faculty of Social Studies, Masaryk University, Centre for Ageing Research at the Faculty of Social Studies, Masaryk University).",
    "about.p2": "Following my civic involvement in the ‘For a Decent Slovakia’ movement, I changed direction in 2019. In a managerial role at Bratislava City Council, I spent five years focusing on the development and management of social support for the city’s vulnerable residents. We also made public institutions and spaces more accessible to people with disabilities, parents and their children. Later, as part of a smaller team, we worked to improve working conditions for professionals working in social services.",
    "about.p3": "Since 2017, together with friends, we have been building the community of the Zrejme civic association, which promotes intergenerational cooperation and dialogue. In my spare time, I enjoy discovering books and theatre performances. As a mum, every day I walk side by side with a sensitive young soul.",
    "about.edu": "Studies and training",
    "about.e1": "<strong>ČSAP</strong><span>Long-term training in analytical psychotherapy</span>",
    "about.e2": "<strong>Department of Psychology, Faculty of Social Studies, Masaryk University</strong><span>PhD in social psychology</span>",
    "about.e3": "<strong>Palacký University in Olomouc</strong><span>Psychologist in Healthcare</span>",
    "about.e4": "<strong>Živica</strong><span>Socrates Institute</span>",
    "about.e5": "<strong>Narativ</strong><span>Possibilities for Dialogue</span>",
    "about.e6": "<strong>Department of Psychology, Faculty of Social Studies, Masaryk University</strong><span>Master’s degree in single-subject psychology</span>",
    "about.courses": "Selection of recent short courses",
    "about.k1": "A Year of (Self-)Compassion (<a href=\"https://www.emdr-sipe.sk/\" target=\"_blank\" rel=\"noopener\">SlPE</a>)",
    "about.k2": "Mindfulness and Compassion (<a href=\"https://centrumlong.sk/\" target=\"_blank\" rel=\"noopener\">Long Centre</a>)",
    "about.k3": "Ongoing courses within the <a href=\"https://ssap.sk/\" target=\"_blank\" rel=\"noopener\">SSAP</a> and the <a href=\"https://junginstitut.ch/en/\" target=\"_blank\" rel=\"noopener\">C. G. Jung Institute Zürich</a>",
    "about.k4": "Raising Awareness of Transgender People (<a href=\"https://www.saplinq.org/\" target=\"_blank\" rel=\"noopener\">OZ Saplinq</a>)",
    "about.k5": "The Body as a Compass on Our Life’s Journey (<a href=\"https://www.processwork.cz/\" target=\"_blank\" rel=\"noopener\">IPOP CZ</a>)",
    "about.k6": "How to Talk to Someone in Crisis (<a href=\"https://gaudia.cz/\" target=\"_blank\" rel=\"noopener\">Gaudia</a>)",
    "about.k7": "Sexuality in Older People (<a href=\"https://www.freya.live/cs\" target=\"_blank\" rel=\"noopener\">Freya</a>)",
    "about.k8": "Fair Use of Power (<a href=\"https://www.processwork.sk/\" target=\"_blank\" rel=\"noopener\">POPI SK</a>)",

    "legal.note": "Note: I am not a healthcare provider within the meaning of Act No. 578/2004 Coll. The services offered are not a substitute for healthcare provided in a healthcare facility.",

    "proc.eyebrow": "The consultation process",
    "proc.title": "How does the first consultation take place?",
    "proc.first": "In the initial consultation, we usually discuss what has brought you here and get to know your story. At the end of the first session, we agree on how we will continue to work together.",
    "proc.journey.t": "What can you expect from our consultations?",
    "proc.journey.d": "I see our regular consultations as both accompanying you on your individual journey and as a shared journey. During this journey, we work as a team – you are the expert on your own life, and my role is to facilitate the therapeutic process. You bring your experience to our collaboration, and I contribute probing questions, reflections, associations and techniques. Together, we create a healing process that offers new possibilities and perspectives and reveals further avenues on your journey.",
    "proc.len.l": "Length",
    "proc.len.d": "Sessions usually last 45–50 minutes.",
    "proc.price.l": "Price",
    "proc.price.d": "The fee for an individual session, in person or online.",
    "proc.cancel.l": "Cancellation",
    "proc.cancel.d": "Your appointment is carefully scheduled and reserved exclusively for you. You may cancel your appointment no later than 48 hours in advance by telephone or email. If the appointment is cancelled less than 48 hours in advance, a cancellation fee of €25 will apply.",

    "contact.eyebrow": "Contact",
    "contact.title": "Booking",
    "contact.lead": "Bookings can be made by email or by text message / WhatsApp. You can also use the contact form. I will get back to you as soon as possible.",

    "form.name": "Full name",
    "form.email": "E-mail",
    "form.phone": "Phone (optional)",
    "form.type": "I'm interested in",
    "form.type1": "An in-person consultation",
    "form.type2": "An online consultation",
    "form.msg": "Message",
    "form.consent": "I agree to the processing of my personal data for the purpose of replying to my message.",
    "form.submit": "Send message",
    "form.sending": "Sending…",
    "form.ok": "Thank you for your message! I'll get back to you soon.",
    "form.err": "The message could not be sent. Please try again or e-mail me directly.",
    "form.invalid": "Please fill in all required fields and confirm your consent.",
    "contact.phone": "Text / WhatsApp",
    "contact.places": "Where to find me",
    "contact.map2": "Map – Lazaretská 24, Bratislava",

    "off.sit.t": "In what situations can our conversation support you?",
    "off.s1": "Life changes and crises",
    "off.s2": "Relationship problems",
    "off.s3": "Self-image and boundaries",
    "off.s4": "Stress, burnout and loss of joy",
    "off.s5": "Loss and grief",
    "off.s6": "Fears and anxieties",
    "off.s7": "Abandonment and loneliness",
    "off.s8": "Psychosomatic difficulties",
    "off.s9": "Coming out and transition",
    "off.s10": "Other",
    "off.how.t": "My approach",
    "contact.access": "The building has wheelchair access.",
    "footer.emTitle": "Need immediate help?",
    "footer.emText": "In an acute crisis, please contact the <a href=\"tel:0800800566\">Linka Nezábudka helpline 0800 800 566</a>.",
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
