/*Efecto foto*/

const photo = document.querySelector(".cyber-photo-container");

if (photo) {
  // Aparece inmediatamente
  photo.classList.add("visible");

  // Mantener el efecto al hacer scroll por si agregas más secciones
  document.addEventListener("scroll", function () {
    const position = photo.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      photo.classList.add("visible");
    }
  });
}

/* Efecto Máquina de Escribir */
const typeWriterElement = document.getElementById('typewriter');
const textArray = ["Neyro Lugo", "Desarrollador Web", "Ingeniero"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  if (!typeWriterElement) return;

  const currentText = textArray[textIndex];

  if (isDeleting) {
    typeWriterElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typeWriterElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  typeWriterElement.classList.add('typing-cursor');

  let typeSpeed = isDeleting ? 100 : 150;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000; // Pausa al terminar de escribir
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    typeSpeed = 500; // Pausa antes de empezar a escribir el siguiente
  }

  setTimeout(typeWriter, typeSpeed);
}

// Iniciar efecto al cargar
document.addEventListener('DOMContentLoaded', typeWriter);

/*Modo Oscuro*/
const toggleDarkBtn = document.getElementById('toggle-dark');

if (toggleDarkBtn) {
  toggleDarkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Cambia el ícono del botón
    if (document.body.classList.contains('dark-mode')) {
      toggleDarkBtn.textContent = '☀️';
    } else {
      toggleDarkBtn.textContent = '🌙';
    }
  });
}
