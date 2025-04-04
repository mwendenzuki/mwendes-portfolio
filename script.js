const toggleButton = document.getElementById("theme-toggle");
const toggleIcon = document.getElementById("toggle-icon");
const body = document.body;

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  toggleIcon.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleIcon.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleIcon.textContent = "🌙";
  }
});

const cards = document.querySelectorAll(".card");

function showCardsOnScroll() {
  cards.forEach((card) => {
    if (card.getBoundingClientRect().top < window.innerHeight - 50) {
      card.classList.add("show");
    }
  });
}

document.addEventListener("scroll", showCardsOnScroll);
window.addEventListener("load", showCardsOnScroll);
