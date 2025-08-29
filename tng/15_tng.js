let intervalId;
const timeClock =document.getElementById("time");

function getTime(){
  const now = new Date();
  // return now.toLocaleTimeString();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = hours >= 12 ? '오후' : '오전';
  hours = hours % 12;
  hours = hours ? hours : 12;

  if(hours > 12){
    hours -= 12;
  }
  if(hours == 0){
    hours = 12;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }

  const realTime = `현재 시각 ${ampm} ${hours}:${minutes}:${seconds}`;
  timeClock.textContent = realTime;
}

function startClock() {
  if (!intervalId) {
    intervalId = setInterval(getTime, 1000);
    getTime(); 
  }
}

function stopClock() {
  clearInterval(intervalId);
  intervalId = null;
}

document.getElementById("startTime").addEventListener("click", startClock);
document.getElementById("stopTime").addEventListener("click", stopClock);

startClock();