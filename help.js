/*breakTittle.addEventListener('click', function() {
    document.getElementById('work-time').innerHTML = `${breakTime}:${seconds}`;
    breakTittle.classList.add('active');
    workTittle.classList.remove('active');
    stopInterval();

    start.addEventListener('click', function() {

        start.style.display = "none";
        stop.style.display = "block";

        if (breakTimer === undefined) {
            breakTimer = setInterval(timerBreakFunction, 100);
        }

        seconds = 59;
    })

    stop.addEventListener('click', function() {
        stop.style.display = "none";
        start.style.display = "block";

        stopInterval();
        breakTimer = undefined;
    })

    reset.addEventListener('click', function() {
        workTime = 25;
        breakTime = 5;

        seconds = "00";
        document.getElementById('work-time').innerHTML = `${workTime}:${seconds}`;
        stopInterval();
        startTimer = undefined;


    })
})

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
    clearInterval(breakTimer);
}
*/
let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');


let workTime = 25;
let breakTime = 5;

let seconds = "00";

window.onload = () => {
    document.getElementById('work-time').innerHTML = `${workTime}:${seconds}`;

    workTittle.classList.add('active');
}
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let stop = document.getElementById('stop');
let startTimer;
let breakTimer;

breakTittle.addEventListener('click', function() {
    document.getElementById('work-time').innerHTML = `${breakTime}:${seconds}`;
    breakTittle.classList.add('active');
    workTittle.classList.remove('active');
    stopInterval();
    startTimer = undefined;
})

workTittle.addEventListener('click', function() {
    document.getElementById('work-time').innerHTML = `${workTime}:${seconds}`;
    breakTittle.classList.remove('active');
    workTittle.classList.add('active');
})

start.addEventListener('click', function() {

    start.style.display = "none";
    stop.style.display = "block";

    if (startTimer === undefined) {
        startTimer = setInterval(timerFunction, 100);
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
    breakTime = 5;

    seconds = "00";
    document.getElementById('work-time').innerHTML = `${workTime}:${seconds}`;
    stopInterval();
    startTimer = undefined;


})

let workMinutes = workTime - 1;
let breakMinutes = breakTime - 1;

breakCount = 0;

let timerFunction = () => {
    seconds = seconds < 10 ? "0" + seconds : seconds;

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
}

function stopInterval() {
    clearInterval(startTimer);
}