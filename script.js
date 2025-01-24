// Étape 1 : un triangle d'étoiles

function afficherPointeSapin(hauteur) {
  // à remplir
}

//   afficherPointeSapin(4)

//   +
//  /|\
// /*|*\
///**|**\

// Étape 1.1 : une ligne d'étoiles

function showStars(NSTARS) {
  let stars = "";
  for (let i = 0; i < NSTARS; i++) {
    stars += "*";
  }
  console.log(stars);
}

// showStars(2);
// showStars(5);

// Étape 1.2 : carré d'étoiles

function showRectangle(height, width) {
  // pour chaque "étage" de la hauteur appeler showStars
  for (i = 0; i < height; i++) {
    showStars(width);
  }
}

showRectangle(5, 5);

// Étape 1.3 : triangle d'étoiles

function showRightTriangle(NLINE) {
    // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
const slash = "\\"
  let stars = ""
    for (i = 0; i < NLINE; i++){
        console.log(slash)
        stars += '*' 
        console.log(stars + slash)
    }
  }
  
 showRightTriangle(5)
