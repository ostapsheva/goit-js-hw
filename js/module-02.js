// ...... Задание #1

// const logItems = function (array) {
// 	for (let index = 0; index < array.length; index++) {
// 		const element = array[index];
// 		console.log(`${index + 1} - ${element}`);
// 	}
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ...... Задание #2

// const calculateEngravingPrice = function (message, pricePerWord) {
// 	return message.split(" ").length * pricePerWord;
// };

// console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 10)); // 80

// console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 20)); // 160

// console.log(calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)); // 240

// console.log(calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)); // 120

// ...... Задание #3

// const findLongestWord = function (string) {
// 	const allWords = string.split(" ");
// 	const wordsLength = [];
// 	for (const oneWord of allWords) {
// 		wordsLength.push(oneWord.length);
// 	}
// 	const longestWordIndex = wordsLength.indexOf(Math.max(...wordsLength));

// 	return allWords[longestWordIndex];
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// ...... Задание #4

// const formatString = function (string) {
// 	const quantityOfSymbol = string.split("").length;
// 	if (quantityOfSymbol <= 40) {
// 		return string;
// 	} else {
// 		string = string.slice(0, 40);
// 		return `${string}...`;
// 	}
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));
// // вернется форматированная строка

// ...... Задание #5

// const checkForSpam = function (message) {
// 	message = message.toLowerCase();
// 	return message.includes("spam") || message.includes("sale");
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// ...... Задание #6

// let input;
// const numbers = [];
// let total = 0;

// while (input !== null) {
// 	input = prompt("Введите число:");
// 	if (!isNaN(+input)) {
// 		numbers.push(+input);
// 	} else {
// 		alert("Было введено не число, попробуйте еще раз");
// 	}
// }
// for (const number of numbers) {
// 	total += number;
// }
// alert(`Общая сумма чисел равна ${total}.`);
