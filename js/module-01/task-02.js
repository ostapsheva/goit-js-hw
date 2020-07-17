"use strict";
// ...... Задание #2

const total = 100;
const ordered = 77;
let resultMessage;

if (ordered > total) {
	resultMessage = "На складе недостаточно товаров!";
} else {
	resultMessage = "Заказ оформлен, с вами свяжется менеджер";
}
console.log(resultMessage);
