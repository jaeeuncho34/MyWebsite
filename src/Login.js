const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const NAME = "name";
const HIDDEN_CLASS = "hidden";

function onLoginSumit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const name = loginInput.value;
  localStorage.setItem(NAME, name);
  paintHello(name);
}
function paintHello(name) {
  greeting.innerText = `Hello ${name}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

const savedName = localStorage.getItem(NAME);

if (savedName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSumit);
} else {
  loginForm.classList.add(HIDDEN_CLASS);
  paintHello(savedName);
}
