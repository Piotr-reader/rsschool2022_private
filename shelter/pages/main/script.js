"use strict"

const burger = document.querySelector(".header_burger");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");

burger.addEventListener("mousedown", () => {
    navbar.classList.toggle('active_burger');
    burger.classList.toggle('active_burger_burger');
    body.classList.toggle('lock');
});


// slider
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
} else if (cardWidth > 319) {
movePosition = (cardWidth+40)/slidsToShow;
} else {
    movePosition = (cardWidth+20)/slidsToShow;
}

if (position === 0) {
    btn_js_previous.classList.add('btn_notActive');
    btn_js_small_previous.classList.add('btn_notActive');
} else {
    btn_js_previous.classList.remove('btn_notActive');
    btn_js_small_previous.classList.remove('btn_notActive');
}


btn_js_previous.addEventListener("mousedown", () => {
    if (position != 0) {
        const itemLeft = itemsCount + (Math.abs(position) + slidsToShow*cardWidth)/cardWidth;
        position += itemLeft >= 1 ? movePosition : itemLeft*cardWidth;
    }
    if (position === 0) {
        btn_js_previous.classList.add('btn_notActive');
        btn_js_previous.disabled = true;
    } else {
        btn_js_next.classList.remove('btn_notActive');
        btn_js_next.disabled = false;
    }
    setPosition();
 });

btn_js_small_previous.addEventListener("mousedown", () => {
    if (position != 0) {
        const itemLeft = itemsCount + (Math.abs(position) + slidsToShow*cardWidth)/cardWidth;
        position += itemLeft >= 1 ? movePosition : itemLeft*cardWidth;
    }
    if (position === 0) {
        btn_js_small_previous.classList.add('btn_notActive');
        btn_js_small_previous.disabled = true;
    } else {
        btn_js_small_next.classList.remove('btn_notActive');
        btn_js_small_next.disabled = false;

    }
    setPosition();
});



btn_js_next.addEventListener("mousedown", () => {

   const itemLeft = itemsCount - (Math.abs(position) + slidsToShow*cardWidth)/cardWidth;
   position -= itemLeft >= 0 ? movePosition : itemLeft*cardWidth;
   if (position <= -((itemsCount-slidsToShow)*cardWidth)/slidsToShow) {
    btn_js_next.classList.add('btn_notActive');
    btn_js_next.disabled = true;

    } else {
        btn_js_previous.classList.remove('btn_notActive');
        btn_js_previous.disabled = false;

    }
setPosition();
});
btn_js_small_next.addEventListener("mousedown", () => {

   const itemLeft = itemsCount - (Math.abs(position) + slidsToShow*cardWidth)/cardWidth;
   console.log(itemLeft);
   position -= itemLeft >= 0 ? movePosition : itemLeft*cardWidth;
   if (position <= -((itemsCount-slidsToShow)*cardWidth)/slidsToShow) {
    btn_js_small_next.classList.add('btn_notActive');
    btn_js_small_next.disabled = true;

    } else {
    btn_js_small_previous.classList.remove('btn_notActive');
    btn_js_small_previous.disabled = false;
    }
setPosition();
});


const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

// class Object


let img_src = document.querySelector('.popup_img').src;
let popup_name = document.querySelector('.popup_name').innerHTML;
let popup_type = document.querySelector('.popup_type').innerHTML;
let popup_description = document.querySelector('.popup_description').innerHTML;

class Animal {
    constructor(options) {
        this.img = options.img;
        this.name = options.name;
        this.type = options.type;
        this.description = options.description;
        this.age = '2 months';
        this.inoculations = 'none';
        this.diseases = 'none';
        this.parasites = 'none';
    }

    show() {
        img_src = `'http://127.0.0.1:5500/shelter/${this.img}'`;
        popup_name = `${this.name}`;
        popup_type = `${this.type}`;
        popup_description = `${this.description}`;
    }

}

const jennifer = new Animal ({
    img: 'assets/images/pets-jennifer.png',
    name: 'Jennifer',
    type: 'Dog - Labrador',
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
})
const sophia = new Animal ({
    img: 'assets/images/pets-sophia.png',
    name: 'Sophia',
    type: 'Dog - Shih tzu',
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
})
const woody = new Animal ({
    img: 'assets/images/pets-woody.png',
    name: 'Woody',
    type: 'Dog - Golden Retriever',
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
})
const scarlett = new Animal ({
    img: 'assets/images/pets-scarlet.png',
    name: 'Scarlett',
    type: 'Dog - Jack Russell Terrier',
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
})
const katrine = new Animal ({
    img: 'assets/images/pets-katrine.png',
    name: 'Katrine',
    type: 'Cat - British Shorthair',
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
})
const timmy = new Animal ({
    img: 'assets/images/pets-timmy.png',
    name: 'Timmy',
    type: 'Cat - British Shorthair',
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
})
const freddie = new Animal ({
    img: 'assets/images/pets-freddie.png',
    name: 'Freddie',
    type: 'Cat - British Shorthair',
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
})
const charly = new Animal ({
    img: 'assets/images/pets-charly.png',
    name: 'Charly',
    type: 'Dog - Jack Russell Terrier ',
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
})



// popup
const POPUP_BTNS = document.querySelectorAll('.btn_slider');
const BODY = document.querySelector('.popup_body');
const POPUP_BODY = document.querySelector('body');
const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = document.querySelector('.popup_close');


 if (POPUP_BTNS.length > 0) {
     for ( let i = 0; i < POPUP_BTNS.length; i++) {
         const BTN_LINK = POPUP_BTNS[i];
         BTN_LINK.addEventListener('mousedown', (e) => {
            const GET_NAME = BTN_LINK.getAttribute('data-name');
            console.log(GET_NAME);
            POPUP.classList.add('open');
            BODY.classList.add('body_lock');
            // setTimeout(BODY.style.paddingRight = '17px', 800);
            e.preventDefault();
         });
     }
 }
    POPUP_CLOSE.addEventListener('mousedown', () => {
         POPUP.classList.remove('open');
        //  BODY.classList.remove('body_lock');
        //  setTimeout(BODY.style.paddingRight = '0px', 800);
    });
