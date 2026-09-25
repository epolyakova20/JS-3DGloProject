const slider = () => {
    const slides = document.querySelectorAll('.portfolio-item');
    const prevBtn = document.querySelector('#arrow-left');
    const nextBtn = document.querySelector('#arrow-right');
    const dotsContainer = document.querySelector('.portfolio-dots');

    if (!slides.length || !dotsContainer) {
        return;
    }

    let currentSlide = 0;

    // Создаём точки автоматически
    slides.forEach((slide, index) => {
        const dot = document.createElement('li');

        dot.classList.add('dot');

        if (index === 0) {
            dot.classList.add('dot-active');
        }

        dotsContainer.append(dot);

        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    const showSlide = (index) => {
        slides.forEach((slide) => {
            slide.classList.remove('portfolio-item-active');
        });

        dots.forEach((dot) => {
            dot.classList.remove('dot-active');
        });

        slides[index].classList.add('portfolio-item-active');
        dots[index].classList.add('dot-active');
    };

    // Следующий слайд
    if (nextBtn) {
        nextBtn.addEventListener('click', (event) => {
            event.preventDefault();

            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            showSlide(currentSlide);
        });
    }

    // Предыдущий слайд
    if (prevBtn) {
        prevBtn.addEventListener('click', (event) => {
            event.preventDefault();

            currentSlide--;

            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }

            showSlide(currentSlide);
        });
    }

    showSlide(currentSlide);
};

export default slider;