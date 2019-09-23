/*Exo 1_MANIPULATION DE CLASSES CSS

let element = document.getElementById('second');
element.classList.remove('hidden'); // => la classe hidden va être associée à l'élément*/

/*********************************************************************************************/

/*Exo 2_Accéder à des éléments par classe

let elements = document.getElementsByClassName('spoiler'); // => tableau d'éléments

for (let i = 0; i < elements.length; i++) {
    let element = elements[i]; // i-ème élément du tableau d'éléments
  }

function button(){
  elements[0].classList.add('hidden');
  elements[1].classList.add('hidden'); 
}

/**********************************************************************************************/


/*Exo3_Manipulation de styles CSS*/
/* function button(){
let elements = document.getElementById('second');
elements.style.backgroundColor = 'yellow';
}

for (let i = 0; i < elements.length; i++) {
   elements[i].classList.add('hidden');
  } */

/**********************************************************************************************/


/*Filtrage par catégorie*/

/*
let elements = document.querySelectorAll('.sport, .apprentissage, .legumes');


function affichage() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden');
}
}

affichage();

function toutVoir(){
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('hidden');
}
}

function affichageSport(){
    let autres = document.querySelectorAll('.apprentissage, .legumes');
    for (let j = 0; j < autres.length; j++){
        autres[j].classList.add('hidden');
    }

    let sport = document.querySelectorAll('.sport, .special');
    for (let i = 0; i < sport.length; i++) {
        sport[i].classList.remove('hidden');
}
}

function affichageApprend(){
    let autres = document.querySelectorAll('.sport, .legumes');
    for(let j = 0; j < autres.length; j++){
        autres[j].classList.add('hidden');
    }
    let apprend = document.querySelectorAll('.apprentissage, .special');
    for( let i =0; i <apprend.length; i++){
        apprend[i].classList.remove('hidden');
    }
}

function affichageLeg(){
    let autres = document.querySelectorAll('.sport, .apprentissage');
    for(let j = 0; j < autres.length; j++){
        autres[j].classList.add('hidden');
    }
    let leg = document.querySelectorAll('.legumes, .special');
    for( let i = 0; i <leg.length; i++){
        leg[i].classList.remove('hidden');
    }
 }
*/


