var timeBegan = null; // did the clock start?
var timeStopped = null; // at what time was the timer stopped?
var stoppedDuration = 0; // how long was the timer stopped?
var startInterval = null; // this is needed to stop the startInterva() method
var flag = false; // to control the start/stop of the timer

document.querySelector('#oneMin').addEventListener('click', ()=>{
    if(flag==0){
     calculateTime();
    console.log('1 min');
    flag = true;   
    }
    
    
})

document.querySelector(".container").addEventListener("click", () => {
  if(flag==0){
      startTimer();
      flag = true;
      
  }
  else{
      stopTimer();
      flag = false;
    
  }
})

document.querySelector(".container").addEventListener("dblclick", () => {
  resetTimer();
})

startTimer = () => {
  if(timeBegan === null)
    timeBegan = new Date();

  if(timeStopped !== null)
    stoppedDuration += (new Date() - timeStopped);

  startInterval = setInterval(clockRunning, 10);
}

stopTimer = () => {
  timeStopped = new Date();
  clearInterval(startInterval);
}

clockRunning = () => {
  let currentTime = new Date();
  let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

  let minutes = timeElapsed.getUTCMinutes();
  let seconds = timeElapsed.getUTCSeconds();
 

 

  document.querySelector("#timer_display").textContent = 
  (minutes = minutes < 10 ? '0' + minutes:minutes) + ":"+
  (seconds = seconds < 10 ? '0' + seconds:seconds);
}

resetTimer = () => {
  clearInterval(startInterval);
  timeBegan = null;
  timeStopped = null;
  stoppedDuration = 0;
  document.querySelector("#timer_display").innerHTML = "00:00";
  flag = false;
}


calculateTime = () => {
 let glob = 0;

   () => {
   
       

    
    setTimeout(calculateTime, 1000);
   }
 
}