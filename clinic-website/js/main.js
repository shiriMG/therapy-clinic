const I18N = {
  he: {
    brand: "שירי מנשה גלילי | פסיכותרפיסטית",
    heroTitle: "פסיכותרפיה - טיפול רגשי",
    ctaContact: "יצירת קשר",
    ctaAbout: "אודות",
    aboutTitle: "אני מלווה אימהות",
    aboutP1: "אני מלווה אימהות המתמודדות עם עומס, סטרס ושחיקה, ומסייעת להן להפחית מתח, למצוא מחדש תחושת רוגע וליצור יותר איזון בחיי היומיום.",
    aboutP2: "הטיפול משלב פסיכותרפיה עם כלים משלימים (הילינג אנרגטי ופרחי באך), בהתאם לצרכים האישיים.",
    aboutP3: "המפגשים מתקיימים בקליניקה ביתית בתל אביב ובמפגשי אונליין.",
    svcTitle: "איך נראית העבודה",
    svc1Title: "השיחה הראשונה",
    svc1Text: "מבהירים את הבקשה, את המסגרת, וגם אם אפשר לעבוד יחד.",
    svc2Title: "המשך הטיפול",
    svc2Text: "מפגשים סדירים, לעיתים קרובות אחת לשבוע בהתחלה, ואחר כך לפי מה שהעבודה צריכה.",
    svc3Title: "סיום",
    svc3Text: "מסיימים יחד, כשזה נכון — לא בחיפזון.",
    contactTitle: "יצירת קשר",
    labelName: "שם",
    labelEmail: "דוא״ל",
    labelPhone: "טלפון",
    labelLocation: "מיקום",
    locationText: "קליניקה ביתית בתל אביב · מפגשים אונליין",
    labelMsg: "הודעה",
    send: "שליחה",
    formNote: "הטופס כרגע חזותי בלבד.",
    a11yTitle: "הצהרת נגישות",
    a11yP1: "האתר עומד בדרישות תקנות הנגישות הישראליות (WCAG 2.0 AA).",
    a11yP2: "לפניות בנושא נגישות: 052-650-9360 · shirush_m@hotmail.com"
  },
  en: {
    brand: "Shiri Menashe Galili | Psychotherapist",
    heroTitle: "Psychotherapy – Emotional therapy",
    ctaContact: "Contact",
    ctaAbout: "About",
    aboutTitle: "I support mothers",
    aboutP1: "I support mothers dealing with overload, stress and burnout, helping them reduce tension, rediscover calm and create more balance in daily life.",
    aboutP2: "The work combines psychotherapy with complementary tools (energy healing and Bach flowers), according to each person’s needs.",
    aboutP3: "Sessions take place in a home clinic in Tel Aviv and online.",
    svcTitle: "How the work looks",
    svc1Title: "The first conversation",
    svc1Text: "We clarify the request, the frame, and whether we can work together.",
    svc2Title: "Continuing",
    svc2Text: "Regular meetings, often weekly at first, then according to what the work needs.",
    svc3Title: "Ending",
    svc3Text: "We end together, when it is right — not in haste.",
    contactTitle: "Contact",
    labelName: "Name",
    labelEmail: "Email",
    labelPhone: "Phone",
    labelLocation: "Location",
    locationText: "Home clinic in Tel Aviv / Online sessions",
    labelMsg: "Message",
    send: "Send",
    formNote: "This form is currently visual only.",
    a11yTitle: "Accessibility statement",
    a11yP1: "This site meets Israeli accessibility regulations (WCAG 2.0 AA).",
    a11yP2: "For accessibility inquiries: 052-650-9360 · shirush_m@hotmail.com"
  }
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.he;
  document.documentElement.lang = lang === "en" ? "en" : "he";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const toggle = document.querySelector(".lang-toggle");
  if (toggle) toggle.textContent = lang === "en" ? "עב" : "EN";

  document.body.classList.toggle("lang-en", lang === "en");
  const about = document.querySelector("#about .split");
  if (about) about.classList.toggle("ltr-layout", lang === "en");

  localStorage.setItem("site-lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("site-lang") || "he";
  applyLang(saved);

  const toggle = document.querySelector(".lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = localStorage.getItem("site-lang") || "he";
      applyLang(current === "he" ? "en" : "he");
    });
  }
});
