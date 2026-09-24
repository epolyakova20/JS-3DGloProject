// Калькулятор стоимости.
// Формула: базовая ставка 1000 руб./м² × коэффициент типа объекта × площадь ×
// количество помещений × коэффициент срока (дни / 10).
// Если количество помещений или срок не указаны, используются значения по умолчанию:
// 1 помещение и 10 дней.

const calculator = () => {
    const type = document.querySelector('.calc-type');
    const square = document.querySelector('.calc-square');
    const count = document.querySelector('.calc-count');
    const day = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    if (!type || !square || !count || !day || !total) return;

    const BASE_PRICE = 1000;
    const DEFAULT_COUNT = 1;
    const DEFAULT_DAYS = 10;

    const getNumber = (input, fallback = 0) => {
        const value = parseInt(input.value, 10);
        return Number.isFinite(value) && value > 0 ? value : fallback;
    };

    const calculate = () => {
        const coefficient = parseFloat(type.value);
        const area = getNumber(square);
        const rooms = getNumber(count, DEFAULT_COUNT);
        const days = getNumber(day, DEFAULT_DAYS);

        // Без выбранного типа объекта или площади стоимость не рассчитываем.
        if (!Number.isFinite(coefficient) || area <= 0) {
            total.textContent = '0';
            return;
        }

        const result = BASE_PRICE * coefficient * area * rooms * (days / DEFAULT_DAYS);
        total.textContent = Math.round(result).toLocaleString('ru-RU');
    };

    type.addEventListener('change', calculate);
    square.addEventListener('input', calculate);
    count.addEventListener('input', calculate);
    day.addEventListener('input', calculate);

    calculate();
};

export default calculator;
