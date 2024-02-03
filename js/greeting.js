const loginForm = document.querySelector("#login-form");

const loginInput = document.querySelector(
  "#login-form input"
);
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerHTML = `안녕하세요, ${username} 님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

loginForm.addEventListener("submit", onLoginSubmit);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}
