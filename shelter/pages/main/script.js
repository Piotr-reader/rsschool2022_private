"use strict"

const burger = document.querySelector(".header_burger");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");

burger.addEventListener("mousedown", () => {
    navbar.classList.toggle('active_burger');
    burger.classList.toggle('active_burger_burger');
    body.classList.toggle('lock');
});



const btn_js_previous = document.querySelector(".btn_js_previous");
const btn_js_small_previous = document.querySelector(".btn_js_small_previous");
const btn_js_next = document.querySelector(".btn_js_next");
const btn_js_small_next = document.querySelector(".btn_js_small_next");
const track = document.querySelector(".slider_container")
const cardWidth = document.querySelector(".slider_container").clientWidth;
const itemsCount =  document.querySelectorAll(".card").length;
let position = 0;
let slidsToShow = 3;
if (cardWidth < 900) {
    slidsToShow = 2;
}
if (cardWidth < 580) {
    slidsToShow = 1;
}
let movePosition = cardWidth;
if (cardWidth > 767) {
movePosition = (cardWidth+45)/slidsToShow;
} else {
movePosition = (cardWidth+40)/slidsToShow;
}

if (position === 0) {
    btn_js_previous.classList.add('btn_notActive');
    btn_js_small_previous.classList.add('btn_notActive');
} else {
    btn_js_previous.classList.remove('btn_notActive');
    btn_js_small_previous.classList.remove('btn_notActive');
}


btn_js_previous.addEventListener("mousedown", () => {
    const itemLeft = Math.abs(position)/cardWidth;
    position += itemLeft >= 1 ? movePosition : itemLeft*cardWidth;
    if (position === 0) {
        btn_js_previous.classList.add('btn_notActive');
        btn_js_previous.disabled = true;
        btn_js_small_previous.classList.add('btn_notActive');
        btn_js_small_previous.disabled = true;
    } else {
        btn_js_next.classList.remove('btn_notActive');
        btn_js_next.disabled = false;
        btn_js_small_next.classList.remove('btn_notActive');
        btn_js_small_next.disabled = false;

    }
    setPosition();
 });
btn_js_small_previous.addEventListener("mousedown", () => {
    // console.log(btn_js_small_previous);
});



btn_js_next.addEventListener("mousedown", () => {
   const itemLeft = itemsCount - (Math.abs(position) + slidsToShow*cardWidth)/cardWidth;

   position -= itemLeft >= 1 ? movePosition : itemLeft*cardWidth;
   if (position <= -((itemsCount-slidsToShow)*cardWidth)/slidsToShow) {
    btn_js_next.classList.add('btn_notActive');
    btn_js_next.disabled = true;
    btn_js_small_next.classList.add('btn_notActive');
    btn_js_small_next.disabled = true
    } else {
        btn_js_previous.classList.remove('btn_notActive');
        btn_js_previous.disabled = false;
        btn_js_small_previous.classList.remove('btn_notActive');
        btn_js_small_previous.disabled = false;
    }
setPosition();
});
btn_js_small_next.addEventListener("mousedown", () => {
    // console.log(btn_js_small_next);
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}
