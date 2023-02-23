function add_zero(number){
  if(number<10){
      return "0" +number.toString();
  }else{
      return number.toString();
  }
}
window.setInterval(function(){
let currentTime=new Date();
let hours=currentTime.getHours();
let minutes=currentTime.getMinutes();
let seconds=currentTime.getSeconds();
document.getElementById("hour").innerHTML= add_zero(hours);
document.getElementById("minutes").innerHTML=add_zero(minutes);
document.getElementById("seconds").innerHTML=add_zero(seconds);
},1000)