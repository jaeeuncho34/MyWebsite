const clock = document.querySelector("#clock");
const showDate = document.querySelector("#date");

function getClock() {
  const date = new Date();
  const hr = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hr}:${min}:${sec}`;
  showDate.innerHTML = `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`;
}

getClock();
setInterval(getClock, 1000);
