let panic = document.getElementById("panic_button")
var todays_acc=0;
var wage=15.42;
var mil_wage = wage/60/60/1000

var time = new Date();
var one = new  Date(time.setHours(13));
var one1 = new Date(one.setMinutes(0));
var nine1 = new Date(time.setHours(9))
var nine = new Date(nine1.setMinutes(0)) 
function convertMillisecondsToHMS(milliseconds) {
  let totalSeconds = Math.floor(milliseconds / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  // Calculate minutes
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60; // Remaining seconds after extracting minutes

  const formatNumber = (num) => String(num).padStart(2, '0');

  return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
}


function per_sec(){
    var time = new Date();
    let down=240
    if(time.getHours()*60*60*1000>46800000){down=180;one1.setHours(16);}

    var timer = ((one1-time)/1000/60)/down;

    let bar = document.getElementById("progress");
    let clock  = document.getElementById("time");
    let clock2  = document.getElementById("time2");
    let display = document.getElementById('counter_round');
    let display_acc = document.getElementById('counter_acc');

    clock2.innerHTML=time.toLocaleTimeString();
    todays_acc= mil_wage*(time.getTime()-nine);
    todays=Math.round(todays_acc*100)/100;
    // old todays_acc=todays_acc+wage/60/60;

    console.log(nine)

    display.innerHTML="$"+todays;
    display_acc.innerHTML="$"+todays_acc;
    bar.style.width=(1-timer)*100+"%";

    bar.innerHTML = Math.round(100-timer*100)+"%"
    clock.innerHTML=convertMillisecondsToHMS(one1-time);
}
setInterval(per_sec, 1000);