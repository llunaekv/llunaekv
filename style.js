// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Funciones de contacto
function showEmail() {
    alert('¡Contáctanos en: kvllunae@gmail.com\n\n¡Escríbenos y te responderemos pronto! 😊');
}

function showInstagram() {
    alert('¡Síguenos en: @llunae.kv\n\n¡Síguenos para las últimas actualizaciones! 📱\n\nLink: https://www.instagram.com/llunae.kv?igsh=MXIzM3hxN29xczZrdQ==');
    // Abrir Instagram automáticamente
    window.open('https://www.instagram.com/llunae.kv?igsh=MXIzM3hxN29xczZrdQ==', '_blank');
}

function showTikTok() {
    alert('¡Ve nuestros entretenidos tiktoks: @llunae.kv\n\n¡Visualiza nuestros entretenidos e informativos videos! 👀\n\nLink: https://www.tiktok.com/@llunae.kv?_t=ZM-8yKGZTz2KKm&_r=1');
    window.open('https://www.tiktok.com/@llunae.kv?_t=ZM-8yKGZTz2KKm&_r=1', '_blank');
}

// Animaciones al hacer scroll - Versión mejorada
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Inicializar animaciones cuando la página carga
document.addEventListener('DOMContentLoaded', () => {
    // Preparar elementos para animación
    const animatedElements = document.querySelectorAll('.feature-card, .gallery-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });

    // Efecto hover mejorado para imágenes
    const images = document.querySelectorAll('.gallery-item img, .main-robot-image');
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
});