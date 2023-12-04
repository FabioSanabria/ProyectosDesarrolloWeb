const loginButton = document.getElementById('loginButton');
const usernameInput = document.getElementById('username');

loginButton?.addEventListener('click', (event) => {
  event.preventDefault();
  login();
});

// Agrega evento para la tecla "Enter" en el campo de entrada
usernameInput?.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    login();
  }
});

function login() {
  const username = usernameInput.value;
  if (username) {
    // Aquí usamos el localstorage para guardar los usuarios
    // Al hacer login deja entrar a cualquera pero cada usuario tiene sus canciones
    localStorage.setItem("user", username);
    window.location.href = '/create';
  }
}
