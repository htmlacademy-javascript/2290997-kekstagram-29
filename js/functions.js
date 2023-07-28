// Функция для проверки длины строки

const checkStringLength = (string, length) => string.length <= length;

// Тесты для проверки длины строки
checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом

const checkStringPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

// Тесты для проверки, является ли строка палиндромом
checkStringPalindrome('Лёша на полке клопа нашёл ');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN

const findNumber = (string) => {
  string = String(string).replace(/\D/g, '');
  return parseInt(string, 10);
};

// Тесты для проверки извлечения цифр
findNumber(555464161);
