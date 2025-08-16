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
