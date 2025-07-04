// clock
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

// calender
let date = new Date()
let year = date.getFullYear()
let month_class = document.getElementsByClassName('month');
const week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let currentlymonth = date.getMonth()  
let month_name = [
  'January','February','March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October','November','December'
]

// it tell what is current month
month_class[currentlymonth].style.background = 'gray'
month_class[currentlymonth].style.color = 'white'


for(i = 0;i<month_name.length;i++){
  /*
  position is month_class
  text is month 
  create h3 
 */
  try_element = ['h1','h2','h3','h4','h5','h6','p','span']
  h3 = document.createElement(try_element[1])
  text = document.createTextNode(month_name[i])
  h3.appendChild(text)
  month_class[i].appendChild(h3)
  // month_class in html. Jan to Dec

  // it tell how many day for each month have

  const daysInMonth = (year, month) => new Date(year, month, 0).getDate();//function

  console.log(month_name[i]+' have '+daysInMonth(year, i+1)+' days '); // jan have 31 days
  x = month_name[i]+' have '+daysInMonth(year, i+1)+' days '
  // i need to firgure it out how to apply it 
  month_class[i].innerHTML += x
  //sample
  jan = month_name[0]+' have '+daysInMonth(year, 1)+' days '
  feb = month_name[1]+' have '+daysInMonth(year, 2)+' days '
  mar = month_name[2]+' have '+daysInMonth(year, 3)+' days '
  apr = month_name[3]+' have '+daysInMonth(year, 4)+' days '
  may = month_name[4]+' have '+daysInMonth(year, 5)+' days '
  jun = month_name[5]+' have '+daysInMonth(year, 6)+' days '
  jul = month_name[6]+' have '+daysInMonth(year, 7)+' days '
  aug = month_name[7]+' have '+daysInMonth(year, 8)+' days '
  sep = month_name[8]+' have '+daysInMonth(year, 9)+' days '
  oct = month_name[9]+' have '+daysInMonth(year, 10)+' days '
  nov = month_name[10]+' have '+daysInMonth(year, 11)+' days '
  dec = month_name[11]+' have '+daysInMonth(year, 12)+' days '
 
  
}
/* 
month_class[0].innerHTML += jan
month_class[1].innerHTML += feb
month_class[2].innerHTML += mar
month_class[3].innerHTML += apr
month_class[4].innerHTML += may
month_class[5].innerHTML += jun
month_class[6].innerHTML += jul
month_class[7].innerHTML += aug
month_class[8].innerHTML += sep
month_class[9].innerHTML += oct
month_class[10].innerHTML += nov
month_class[11].innerHTML += dec 
*/


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
