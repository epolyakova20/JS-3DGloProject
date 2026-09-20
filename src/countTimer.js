function countTimer(deadline) {
    function addZero(num) {
        return num < 10 ? '0' + num : num;
    }

    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;

        if (timeRemaining <= 0) {
            return {
                timeRemaining: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        const hours = Math.floor(timeRemaining / 60 / 60);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds };
    }

    function updateClock() {
        const timer = getTimeRemaining();

        const timerHours = document.getElementById('.timer-hours');
        const timerMinutes = document.getElementById('.timer-minutes');
        const timerSeconds = document.getElementById('.timer-seconds');

        if (timerHours && timerMinutes && timerSeconds) {
            timerHours.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSeconds.textContent = addZero(timer.seconds);
        }

        if (timer.timeRemaining <= 0) {
            clearInterval(idInterval);
        }
    }

    const idInterval = setInterval(updateClock, 1000);
    
    updateClock(); 
}

export default countTimer;
