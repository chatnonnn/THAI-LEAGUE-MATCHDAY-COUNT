/* Match Time Count */
function matchCountdown () {
  const timeCount = document.querySelectorAll('.time-count');
  const now = new Date().getTime();
  
  timeCount.forEach(timeCount => {
    const matchTime = timeCount.getAttribute('data-target');
    const matchDay = new Date(matchTime).getTime();

    const distance = matchDay - now;

    const matchDuration = 5400000;
    const matchEndTime = matchDay + matchDuration;

    if(now < matchDay) {
      const days = Math.floor(distance / 1000 / 60 / 60 /24);
      const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(distance / 1000 / 60) % 60;
      const seconds = Math.floor(distance / 1000) % 60;

      timeCount.innerHTML = `<b>${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Secs</b>`
    } else if(now >= matchDay && now < matchEndTime){
      timeCount.innerHTML = '<b>Match Live</b>';
    } else{
      timeCount.innerHTML = '<b>Match Played</>';
    }
  })
}

setInterval(matchCountdown, 1000);

/* Button */
const buttons = document.querySelectorAll('.match-preview, .match-detail');

buttons.forEach(buttons =>{
  buttons.addEventListener('click', (event) =>{
    const targetUrl = event.target.getAttribute('data-url');

    window.open(targetUrl, '_blank');
  })
})