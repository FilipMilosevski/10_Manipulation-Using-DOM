time1 = document.getElementById("time");

function zero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
window.setInterval(function () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  time1.innerHTML = `<p>${zero(hours)}:${zero(minutes)}:${zero(seconds)}</p>`;
}, 1000);
function alarm() {
  setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    time1.innerHTML = `<p>${zero(hours)}:${zero(minutes)}:${zero(seconds)}</p>`;
  }, 1000);
  
}
timeString = "21:16";
let now = new Date();
hours = now.getHours();
minutes = now.getMinutes();
let currentTime = `${zero(hours)}:${zero(minutes)}`;
let cts = currentTime.toString();
console.log(cts);
if (timeString <= cts) {
  alert("Wakep UP!!!");
} else {
  alert("Time is to sleep");
}