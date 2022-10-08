let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');


let workTime = 25;
let breakTime = 5;

let seconds = "00";

window.onload = () => {
    document.getElementById('work-time').innerHTML = `${workTime}:${seconds}`;

    /*workTittle.classList.add('active');*/
}
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let stop = document.getElementById('stop');
let startTimer;
let breakTimer;



workTittle.addEventListener('click', function() {
    workTime = 25;
    seconds = "00";

    document.getElementById('work-time').innerHTML = `${workTime}:${seconds}`;
    breakTittle.classList.remove('active');
    workTittle.classList.add('active');

    stopInterval();
    startTimer = undefined;
    stop.style.display = "none";
    start.style.display = "block";
})

breakTittle.addEventListener('click', function() {
    workTime = 25;
    seconds = "00";

    document.getElementById('work-time').innerHTML = `${breakTime}:${seconds}`;
    breakTittle.classList.add('active');
    workTittle.classList.remove('active');
    stopInterval();
    startTimer = undefined;

    stopInterval();
    startTimer = undefined;
    stop.style.display = "none";
    start.style.display = "block";
})

start.addEventListener('click', function() {
    start.style.display = "none";
    stop.style.display = "block";

    if (startTimer === undefined && workTittle.classList.contains('active')) {
        startTimer = setInterval(timerFunction, 300);
    } else if (startTimer === undefined && breakTittle.classList.contains('active')) {
        startTimer = setInterval(timerBreakFunction, 300);
    } else {
        alert('Выберите режим BREAK или WORK')
        stop.style.display = "none";
        start.style.display = "block";
    }
})

stop.addEventListener('click', function() {
    stop.style.display = "none";
    start.style.display = "block";

    stopInterval();
    startTimer = undefined;
})

reset.addEventListener('click', function() {
    workTime = 25;
    seconds = "00";
    if (workTittle.classList.contains('active')) {
        document.getElementById('work-time').innerHTML = `${workTime}:${seconds}`;
    } else if (breakTittle.classList.contains('active')) {
        document.getElementById('work-time').innerHTML = `${breakTime}:${seconds}`;
    }
    stopInterval();
    startTimer = undefined;
    stop.style.display = "none";
    start.style.display = "block";
})

let workMinutes = workTime;
let breakMinutes = breakTime;
breakCount = 0;
workCount = 0;

let timerFunction = () => {

    document.getElementById('work-time').innerHTML = `${workMinutes}:${seconds}`;

    seconds--;
    if (seconds == -1) {
        workMinutes--;
        if (workMinutes == -1) {

            if (breakCount % 2 === 0) {
                workMinutes = breakMinutes;
                breakCount++;
                workTittle.classList.remove('active');
                breakTittle.classList.add('active');
            } else {
                workMinutes = workTime;
                breakCount++;
                breakTittle.classList.remove('active');
                workTittle.classList.add('active');
            }
        }
        seconds = 59;
    }
    seconds = seconds < 10 ? "0" + seconds : seconds;
}

let timerBreakFunction = () => {
    document.getElementById('work-time').innerHTML = `${breakMinutes}:${seconds}`;

    seconds--;
    if (seconds == -1) {
        breakMinutes--;
        if (breakMinutes == -1) {

            if (workCount % 2 === 0) {
                breakMinutes = workMinutes;
                workCount++;
                workTittle.classList.add('active');
                breakTittle.classList.remove('active');
            } else {
                breakMinutes = breakTime;
                workCount++;
                breakTittle.classList.add('active');
                workTittle.classList.remove('active');
            }
        }
        seconds = 59;
    }
    seconds = seconds < 10 ? "0" + seconds : seconds;
}

function stopInterval() {
    clearInterval(startTimer);
}