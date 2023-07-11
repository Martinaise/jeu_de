"use strict";

const joueurgauche = document.querySelector(".player1");
const joueurdroite = document.querySelector(".player2");
const scoreglobal0 = document.getElementById("score-global0");
const scoreglobal1 = document.getElementById("score-global1");
const round0 = document.querySelector(".round0");
const round1 = document.querySelector(".round1");
const pastillej0 = document.querySelector(".j0");
const pastillej1 = document.querySelector(".j1");
const textwinner = document.querySelector(".textwinner");

const btn1lancerdede = document.querySelector(".btn1");
const btn2Hold = document.querySelector(".btn2");
const btnnewgame = document.querySelector("#btnnewgame")

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
    jeuencour = true;

    scoreglobal0.textContent = 0;
    scoreglobal1.textContent = 0;
    round0.textContent = 0;
    round1.textContent = 0;

    dice.classList.add("cacher");
    joueurgauche.classList.remove('player--winner');
    joueurdroite.classList.remove('player--winner');
    pastillej0.classList.add('active-player');
    pastillej1.classList.remove('active-player');
    textwinner.classList.add("cachertextwinner")
}
initiation();


// funcction qui permet de changer le joueur
const switchPlayer = function () {
    document.querySelector(`.round${jouerquijoue}`).textContent = 0;
    scoretemporaire = 0;
    jouerquijoue = jouerquijoue === 0 ? 1 : 0;
    pastillej0.classList.toggle('active-player');
    pastillej1.classList.toggle('active-player');

};

// on ajoute un evenement sur le boutton de lancer de dé avec une fonction callback qui permet de s'éxecuter quand on click sur le boutton
btn1lancerdede.addEventListener('click', function () {
    // on fait une condition pour savoir si il y'a une partie en cours
    if (jeuencour) {
        // on ajoute 1  pour ne pas avoir 0 car pas de Zéro un dé et pour avoir 6 en max.
        const lechiffredudelance = Math.floor(Math.random() * 6 + 1);
        dice.classList.remove('cacher')
        dice.src = `../img/dice_${lechiffredudelance}.png`

        // vérifier si la valeur du dé lancée est différente de 1
        // si elle est différente de 1 on augmente le score temporaire.
        // sinon on change de joueur
        if (lechiffredudelance !== 1) {
            scoretemporaire += lechiffredudelance
            // on change le score temporaire à la vollé dans le html
            document.querySelector(`.round${jouerquijoue}`).textContent = scoretemporaire;
        } else {
            switchPlayer();
        }

    }

});
// on rajoute un evement clik sur hold
btn2Hold.addEventListener("click", function () {
    //   je verifie si le jeu est en cours  
    if (jeuencour) {
        //changement de score global dans le tableau  on ajoute le score temporaire au score global et on stock
        scorejoueur1et2[jouerquijoue] += scoretemporaire;
        // exemple  scorejoueur1et2[1] = scorejoueur1et2[1] + scoretemporaire

        //changement de score global visuellement
        document.querySelector(`#score-global${jouerquijoue}`).textContent =
            scorejoueur1et2[jouerquijoue];
        if (scorejoueur1et2[jouerquijoue] >= 100) {
            jeuencour = false
            dice.classList.add("cacher")
            textwinner.classList.remove("cachertextwinner")
            let joueurtemp = jouerquijoue === 0 ? 1 : 2;

            document.querySelector(".winner").textContent = `joueur ${joueurtemp} `
        } else {
            switchPlayer()
        }
    }

})
//pour lancer une nouvelle partie de jeu
btnnewgame.addEventListener("click", initiation)

