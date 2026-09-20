const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        // ПУНКТ 4: Если дата прошла, жестко возвращаем нули, чтобы не уходить в минусы
        if (timeRemaining <= 0) {
            return { timeRemaining: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds };
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();

        // ПУНКТ 2: Вывод в консоль ровно 1 раз в 1000ms для самопроверки
        console.log('updateClock сработал ровно 1 раз в секунду!');

        // Вспомогательная функция для добавления ведущих нулей (ПУНКТ 5)
        const formatNum = (num) => num < 10 ? '0' + num : num;

        // Выводим отформатированные значения на страницу
        if (timerHours && timerMinutes && timerSeconds) {
            timerHours.textContent = formatNum(getTime.hours);
            timerMinutes.textContent = formatNum(getTime.minutes);
            timerSeconds.textContent = formatNum(getTime.seconds);
        }

        // Если таймер дошел до нуля, останавливаем интервал
        if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval);
        }
    };

    // ПУНКТ 2: Чистый setInterval, БЕЗ рекурсивного вызова setTimeout внутри updateClock
    const idInterval = setInterval(updateClock, 1000);

    // Вызываем один раз сразу при старте страницы, чтобы не ждать первую секунду
    updateClock();
};

export default timer;
