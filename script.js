const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();
const newYearTime = new Date('January 01 2024  00:00:00');


// Update Countdown Timer

function updateCountdown(){
    const currentTime = new Date();

    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

document.getElementById('days').innerHTML = d;
document.getElementById('hours').innerHTML = h < 10 ? 0 + h : h;
document.getElementById('minutes').innerHTML = m < 10 ? 0 + m : m;
document.getElementById('seconds').innerHTML = s < 10 ? 0 + s : s;
}


setInterval(updateCountdown, 1000);