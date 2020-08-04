// ...... Задание #1

// const categorie = document.querySelector("#categories");
// const items = document.querySelectorAll("li.item");

// console.log(`В списке ${items.length} категории`);

// items.forEach(item => {
// 	console.log(`Категория: ${item.querySelector("h2").textContent}`);
// 	console.log(`Количество элементов: ${item.querySelectorAll("li").length}`);
// });

// ...... Задание #2

// const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

// const ingredientsRef = document.querySelector("#ingredients");

// const items = ingredients.map(element => {
// 	const item = document.createElement("li");
// 	item.textContent = element;
// 	return item;
// });
// ingredientsRef.append(...items);

// ...... Задание #3

// const images = [
// 	{
// 		url:
// 			"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// 		alt: "White and Black Long Fur Cat",
// 	},
// 	{
// 		url:
// 			"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// 		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
// 	},
// 	{
// 		url:
// 			"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// 		alt: "Group of Horses Running",
// 	},
// ];

// const gallery = document.querySelector("#gallery");

// const items = images.map(element => {
// 	gallery.insertAdjacentHTML("beforeend", `<li class="gallery-img"><img src=${element.url} alt=${element.alt}></li>`);
// });

// ...... Задание #4

// const value = document.querySelector("#value");
// const decrementButton = document.querySelector('button[data-action="decrement"]');
// const incrementButton = document.querySelector('button[data-action="increment"]');
// let counterValue = 0;

// decrementButton.addEventListener("click", e => {
// 	counterValue -= 1;
// 	value.textContent = counterValue;
// });
// incrementButton.addEventListener("click", e => {
// 	counterValue += 1;
// 	value.textContent = counterValue;
// });

// ...... Задание #5

// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// input.addEventListener("input", e => {
// 	if (e.target.value === "") {
// 		output.textContent = "незнакомец";
// 	} else {
// 		output.textContent = e.target.value;
// 	}
// });

// ...... Задание #6

// const input = document.querySelector("#validation-input");
// const dataLength = Number(input.getAttribute("data-length"));

// input.addEventListener("change", e => {
// 	if (e.target.value.length === dataLength) {
// 		input.classList.add("valid");
// 		input.classList.remove("invalid");
// 	} else {
// 		input.classList.add("invalid");
// 		input.classList.remove("valid");
// 	}
// });

// ...... Задание #7

// const input = document.querySelector("#font-size-control");
// const span = document.querySelector("#text");

// input.addEventListener("input", e => (span.style.fontSize = `${e.target.value}px`));
