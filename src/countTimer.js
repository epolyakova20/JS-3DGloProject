function countTimer(deadline) {
    // Функция для добавления нуля перед цифрой (4:6:50 -> 04:06:50)
    function addZero(num) {
        return num < 10 ? '0' + num : num;
    }

    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;

        // ИСПРАВЛЕНИЕ ОШИБКИ (Пункт 4 и 5): Если дата уже прошла, возвращаем нули
        if (timeRemaining <= 0) {
            return {
                timeRemaining: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        // Стандартный расчет времени
        const hours = Math.floor(timeRemaining / 60 / 60);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds };
    }

    function updateClock() {
        const timer = getTimeRemaining();

        // ПУНКТ 2: Вывод в консоль 1 раз в 1000ms для проверки себя
        console.log('updateClock работает!');

        // Находим элементы на вашей странице (в index.html)
        // Если у вас другие ID или классы, замените селекторы внутри querySelector
        const timerHours = document.querySelector('#timer-hours');
        const timerMinutes = document.querySelector('#timer-minutes');
        const timerSeconds = document.querySelector('#timer-seconds');

        // Проверяем, что элементы существуют на странице, чтобы не было ошибок в консоли
        if (timerHours && timerMinutes && timerSeconds) {
            timerHours.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSeconds.textContent = addZero(timer.seconds);
        }

        // Если дедлайн наступил, очищаем интервал сборщика
        if (timer.timeRemaining <= 0) {
            clearInterval(idInterval);
        }
    }

    // ПУНКТ 2: Запуск через setInterval без рекурсивного вызова функций
    const idInterval = setInterval(updateClock, 1000);
    
    // Запускаем сразу, чтобы при перезагрузке страницы не было задержки в 1 секунду
    updateClock(); 
}

// Экспортируем функцию, чтобы её можно было подключить в главном файле
export default countTimer;
