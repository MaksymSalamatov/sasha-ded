const newYears = '25 Nov 2022';
const daysElement = document.querySelector('.container__days');
const hoursElement = document.querySelector('.container__hours');
const minutesElement = document.querySelector('.container__min');
const secondsElement = document.querySelector('.container__sec');

function timeout() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const timeInMiliseconds = (newYearsDate - currentDate) / 1000;

    const timeInDays = Math.floor(timeInMiliseconds / 3600 / 24);

    const timeInHours = Math.floor(timeInMiliseconds / 3600) % 24;

    const timeInMinutes = Math.floor(timeInMiliseconds / 60) % 60;

    const timeInSeconds = Math.floor(timeInMiliseconds) % 60 ;

    daysElement.innerHTML = formatTime(timeInDays);
    hoursElement.innerHTML = formatTime(timeInHours);
    minutesElement.innerHTML = formatTime(timeInMinutes);
    secondsElement.innerHTML = formatTime(timeInSeconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


setInterval(timeout, 1000);

