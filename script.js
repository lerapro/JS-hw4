// -----1-----
let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let inputAttr = input.getAttribute("placeholder");
btn.textContent = `${inputAttr}`;

// -----2-----
let img = document.querySelector(".img");
img.setAttribute("src", "https://i.pinimg.com/564x/13/40/61/134061ff22589fa3e91ded7c51ef6794.jpg");

// -----3-----
let link = document.querySelector(".link");
let image = document.querySelector(".image");
link.setAttribute("href", "https://simple.wikipedia.org/wiki/Hollywood#:~:text=Hollywood%20is%20a%20district%20in,see%20all%20of%20these%20things.");
image.setAttribute("alt", "HollyWood");

// -----4-----
let list = document.querySelectorAll("li");
list[0].textContent = "Ukraine";