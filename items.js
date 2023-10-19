var monElement = document.getElementsByClassName("sup2");

//console.log(monElement.classList); à faire défiler dans une boucle
        
function SideSwap(){


    document.addEventListener("DOMContentLoaded", function () {
        


        // Sélectionnez le bouton que vous souhaitez écouter
        var next = document.getElementsByClassName("next");
        var prev = document.getElementsByClassName("prev");

        // Ajoutez un gestionnaire d'événements clic au bouton
        next.addEventListener("click", function () {
            // Supprimez la classe "ancienneClasse" et ajoutez la classe "nouvelleClasse"
            monElement.classList.remove("sup2");
            monElement.classList.add("sup");
        });

        prev.addEventListener("click", function () {
            // Supprimez la classe "ancienneClasse" et ajoutez la classe "nouvelleClasse"
            monElement.classList.remove("sup");
            monElement.classList.add("sup2");
        });
    });
}












// function bienvenu(){
// 	alert("Bienvenue parmi nous !");
// }

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n){
// 	showSlides(slideIndex += n);
// }

// function currentSlide(n){
// 	showSlides(slideIndex = n);
// }

// function showSlides(n){
// 	let i;
// 	let slides = document.getElementsByClassName('sup');


// 	if (n > slides.length){
// 		slideIndex = 1
// 	}
// 	if(n < 1){
// 		slideIndex = slides.length
// 	}


// 	// Cacher toutes les slides 
// 	for(let i = 0; i < slides.length; i++){
// 		slides[i].style.display = "none";
// 	}

// 	// Retirer la class 'active' de tous les points

// 	for(let i = 0; i < dots.length; i++){
// 		dots[i].classList.remove('active');
// 	}


// 	// Afficher la slide demandée

// 	slides[slideIndex - 1].style.display = 'block';

// 	// Ajouter la classe 'active' sur le point cliqué

// 	dots[slideIndex - 1].classList.add('active');

// }