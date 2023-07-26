// Функция для проверки длины строки

const checkStringLength = (string, length) => string.length <= length;

// Тесты для проверки длины строки
console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 10));

// Функция для проверки, является ли строка палиндромом

const checkStringPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

// Тесты для проверки, является ли строка палиндромом
console.log(checkStringPalindrome('Лёша на полке клопа нашёл '));

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN

const findNumber = (string) => {
  string = String(string).replace(/\D/g, '');
  return parseInt(string, 10);
};

// Тесты для проверки извлечения цифр
console.log(findNumber(555464161));
