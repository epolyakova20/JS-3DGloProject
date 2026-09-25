const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menuElement = document.querySelector('menu');

    if (!menuBtn || !menuElement) return;

    const handleMenu = () => {
        menuElement.classList.toggle('active-menu');
    };

    // 1. Обработчик кнопки-бургера
    menuBtn.addEventListener('click', handleMenu);

    // 2. Один обработчик для крестика и пунктов меню
    menuElement.addEventListener('click', (event) => {
        const target = event.target;

        if (
            target.closest('.close-btn') ||
            target.closest('li a')
        ) {
            event.preventDefault();
            handleMenu();
        }
    });
};

export default menu;
