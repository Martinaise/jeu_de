"use strict";

const joueurgauche = document.querySelector(".joueurgauche");
const joueurdroite = document.querySelector(".joueurdroite");
const scoreglobal1 = document.getElementById("#score-global1");
const scoreglobal2 = document.getElementById("#score-global2");
const round1 = document.querySelector(".round1");
const round2 = document.querySelector(".round2");


let btn1lancerdede = document.querySelector(".btn1");
let dice = document.querySelector(".dice");

let scorejoueur1et2;
let scoretemporaire;
let jouerquijoue;
let jeuencour;

// initiation condition de début de jeu a 0
function initiation() {
    scorejoueur1et2 = [0, 0];
    scoretemporaire = 0;
    jouerquijoue = 0;
    jeuencour = 0;
    playing=true;

    scoreglobal1.textContent = 0;
    scoreglobal2.textContent = 0;
    round1.textContent = 0;
    round2.textContent = 0;

dice.classList.add("cacher");
joueurgauche.classList.remove('player--winner');
joueurdroite.classList.remove('player--winner');
joueurgauche.classList.add('player--active');
joueurdroite.classList.remove('player--active');


}





// on ajoute un evenement sur le boutton de lancer de dé avec une fonction callback qui permet de s'éxecuter quand on click sur le boutton
btn1lancerdede.addEventListener('click', function () {
    dice.classList.remove('cacher')
    // on ajoute 1  pour ne pas avoir 0 car pas de Zéro un dé et pour avoir 6 en max.
    const lechiffredudelance = Math.floor(Math.random() * 6 + 1);
    dice.src = `../img/dice_${lechiffredudelance}.png`
})



