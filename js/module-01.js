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

// ...... Задание #5

// let countryName = prompt("Укажите название страны, в которую нужно сделать доставку:");
// let cost;

// switch (countryName.toLowerCase()) {
// 	case "китай":
// 		cost = 100;
// 		countryName = "Китай";
// 		alert(`Доставка в ${countryName} будет стоить ${cost} кредитов.`);
// 		break;

// 	case "чили":
// 		cost = 250;
// 		countryName = "Чили";
// 		alert(`Доставка в ${countryName} будет стоить ${cost} кредитов.`);
// 		break;

// 	case "австралия":
// 		cost = 170;
// 		countryName = "Австралию";
// 		alert(`Доставка в ${countryName} будет стоить ${cost} кредитов.`);
// 		break;

// 	case "индия":
// 		cost = 80;
// 		countryName = "Индию";
// 		alert(`Доставка в ${countryName} будет стоить ${cost} кредитов.`);
// 		break;

// 	case "ямайка":
// 		cost = 120;
// 		countryName = "Ямайку";
// 		alert(`Доставка на ${countryName} будет стоить ${cost} кредитов.`);
// 		break;

// 	default:
// 		alert("В Вашей стране доставка не доступна");
// }

// ...... Задание #6

// let input;
// let total = 0;
// while (input !== null) {
// 	input = prompt("Введите число:");
// 	if (!isNaN(input)) {
// 		total = total + +input;
// 	} else {
// 		alert("Было введено не число, попробуйте еще раз");
// 	}
// }
// alert(`Общая сумма чисел равна ${total}.`);
