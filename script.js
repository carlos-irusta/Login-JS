// Función para validar el correo electrónico
function validarEmail(email) {
  let emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(email);
}

// Función para validar la contraseña
function validarPassword(password) {
  let passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/;
  return passwordPattern.test(password);
}

// Función para mostrar el mensaje de éxito
function mostrarMensajeExito() {
  document.getElementById("mensajeExito").style.display = "block";

  // Ocultar el mensaje después de 2 segundos (2000 milisegundos)
  setTimeout(function () {
    mensajeExito.style.opacity = 0; // Cambiar gradualmente la opacidad a 0
    setTimeout(function () {
      mensajeExito.style.display = "none"; // Ocultar el mensaje cuando la transición haya terminado
    }, 700); // Esperar 0.7 segundos antes de ocultar el mensaje
  }, 2000);
}

// Evento de escucha para enviar el formulario
document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let errorEmail = document.getElementById("emailError");
  let errorPassword = document.getElementById("passwordError");

  // Validar correo electrónico
  if (!validarEmail(email)) {
    errorEmail.textContent =
      "Por favor, introduzca un correo electrónico válido.";
    errorEmail.classList.add("active");
  } else {
    errorEmail.textContent = "";
    errorEmail.classList.remove("active");
  }

  // Validar contraseña
  if (!validarPassword(password)) {
    errorPassword.textContent =
      "Su contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un dígito y un carácter especial.";
    errorPassword.classList.add("active");
  } else {
    errorPassword.textContent = "";
    errorPassword.classList.remove("active");
  }

  // Si todos los campos son válidos, enviar el formulario
  if (validarEmail(email) && validarPassword(password)) {
    // enviarFormulario(email, password);
    mostrarMensajeExito();
    document.getElementById("formulario").reset();
  }
});
