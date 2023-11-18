
let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    function greeting(hrs){
      const message = document.getElementsByClassName('message')[0]
      greeting = [
        'good morning',
        'good afternoon',
        'good night',  
      ]
      /* 
      morning; dawn to noon, 
      noon;12, 
      night;dusk to morning, 
      */

 
      hrs >= 6 && hrs < 12 ? message.innerHTML =  greeting[0].toUpperCase():
      hrs >= 12 && hrs < 18 ? message.innerHTML = greeting[1].toUpperCase():
      hrs >= 18 ? message.innerHTML =  greeting[2].toUpperCase():
      message.innerHTML = 'Have good day';

 
    }
    greeting(hrs)


    if (hrs == 0) {
     hrs = 12;
    } else if (hrs >= 12) {
      hrs = hrs - 12;
      period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    let time = `${hrs}:${mins}:${secs}${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
  };
  
  clock();

