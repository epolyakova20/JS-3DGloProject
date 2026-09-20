function initMenuAndModal() {
    // === ЛОГИКА МЕНЮ ===
    const btnMenu = document.querySelector('.menu'); // Кнопка-гамбургер открытия меню
    const menu = document.querySelector('menu');      // Сам тег <menu> или блок меню
    const closeMenuBtn = document.querySelector('.close-btn'); // Крестик внутри меню

    if (btnMenu && menu) {
        // Открытие меню
        btnMenu.addEventListener('click', () => {
            menu.classList.add('active-menu'); // Добавляем класс видимости (из верстки)
        });

        // Закрытие меню при клике на крестик
        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', () => {
                menu.classList.remove('active-menu');
            });
        }

        // Закрытие меню при клике на любой его пункт
        menu.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-btn') || e.target.tagName === 'A') {
                menu.classList.remove('active-menu');
            }
        });
    }

    // === ЛОГИКА МОДАЛЬНОГО ОКНА ===
    const btnModal = document.querySelector('.popup-btn'); 
    const modal = document.querySelector('.popup');       
    const closeBtn = document.querySelector('.popup-close'); 

    if (!btnModal || !modal || !closeBtn) return;

    function fadeIn() {
        let opacity = 0;
        modal.style.opacity = 0;
        modal.style.display = 'block';

        function animation() {
            opacity += 0.05;
            if (opacity <= 1) {
                modal.style.opacity = opacity;
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }

    btnModal.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            modal.style.display = 'block';
            modal.style.opacity = 1;
        } else {
            fadeIn();
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

export default initMenuAndModal;

