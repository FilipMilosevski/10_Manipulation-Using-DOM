console.log("test");



function addzero(number) {
  
if (number<10) {
  return "0" + number.toString();
} else {
  return number.toString()
}
}

window.setInterval(function () {
  let currentTime = new Date()
  let hours = currentTime.getHours()
  let minutes = currentTime.getMinutes()
  let seconds = currentTime.getSeconds()


  document.getElementById("hours").innerHTML=addzero(hours)
  document.getElementById("minutes").innerHTML=addzero(minutes)
  document.getElementById("seconds").innerHTML=addzero(seconds)


},1000)