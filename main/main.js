const closeBtn = document.getElementById("closeBtn");
const box = document.getElementById("myBox");

// X bosilganda yo‘qotish
closeBtn.addEventListener("click", () => {
  box.style.display = "none";
});

      function openPDF() {
        const correctCode = "4148";
        const userInput = document.getElementById("codeInput").value.trim();

        if (userInput === correctCode) {
          // Открытие PDF-файла в новой вкладке
          window.open(".././pdf/касаллик варакаси Самандар.docx");
        } else {
          alert("Неверный код. Пожалуйста, попробуйте снова.");
        }
      }
 
      const input = document.getElementById('codeInput');

input.addEventListener('input', function() {
  // faqat raqam bo‘lishi uchun
  this.value = this.value.replace(/\D/g, '');

  // maksimal uzunlik 4 ta
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
});


const translations = {
  uz: {
    title: "Bosh sahifa",
    desc: "Kirish",
    btn: "Ochish",
    infoTitle: "Ushbu hujjatdan foydalanish uchun siz avtorizatsiyadan o’tishingiz yoki, PIN kodini kiritishingiz lozim.",
    infoText: "PIN-kod hujjatning QR-kodi yonida joylashgan",
    footer: "Avtorizatsiyadan o’tish uchun bu yerga bosing"
  },
  ru: {
    title: "Главная",
    desc: "Войти",
    btn: "Открыть",
    infoTitle: "Пожалуйста пройдите авторизацию чтобы система определила вас. Если документ принадлежит вам, введения ПИН кода не требуется.",
    infoText: "PIN-код размещается рядом с QR-кодом документа",
    footer: "Нажмите здесь для авторизации"
  },
  en: {
    title: "Бош саҳифа",
    desc: "Кириш",
    btn: "Очиш",
    infoTitle: "Ушбу ҳужжатдан фойдаланиш учун сиз авторизатсиядан ўтишингиз ёки, ПИН кодини киритишингиз лозим.",
    infoText: "ПИН код хужжатнинг QR коди ёнига жойлаштирилган",
    footer: "Авторизатсиядан ўтиш  учун бу ерга босинг"
  }
};

const langSelect = document.getElementById("lang");
const elements = document.querySelectorAll("[data-key]");

function changeLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
  localStorage.setItem("lang", lang);
}

// Yuklanishda saqlangan tilni o‘qish
window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("lang") || "uz";
  langSelect.value = savedLang;
  changeLanguage(savedLang);
});

// Tanlanganda tilni o‘zgartirish
langSelect.addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});
