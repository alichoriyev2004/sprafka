const closeBtn = document.getElementById("closeBtn");
const box = document.getElementById("myBox");

// X bosilganda yo‘qotish
closeBtn.addEventListener("click", () => {
  box.style.display = "none";
});