"use strict";

// ...... Задание #1

const name = "Генератор защитного поля";
let price = "1000";
let message = `Выбран "${name}", цена за штуку ${price} кредитов`;
console.log(message);
price = "2000";
message = `Выбран "${name}", цена за штуку ${price} кредитов`;
console.log(message);

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

// ...... Задание #3
