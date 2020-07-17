"use strict";
// ...... Задание #4
const credits = 23580;
const pricePerDroid = 300;
const quantityOfDroids = prompt("Укажите сколько дроидов Вы желаете купить:");
let totalPrice;
let restCredits;
let message;

if (quantityOfDroids === null) {
	console.log("Отменено пользователем!");
} else {
	totalPrice = quantityOfDroids * pricePerDroid;
	console.log(totalPrice);
}
if (totalPrice > credits) {
	console.log("Недостаточно средств на счету!");
} else {
	restCredits = credits - totalPrice;
	message = `Вы купили ${quantityOfDroids} дроидов, на счету осталось ${restCredits} кредитов.'`;
	console.log(message);
}
