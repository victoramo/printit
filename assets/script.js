// Tableau des slides
let slides = [
	{
		"image": "assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Variables pour la gestion des points de navigation (dots)
let bulletSelected = 0;
let dots = document.querySelector(".dots");

// Création des points de navigation (dots) à partir du nombre de slides
dots.innerHTML = `<div class="dot"></div>`.repeat(slides.length);
dots.firstChild.classList.add("dot_selected"); // Ajout de la classe "dot_selected" au premier point

// Fonction pour gérer les points (dots)
function ChangeDot(sens) {
	bulletSelected = bulletSelected + sens;
	let bulletPrecedent = bulletSelected - sens;

	// Gestion du passage à la première ou dernière page des dots
	if (bulletSelected > dots.childNodes.length - 1) {
		bulletSelected = 0;
	}
	if (bulletSelected < 0) {
		bulletSelected = dots.childNodes.length - 1;
	}

	// Mise à jour des classes pour les dots
	dots.childNodes[bulletPrecedent].className = "dot";
	dots.childNodes[bulletSelected].className = "dot dot_selected";
}

// Fonction pour changer de slide
let numero = 0;
function ChangeSlide(sens) {
	numero = numero + sens;

	// Gestion du passage à la première ou dernière slide
	if (numero > slides.length - 1) {
		numero = 0;
	}
	if (numero < 0) {
		numero = slides.length - 1;
	}

	// Mise à jour de l'image et du texte de la slide
	document.querySelector(".bannerImg").src = slides[numero].image;
	document.querySelector(".texte").innerHTML = `${slides[numero].tagLine}`;
}

// Mise en place du carrousel automatique (change toutes les 4 secondes)
setInterval(() => {
	ChangeSlide(1); // Passage à la slide suivante
	ChangeDot(1); // Passage au point suivant
}, 4000);

// Gestion des flèches gauche et droite pour la navigation manuelle
let left = document.querySelector(".arrow_left");
let right = document.querySelector('.arrow_right');

left.addEventListener("click", () => {
	ChangeSlide(-1); // Slide précédente
	ChangeDot(-1); // Point précédent
});

right.addEventListener("click", () => {
	ChangeSlide(1); // Slide suivante
	ChangeDot(1); // Point suivant
});
