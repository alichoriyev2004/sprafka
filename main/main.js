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