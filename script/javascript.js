const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const productContent = document.querySelector('.product-content2');
const products = document.querySelectorAll('.product-1');

let currentIndex = 0;
let startX; // Posición inicial del toque
let isDragging = false; // Controla si el usuario está arrastrando el carrusel

// Función que determina cuántos productos se muestran según el tamaño de la pantalla
function getVisibleProducts() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
        return 1; // Muestra 1 producto en pantallas pequeñas
    } else if (screenWidth <= 1200) {
        return 2; // Muestra 2 productos en pantallas medianas
    } else {
        return 3; // Muestra 3 productos en pantallas grandes
    }
}

// Actualiza la posición del carrusel
function updateCarousel() {
    const slideWidth = products[0].clientWidth; // Ancho de un producto
    productContent.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Navegar al siguiente producto
nextButton.addEventListener('click', () => {
    const visibleProducts = getVisibleProducts();
    if (currentIndex < products.length - visibleProducts) {
        currentIndex++;
    } else {
        currentIndex = 0; // Vuelve al primer producto
    }
    updateCarousel();
});

// Navegar al producto anterior
prevButton.addEventListener('click', () => {
    const visibleProducts = getVisibleProducts();
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = products.length - visibleProducts; // Vuelve al último conjunto de productos
    }
    updateCarousel();
});

// Asegúrate de que el carrusel se actualice correctamente cuando la ventana cambie de tamaño
window.addEventListener('resize', updateCarousel);

// --- Manejo del swipe en dispositivos móviles ---

// Detectar el inicio del toque
productContent.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Posición inicial en el eje X
    isDragging = true;
});

// Detectar el movimiento del toque
productContent.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;

    if (deltaX > 50) { // Si el usuario desliza hacia la derecha (más de 50px)
        prevButton.click(); // Simular un clic en el botón "prev"
        isDragging = false; // Detener la acción de arrastre
    } else if (deltaX < -50) { // Si el usuario desliza hacia la izquierda (más de 50px)
        nextButton.click(); // Simular un clic en el botón "next"
        isDragging = false; // Detener la acción de arrastre
    }
});

// Detectar cuando el usuario levanta el dedo
productContent.addEventListener('touchend', () => {
    isDragging = false; // El deslizamiento termina
});



