"use strict";
let btn1lancerdede = document.querySelector(".btn1");
let dice = document.querySelector(".dice");

// on ajoute un evenement sur le boutton de lancer de dé avec une fonction callback qui permet de s'éxecuter quand on click sur le boutton
btn1lancerdede.addEventListener('click', function () {
    // on ajoute 1 pour ne pas avoir 0 car pas de Zéro un dé et pour avoir 6 en max.
    dice.classList.remove('cacher')
    const lechiffredudélance = Math.floor(Math.random() * 6 + 1);
    dice.src = `../img/dice_${lechiffredudélance}.png`
})



