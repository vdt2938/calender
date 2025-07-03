
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
    } else if (hrs > 12) {
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

let d = () =>{
//get all of date from below to get into d function
}

let date = new Date()
let year = date.getFullYear()

let currentlymonth = date.getMonth()  
let month_name = [
  'January','February','March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October','November','December'
]

let month_class = document.getElementsByClassName('month');
const week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

for(i = 0;i<month_name.length;i++){
  /*
  position is month_class
  text is month 
  create h3 
 */
  try_element = ['h1','h2','h3','h4','h5','h6','p','span']
  h3 = document.createElement(try_element[6])
  text = document.createTextNode(month_name[i])
  h3.appendChild(text)
  const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

  console.log(month_name[i]+' have '+daysInMonth(year, i)+' days '); // 31
  po = month_name[i]+' have '+daysInMonth(year, i)+' days '
  month_class[i].appendChild(h3)
  
  
}

month_class[currentlymonth].style.background = 'green'
let page = document.getElementsByClassName("page")[0]
let weekday = document.getElementsByClassName("week")[0]
for(i=0;i<31;i++){
  jo = `<div class="day">${i+1}</div>`
  console.log(jo)
  page.innerHTML += jo
}

for(i=0;i<week.length;i++){
  jo = `<div class="weekday">${week[i]}</div>`
  console.log(jo)
  weekday.innerHTML += jo
}
//daysInMonth(2024, 2); // 29