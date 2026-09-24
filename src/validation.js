// Валидация и фильтрация полей форм.
// Правила задания:
// text / «Ваше сообщение» — кириллица, дефис и пробел;
// email — латиница, цифры и @ - _ . ! ~ * ';
// tel — цифры, круглые скобки и дефис.

const patterns = {
    text: /[^А-Яа-яЁё\-\s]/g,
    email: /[^A-Za-z0-9@\-_\.\!~\*']/g,
    tel: /[^0-9()\-]/g,
    calc: /[^0-9]/g,
};

const sanitize = (value, type) => value.replace(patterns[type], '');

const filterInput = (input, type) => {
    if (!input) return;

    const applyFilter = () => {
        const filtered = sanitize(input.value, type);
        if (input.value !== filtered) {
            const cursorPosition = input.selectionStart;
            input.value = filtered;

            // Не даём курсору «прыгать» в конец при удалении запрещённых символов.
            if (document.activeElement === input && typeof cursorPosition === 'number') {
                const removedBeforeCursor = sanitize(input.value.slice(0, cursorPosition), type).length;
                input.setSelectionRange(removedBeforeCursor, removedBeforeCursor);
            }
        }
    };

    input.addEventListener('input', applyFilter);
    input.addEventListener('paste', () => setTimeout(applyFilter, 0));
};

const validation = () => {
    // Все текстовые поля трёх форм: имя и сообщение.
    document
        .querySelectorAll('#form1 input[type="text"], #form2 input[type="text"], #form2 input[placeholder="Ваше сообщение"], #form3 input[type="text"]')
        .forEach((input) => filterInput(input, 'text'));

    // E-mail во всех трёх формах.
    document
        .querySelectorAll('#form1 input[type="email"], #form2 input[type="email"], #form3 input[type="email"]')
        .forEach((input) => filterInput(input, 'email'));

    // Телефон во всех трёх формах.
    document
        .querySelectorAll('#form1 input[type="tel"], #form2 input[type="tel"], #form3 input[type="tel"]')
        .forEach((input) => filterInput(input, 'tel'));

    // Поля калькулятора: только цифры.
    document
        .querySelectorAll('.calc-square, .calc-count, .calc-day')
        .forEach((input) => filterInput(input, 'calc'));

    // Проверка SELECT калькулятора: после выбора сохраняется и отображается
    // текст выбранного option. Ничего не меняем в value — native SELECT
    // сам отображает выбранный текст.
    const calcSelect = document.querySelector('.calc-type');
    if (calcSelect) {
        calcSelect.addEventListener('change', () => {
            const selectedOption = calcSelect.options[calcSelect.selectedIndex];
            calcSelect.setAttribute('aria-label', selectedOption.textContent.trim());
        });
    }
};

export default validation;
