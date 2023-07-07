/* BURGER MENU */
// Отримуємо посилання на кнопку
let menu = document.getElementById("nav__toggle");

// Отримуємо всі елементи, які потрібно вибрати
let elements = document.querySelectorAll("#nav__toggle, #nav");

// Флаг для відстеження стану
let isActive = false;

// Додаємо обробник події "click" до кнопки
menu.addEventListener("click", function() {
  // Якщо флаг isActive є true, видаляємо клас "active" з елементів
  if (isActive) {
    elements.forEach(function(element) {
      element.classList.remove("active");
    });
    isActive = false;
  } else { // Якщо флаг isActive є false, додаємо клас "active" до елементів
    elements.forEach(function(element) {
      element.classList.add("active");
    });
    isActive = true;
  }
});