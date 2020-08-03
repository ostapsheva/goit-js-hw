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
