// ...... Задание #1

// const name = "Генератор защитного поля";
// let price = 1000;
// let message = `Выбран "${name}", цена за штуку ${price} кредитов`;
// console.log(message);
// price = 2000;
// message = `Выбран "${name}", цена за штуку ${price} кредитов`;
// console.log(message);

// ...... Задание #2

// const total = 100;
// const ordered = 77;
// let message;

// if (ordered > total) {
// 	message = "На складе недостаточно товаров";
// } else {
// 	message = "Заказ оформлен, с Вами свяжется менеджер!";
// }
// alert(message);

// ...... Задание #3

// const ADMIN_PASSWORD = "jqueryismyjam";
// const password = prompt("Введите пароль");
// let message;

// if (password === null) {
// 	message = "Отменено пользователем!";
// } else if (password === ADMIN_PASSWORD) {
// 	message = "Добро пожаловать!";
// } else {
// 	message = "Доступ запрещен, неверный пароль!";
// }
// alert(message);

// ...... Задание #4

// let credits = 23580;
// const pricePerDroid = 300;
// const quantityOfDroids = prompt("Укажите сколько дроидов Вы желаете купить:");
// let totalPrice = pricePerDroid * quantityOfDroids;
// let message;

// if (quantityOfDroids === null || quantityOfDroids === "") {
// 	message = "Отменено пользователем!";
// } else if (isNaN(quantityOfDroids)) {
// 	message = "Введите число.";
// } else if (totalPrice > credits) {
// 	message = "Недостаточно средств.";
// } else {
// 	credits = credits - totalPrice;
// 	message = `Вы купили ${quantityOfDroids} дроидов, на счету осталось ${credits} кредитов.`;
// }

// alert(message);
