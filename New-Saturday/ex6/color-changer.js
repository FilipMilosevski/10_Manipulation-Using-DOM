let background = document.body;
let color = document.getElementById("color");
colorChanger = document.getElementById("colorChanger");
function changeMe() {
  if ((colorChanger.value = " ")) {
    colorChanger.value = color.value;
    background.style.backgroundColor = color.value;
  } else {
    alert("enter a hex number of color");
  }
}