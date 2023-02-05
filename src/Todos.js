const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
let todos = [];
const TODOS = "todos";

function saveTodo() {
  localStorage.setItem(TODOS, JSON.stringify(todos));
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  paintTodo(newTodoObj);
  todos.push(newTodoObj);
  saveTodo();
}

function deleteTodo(event) {
  const deleteLi = event.target.parentNode;
  deleteLi.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(deleteLi.id, 10));
  saveTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  li.appendChild(span);
  btn.innerText = "❌";
  li.appendChild(btn);
  li.id = newTodo.id;
  span.innerText = newTodo.text;
  todoList.appendChild(li);
  btn.addEventListener("click", deleteTodo);
}

const savedTodos = localStorage.getItem(TODOS);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);
