const loginButton = document.getElementById('loginButton');
const usernameInput = document.getElementById('username');

loginButton?.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("Clicked on login button");
  login();
});

// Agregar evento para la tecla "Enter" en el campo de entrada
usernameInput?.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    login();
  }
});

function login() {
  console.log("Logging in");
  const username = usernameInput.value;
  if (username) {
    console.log("Username is: " + username);
    // validate credentials
    const userExists = validateCredentials(username);
    console.log("User exists:", userExists);
    // if success, then save the current user on LS
    localStorage.setItem("userinfo_id", username);
    console.log("Saved current user");
    window.location.href = '/create';
  } else {
    console.log("Username is empty");
    // Handle the case when the username is empty
  }
}

function validateCredentials(username) {
  const value = localStorage.getItem(username);
  return !!value; // Convert to boolean
}
