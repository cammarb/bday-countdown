let currentYear = new Date().getFullYear();

function updateCountdown() {
  const birthdayDate = new Date(`June 2 ${currentYear} 00:00:00`);
  const currentTime = new Date().getTime();

  const timeLeft = birthdayDate - currentTime;
  const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
  const hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;
  //   console.log(timeLeft);
  //   console.log(days);
  //   console.log(hours);
  //   console.log(minutes);
  //   console.log(seconds);
  if (timeLeft < 1000) {
    document.getElementById('days').innerHTML = '0';
    document.getElementById('hours').innerHTML = '0';
    document.getElementById('minutes').innerHTML = '0';
    document.getElementById('seconds').innerHTML = '0';
    currentYear = currentYear + 1;
  } else {
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    // console.log(timeLeft);
  }
}

setInterval(updateCountdown, 1000);
