var current_time_m = document.getElementById('current_time_m');
var current_time_s = document.getElementById('current_time_s');
var modal = document.getElementById('myModal');
var audio = new Audio('sound.mp3');
var flag = true;
var y = 1;
var x = 1;
var times;
var minutes;
var seconds;

function start(){
    if (flag == true) { // With it the user only can use one time the start button
        flag = false;
        var getTime1 = document.getElementById('workTime').value;
        var getTime2 = document.getElementById('restTime').value;
        var getTime3 = document.getElementById('longRest').value;
        var minutes = parseInt(getTime1);

        times = [parseInt(getTime1), parseInt(getTime2), parseInt(getTime3)];

        countDownArray(times, x, y);
    }
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
        audio.play();
        modal.style.display = "block";
        var boton = document.getElementById('miBoton').addEventListener('click', myFunction);
      }
    }, 1000);
}

function myFunction(){
  console.log('aquii!');
  countDownArray(times, x+1, y);
  audio.pause();
  modal.style.display = "none";
  document.getElementById('miBoton').removeEventListener('click', myFunction);
}
