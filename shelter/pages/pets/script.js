"use strict"
// class
let img_src = document.querySelector('.popup_img');
let popup_name = document.querySelector('.popup_name');
let popup_type = document.querySelector('.popup_type');
let popup_description = document.querySelector('.popup_description');
let popup_age = document.querySelector('.popup_age');
let popup_inoculations = document.querySelector('.popup_inoculations');
let popup_diseases = document.querySelector('.popup_diseases');
let popup_parasites = document.querySelector('.popup_parasites');
class Animal {
    constructor(props) {
        this.img = props.img;
        this.name = props.name;
        this.type = props.type;
        this.description = props.description;
        this.age = props.age;
        this.inoculations = props.inoculations;
        this.diseases = props.diseases;
        this.parasites = props.parasites;
    }

    show() {
        img_src.src = `${this.img}`;
        popup_name.innerHTML = `${this.name}`;
        popup_type.innerHTML = `${this.type}`;
        popup_description.innerHTML = `${this.description}`;
        popup_age.innerHTML = `${this.age}`;
        popup_inoculations.innerHTML = `${this.inoculations}`;
        popup_diseases.innerHTML = `${this.diseases}`;
        popup_parasites.innerHTML = `${this.parasites}`;
    }

}

const jennifer = new Animal ({
    img: '../../assets/images/pets-jennifer.png',
    name: 'Jennifer',
    type: 'Dog - Labrador',
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "Age: 2 months",
    inoculations: "Inoculations: none",
    diseases: "Diseases: none",
    parasites: "Parasites: none"
})
const sophia = new Animal ({
    img: '../../assets/images/pets-sophia.png',
    name: 'Sophia',
    type: 'Dog - Shih tzu',
    age: "Age: 1 months",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    inoculations: "Inoculations: parvovirus",
    diseases: "Diseases: none",
    parasites: "Parasites: none"
})
const woody = new Animal ({
    img: '../../assets/images/pets-woody.png',
    name: 'Woody',
    type: 'Dog - Golden Retriever',
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "Age: 3 years 6 months",
    inoculations: "Inoculations: adenovirus, distemper",
    diseases: "Diseases: right back leg mobility reduced",
    parasites: "Parasites: none"
})
const scarlett = new Animal ({
    img: '../../assets/images/pets-scarlet.png',
    name: 'Scarlett',
    type: 'Dog - Jack Russell Terrier',
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "Age: 3 months",
    inoculations: "Inoculations: parainfluenza",
    diseases: "Diseases: none",
    parasites: "Parasites: none"
})
const katrine = new Animal ({
    img: '../../assets/images/pets-katrine.png',
    name: 'Katrine',
    type: 'Cat - British Shorthair',
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "Age: 6 months",
    inoculations: "Inoculations: panleukopenia",
    diseases: "Diseases: none",
    parasites: "Parasites: none"
})
const timmy = new Animal ({
    img: '../../assets/images/pets-timmy.png',
    name: 'Timmy',
    type: 'Cat - British Shorthair',
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "Age: 2 years 3 months",
    inoculations: "Inoculations: none",
    diseases: "Diseases: none",
    parasites: "Parasites: none"
})
const freddie = new Animal ({
    img: '../../assets/images/pets-freddie.png',
    name: 'Freddie',
    type: 'Cat - British Shorthair',
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "Age: 2 months",
    inoculations: "Inoculations: calicivirus, viral rhinotracheitis",
    diseases: "Diseases: kidney stones",
    parasites: "Parasites: none"
})
const charly = new Animal ({
    img: '../../assets/images/pets-charly.png',
    name: 'Charly',
    type: 'Dog - Jack Russell Terrier ',
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "Age: 8 years",
    inoculations: "Inoculations: rabies",
    diseases: "Diseases: none",
    parasites: "Parasites: none"
})

const arrayAnimal = [jennifer, sophia, woody, scarlett, katrine, timmy, freddie, charly];
const arrayAnimalStr = ['jennifer', 'sophia', 'woody', 'scarlett', 'katrine', 'timmy', 'freddie', 'charly'];


// burger
const burger = document.querySelector(".header_burger");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
const navbarMain = document.querySelector(".navbar_main");
const navbarText = document.querySelector(".navbar_text_first");
const navbarTextLast = document.querySelector(".navbar_text_last");

burger.addEventListener("mousedown", () => {
    navbar.classList.toggle('active_burger');
    burger.classList.toggle('active_burger_burger');
    body.classList.toggle('lock');
});
navbarMain.addEventListener('mousedown', () => {
    body.classList.remove('lock');
    navbar.classList.remove('active_burger');
    burger.classList.remove('active_burger_burger');
})
navbarText.addEventListener('mousedown', () => {
    body.classList.remove('lock');
    navbar.classList.remove('active_burger');
    burger.classList.remove('active_burger_burger');
})
navbarTextLast.addEventListener('mousedown', () => {
    body.classList.remove('lock');
    navbar.classList.remove('active_burger');
    burger.classList.remove('active_burger_burger');
})
if (navbar.hasAttributes('active_burger')) {
    navbar.addEventListener('mousedown', (e) => {
      if (!e.target.closest('.navbar_width'))  {
          navbar.classList.remove('active_burger');
          burger.classList.remove('active_burger_burger');
          body.classList.remove('lock');
      }
    })
}




// popup
const POPUP_CARDS = document.querySelectorAll('.card');
const POPUP_BTNS = document.querySelectorAll('.btn_slider');
const BODY = document.querySelector('.popup_body');
const POPUP_BODY = document.querySelector('body');
const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = document.querySelector('.popup_close');
const POPUP_TITLE = document.querySelector('.popup_title');


 if (POPUP_CARDS.length > 0) {
     for ( let i = 0; i < POPUP_CARDS.length; i++) {
         const BTN_LINK = POPUP_CARDS[i];
         BTN_LINK.addEventListener('mousedown', (e) => {
            const GET_NAME = e.target.closest('div').getAttribute('data-name');
            arrayAnimal[arrayAnimalStr.indexOf(GET_NAME)].show()
            POPUP.classList.add('open');
            POPUP_BODY.classList.add('body_lock');
            POPUP_TITLE.classList.add('active_title');
            e.preventDefault();
         });
     }
 }

    POPUP_CLOSE.addEventListener('mousedown', () => {
         POPUP.classList.remove('open');
         POPUP_BODY.classList.remove('body_lock');
         POPUP_TITLE.classList.remove('active_title');
    });

    if (POPUP.hasAttributes('popup_open')) {
        BODY.addEventListener('mousedown', (e) => {
          if (e.target.classList.value === 'popup_body')  {
            POPUP.classList.remove('open');
            POPUP_BODY.classList.remove('body_lock');
            POPUP_TITLE.classList.remove('active_title');
          }
        })
    }


