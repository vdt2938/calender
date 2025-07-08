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
let calender = () =>{
  let date = new Date()
  let year = date.getFullYear()
  let month_class = document.getElementsByClassName('month_name');
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
    //for monthly
    // fix these to make everything easy to read and understand
    h1 = document.createElement('h1')
    text = document.createTextNode(month_name[i])
    h1.appendChild(text)
    month_class[i].appendChild(h1)
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();//function
    x = month_name[i]+' have '+daysInMonth(year, i+1)+' days '
    console.log(x);

    //that is for sun to sat
    for(a=0;a<week.length;a++){
      let weekday = document.getElementsByClassName("week")
      const weekdayDiv = document.createElement('div');
      weekdayDiv.textContent = week[a];  
      weekday[i].appendChild(weekdayDiv);
    }

    //that for day
    for(b=0;b < daysInMonth(2025, i+1);b++){
      let page = document.getElementsByClassName("page")
      const dayDiv = document.createElement('div');
      dayDiv.textContent = b + 1;
      page[i].appendChild(dayDiv);
    }
  }
}

calender()




// cd project/portfolio_project/calender