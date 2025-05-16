let currentLang = localStorage.getItem("preferredLang") || "it";
let generatedKeys = [];

function setLanguage(lang) {
  fetch("lang/lang.json")
    .then(response => response.json())
    .then(data => {
      const texts = data[lang];
      if (!texts) {
        console.warn("⚠️ Lingua non trovata nel JSON:", lang);
        return;
      }

      generatedKeys = []; // reset ad ogni cambio lingua

      function applyTranslations(obj, prefix = "") {
        for (const key in obj) {
          const fullKey = prefix ? `${prefix}_${key}` : key;
          generatedKeys.push(fullKey); // salva la chiave

          const el = document.querySelector(`[data-i18n="${fullKey}"]`);
          if (typeof obj[key] === "object") {
            applyTranslations(obj[key], fullKey);
          } else {
            if (el) {
              el.textContent = obj[key];
            }
          }
        }
      }

      // Applica prima common, poi il resto
      if (texts.common) applyTranslations(texts.common, "common");
      for (const section in texts) {
        if (section !== "common") {
          applyTranslations(texts[section], section);
        }
      }

      // Salva lingua scelta
      localStorage.setItem("preferredLang", lang);
      currentLang = lang;
      document.documentElement.lang = lang;

      // (DEBUG opzionale)
      console.log("✅ Chiavi generate:", generatedKeys);
    })
    .catch(error => {
      console.error("❌ Errore nel caricamento del file JSON:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);

  document.querySelectorAll(".lang-switch").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.dataset.lang;
      setLanguage(selectedLang);
    });
  });
});


function updateCVLink(lang) {
  const cvLink = document.getElementById("cv-link");
  if (!cvLink) return;

  if (lang === "it") {
    cvLink.href = "personal/Colombini_cv_it.pdf";
  } else if (lang === "en") {
    cvLink.href = "personal/Colombini_cv_en.pdf";
  } else {
    cvLink.href = "personal/Colombini_cv_it.pdf"; // fallback
  }
}
