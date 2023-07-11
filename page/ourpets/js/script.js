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


/* SLIDER SCROLL */

const sliderContainer = document.getElementById('slider-container');
const sliderCards = document.getElementsByClassName('pets__card');
const prevButton = document.getElementById('leftButton');
const nextButton = document.getElementById('rightButton');

let currentIndex = 0;
const itemsPerPage = [3, 6, 8]; // Кількість слайдів на кожній розмірності екрану

function showSlide() {
  for (let i = 0; i < sliderCards.length; i++) {
    sliderCards[i].style.display = 'none';
  }

  const currentPage = Math.floor(currentIndex / itemsPerPage[currentBreakpoint()]);
  for (let i = currentPage * itemsPerPage[currentBreakpoint()]; i < (currentPage + 1) * itemsPerPage[currentBreakpoint()]; i++) {
    if (sliderCards[i]) {
      sliderCards[i].style.display = 'block';
    }
  }
}

function currentBreakpoint() {
  if (window.innerWidth >= 1280) {
    return 2; // Великий розмір екрану
  } else if (window.innerWidth >= 768) {
    return 1; // Середній розмір екрану
  } else {
    return 0; // Малий розмір екрану
  }
}

function slidePrev() {
  currentIndex -= itemsPerPage[currentBreakpoint()];
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  showSlide();
}

function slideNext() {
  currentIndex += itemsPerPage[currentBreakpoint()];
  if (currentIndex > sliderCards.length - 1) {
    currentIndex = sliderCards.length - 1;
  }
  showSlide();
}

leftButton.addEventListener('click', slidePrev);
rightButton.addEventListener('click', slideNext);

window.addEventListener('resize', showSlide);

// Показати перший слайд при завантаженні сторінки
showSlide();


/* MODAL WINDOW */

// Отримуємо посилання на всі кнопки та модальні вікна
const openButtons = document.querySelectorAll('.pets__card-btn');
const modals = document.querySelectorAll('.modal');

// Додаємо обробник подій до кожної кнопки
openButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    event.preventDefault();
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);
    
    // Додаємо клас "open" до відповідного модального вікна
    modal.classList.add('open');
    
    // Додаємо стиль для фіксованого позиціонування та прокрутки модального вікна
    document.body.style.overflow = 'hidden';
  });
});

// Додаємо обробник подій до документу
document.addEventListener('click', function(event) {
  // Перевіряємо, чи було клікнуто поза межі модального вікна
  const isClickedOutsideModal = Array.from(modals).some(function(modal) {
    return modal.contains(event.target);
  });
  
  if (isClickedOutsideModal) {
    // Закриваємо модальне вікно
    modals.forEach(function(modal) {
      modal.classList.remove('open');
    });
    
    // Відновлюємо стиль прокрутки документа
    document.body.style.overflow = 'auto';
  }
});

















