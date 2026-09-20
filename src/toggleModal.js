function toggleModal() {
    const btnModal = document.querySelector('.popup-btn'); // Кнопка вызова окна
    const modal = document.querySelector('.popup');       // Само модальное окно
    const closeBtn = document.querySelector('.popup-close'); // Кнопка закрытия (крестик)

    // Если элементов нет на странице, прерываем функцию, чтобы не было ошибок
    if (!btnModal || !modal || !closeBtn) return;

    // Функция для плавного появления на чистом JS
    function fadeIn() {
        let opacity = 0;
        modal.style.opacity = 0;
        modal.style.display = 'block';

        function animation() {
            opacity += 0.05; // Скорость появления
            if (opacity <= 1) {
                modal.style.opacity = opacity;
                requestAnimationFrame(animation); // Встроенный метод JS для плавных анимаций
            }
        }
        requestAnimationFrame(animation);
    }

    // Обработчик клика на кнопку открытия
    btnModal.addEventListener('click', () => {
        // ПУНКТ 3: Проверяем ширину экрана пользователя
        const widthWindow = window.innerWidth;

        if (widthWindow < 768) {
            // На мобилках просто включаем без анимации
            modal.style.display = 'block';
            modal.style.opacity = 1;
        } else {
            // На десктопах запускаем нашу JS-анимацию
            fadeIn();
        }
    });

    // Обработчик клика на крестик (закрытие)
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Дополнительно: закрытие при клике на темную область вокруг окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

export default toggleModal;
