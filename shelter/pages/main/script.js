"use strict"
const burger = document.querySelector(".header_burger");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
console.log(navbar);
console.log(burger);

burger.addEventListener("mousedown", () => {
    navbar.classList.toggle('active_burger');
    burger.classList.toggle('active_burger_burger');
    body.classList.toggle('lock');
});
