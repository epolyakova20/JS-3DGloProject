const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menuElement = document.querySelector('menu');

    if (!menuBtn || !menuElement) return;

    const handleMenu = () => {
        menuElement.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handleMenu);

    menuElement.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.close-btn')) {
            handleMenu();
            return;
        }

        if (target.closest('li a')) {
            handleMenu();
        }
    });
};

export default menu;

