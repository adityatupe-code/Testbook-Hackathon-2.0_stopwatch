let seconds = 00;
let hours = 00;
let mins = 00;
let getSeconds = document.querySelector('.seconds');
let gethours = document.querySelector('.hours');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let btnReset = document.querySelector('.reset');
let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    inverval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click', () => {
    clearInterval(inverval);
})
btnReset.addEventListener('click', () => {
    clearInterval(inverval);
    hours = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    gethours.innerHTML = hours;
    getMins.innerHTML = mins;
})

function startTimer(){
    hours++;
    if(hours <= 9){
        gethours.innerHTML = '0' + hours;
    }
    if(hours > 9){
        gethours.innerHTML = hours;
    }
    if(hours > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        hours = 0;
        gethours.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9){
        getSeconds.innerHTML = mins;
    }
}