import animate from './helpers.js';

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';

            animate({
                duration: 500,
                timing: (timeFraction) => timeFraction,
                draw: (progress) => {
                    modal.style.opacity = progress;
                }
            });
        });
    });

    closeBtn.addEventListener('click', () => {
        animate({
            duration: 500,
            timing: (timeFraction) => 1 - timeFraction,
            draw: (progress) => {
                modal.style.opacity = progress;

                if (progress === 0) {
                    modal.style.display = 'none';
                }
            }
        });
    });
};

export default modal;