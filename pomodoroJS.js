var current_time_m = document.getElementById('current_time_m');
var current_time_s = document.getElementById('current_time_s');
console.log(current_time_s);
console.log(current_time_m);

var y = 1;
var x = 1;

var minutes;
var seconds;

function start(){
    var getTime1 = document.getElementById('workTime').value;
    var getTime2 = document.getElementById('restTime').value;
    var getTime3 = document.getElementById('longRest').value;
    var minutes = parseInt(getTime1);

    var times = [parseInt(getTime1), parseInt(getTime2), parseInt(getTime3)];

    countDownArray(times, x, y);
}

function countDownArray(times, x, y){
    if ((x % 2) === 0 && (y != 4)) {  //Rest time
      y++;
      minutes = times[1];
      seconds = 0;
    }else if ((x % 2) === 0 && (y == 4)){  //Long rest
      y = 1;
      minutes = times[2];
      seconds = 0;
    }else {   // Work time
      minutes = times[0];
      seconds = 0;
    }
    current_time_m.innerHTML = minutes;
    current_time_s.innerHTML = '00';

    var setIntervalID = setInterval(function(){
      if (seconds == 0) {
        seconds = 59;
      }else {
        seconds = seconds - 1;
      }

      if (seconds == 59 && minutes > 0) {
        minutes = minutes - 1;
      }

      current_time_m.innerHTML = minutes;
      current_time_s.innerHTML = seconds;

      if ((minutes == 0) && (seconds == 0)) {
        clearInterval(setIntervalID);
        console.log('Im here! '+ times + ' ' + x + ' ' + y);
        countDownArray(times, x+1, y);
      }
    }, 1000);
}
