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


/* FIXED HEADER */

window.addEventListener('scroll', function() {
  let header = document.querySelector('.header'); // Вибираємо заголовок (header) сайту
  let scrollPosition = window.scrollY; // Отримуємо позицію прокрутки
  let windowHeight = window.innerHeight; // Отримуємо висоту вікна браузера

  if (scrollPosition > windowHeight) {
    header.classList.add('fixed'); // Додаємо клас "fixed" до заголовку, щоб його зафіксувати
  } else {
    header.classList.remove('fixed'); // Видаляємо клас "fixed" з заголовку, щоб його розфіксувати
  }
});


document.addEventListener('DOMContentLoaded', function() {
  let header = document.querySelector('.header');
  let navToggle = document.querySelector('.nav__toggle');

  // Функція для перевірки стану класу `fixed` у елемента `.header`
  function checkHeaderFixed() {
    if (header.classList.contains('fixed')) {
      navToggle.style.marginRight = '20px'; 
        
    } else {
      navToggle.style.marginRight = ''; 
    }
  }

  // Викликати функцію перевірки при завантаженні сторінки
  checkHeaderFixed();

  // Викликати функцію перевірки при прокрутці сторінки
  window.addEventListener('scroll', checkHeaderFixed);
});


/* SCROLL NAVIGATION */

document.addEventListener('DOMContentLoaded', function() {
    let links = document.querySelectorAll('a[data-scroll]');

    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        let targetId = link.getAttribute('data-scroll');
        let targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
});








