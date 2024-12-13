let sec = document.querySelector(".sec")
let min = document.querySelector(".min")
let hour = document.querySelector(".hour")
let day = document.querySelector(".day")
let month = document.querySelector(".month")
let monthNum = document.querySelector(".month-num")
let hourInTime = document.getElementById("hour")
let minInTime = document.getElementById("min")
let local = document.getElementById("local")
let date2 = new Date()

function showTime(){

  min.style.transform = `rotate(${date2.getMinutes() * 6}deg)`
hour.style.transform = `rotate(${date2.getHours() * 30}deg)`

minInTime.innerText = date2.getMinutes()
hourInTime.innerText = date2.getHours()
local.innerText = date2.toLocaleTimeString().slice(-2)

setInterval(() => {
  let date = new Date()
  sec.style.transform = `rotate(${date.getSeconds() * 6}deg)`
  
  if(date.getSeconds() == 0){
    min.style.transform = `rotate(${date.getMinutes() * 6}deg)` 
    minInTime.innerText = date.getMinutes()

  }
  if(date.getMinutes() == 0){
    hour.style.transform = `rotate(${date.getHours() * 30}deg)`
    hourInTime.innerText = date.getHours()
    local.innerText = date.toLocaleTimeString().slice(-2)

  }
}, 1000);

checkTime()
checkDate()
}

showTime()

function checkTime(){
  if(hourInTime.innerText < 10 ){
    hourInTime.innerText = `0${hourInTime.innerText}`
  }
  if(minInTime.innerText < 10 ){
    minInTime.innerText = `0${minInTime.innerText}`
  }
}

function checkDate(){
  let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  day.innerText = dayNames[date2.getDay()]+","
  month.innerText = mS[date2.getMonth()]
  monthNum.innerText =  date2.getDate()

  console.log()
}

let dark = document.querySelector(".dark")

dark.addEventListener("click" , () =>{
  let clock = document.querySelector(".clock_container")
  clock.classList.toggle("add_dark")
  if(clock.classList.contains("add_dark")){
    dark.innerHTML = "Light Mode"
  }else{
    dark.innerHTML = "Dark Mode"
    
  }

})