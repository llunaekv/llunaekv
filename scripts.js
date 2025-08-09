function analizarEmocion() {
  const mensaje = document.getElementById("userInput").value;
  const respuesta = document.getElementById("respuestaIA");

  // Mostrar un mensaje de "cargando" mientras espera la respuesta
  respuesta.innerHTML = "Pensando...";

  fetch('https://llunaekv.pythonanywhere.com/ia', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ mensaje: mensaje })
  })
  .then(res => res.json())
  .then(data => {
    // Muestra la respuesta del servidor Flask
    respuesta.innerHTML = data.respuesta;
  })
  .catch(error => {
    respuesta.innerHTML = "Hubo un error al conectar con el servidor 😢";
    console.error(error);
  });
}
