// Получение случайного числа из диапазона

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Получение случайного элемента из массива

const getRandomArrayElement = (elements) => elements[getRandomInteger (0, elements.length - 1)];

export {getRandomInteger, getRandomArrayElement};
