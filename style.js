// --- Navegación suave ---
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

// --- Animaciones al hacer scroll ---
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

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .gallery-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });

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

// --- Emoción personalizada ---
function analizarEmocion() {
  const mensaje = document.getElementById("userInput").value;
  const respuesta = document.getElementById("respuestaIA");

  respuesta.innerHTML = "Pensando...";

  fetch('https://llunaekv.pythonanywhere.com/ia', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ mensaje: mensaje })
  })
  .then(res => {
    if (!res.ok) {
      respuesta.innerHTML = "Error de servidor: " + res.status;
      throw new Error("Error de servidor: " + res.status);
    }
    return res.json();
  })
  .then(data => {
    if (data.respuesta) {
      respuesta.innerHTML = data.respuesta;
    } else {
      respuesta.innerHTML = "No se recibió respuesta de la IA";
    }
  })
  .catch(error => {
    respuesta.innerHTML = "Hubo un error al conectar con el servidor 😢<br>" + error;
    console.error(error);
  });
}

// --- Chat IA (OpenAI) ---
function preguntarIA() {
  const mensaje = document.getElementById("userInput").value;
  const respuesta = document.getElementById("respuestaIA");

  respuesta.innerHTML = "Pensando...";

  fetch('https://llunaekv.pythonanywhere.com/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: mensaje })
  })
  .then(res => {
    if (!res.ok) {
      respuesta.innerHTML = "Error de servidor: " + res.status;
      throw new Error("Error de servidor: " + res.status);
    }
    return res.json();
  })
  .then(data => {
    if (data.reply) {
      respuesta.innerHTML = data.reply;
    } else {
      respuesta.innerHTML = "No se recibió respuesta de la IA";
    }
  })
  .catch(error => {
    respuesta.innerHTML = "Hubo un error al conectar con el servidor 😢<br>" + error;
    console.error(error);
  });
}
