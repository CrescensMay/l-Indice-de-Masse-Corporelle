var corps = document.getElementById("affichage") // quand la page est refresh les prompts s'affichent

function prendre() {

    var nom = prompt("Tapez votre nom") // quand la page est refresh les prompts s'affichent
    var taille = parseFloat(prompt("Tapez votre taille")) // vu que c'est des decimaux donc float
    var poids = parseFloat(prompt("Tapez votre poids")) // vu que c'est des decimaux donc float
    var imc = poids / Math.pow(taille, 2) // declaration et calcul du imc
    var arrandir = Math.round(imc);// arrandir deux chiffres apres la virgule

    // comparaisons
    if(arrandir < 20){

      //appeler la fonction
      Afficher(nom, taille, poids, arrandir, "Faible")

    }else if(arrandir < 20 && arrandir >= 26){

      //appeler la fonction
      Afficher(nom, taille, poids, arrandir, "Normal")

    }else if (arrandir >= 26) {

      //appeler la fonction
      Afficher(nom, taille, poids, arrandir, "Eleve")
    }
}

// creer cette fonction pour que ce soit lisible pour toi pour liberer la fonction Prendre en haut
function Afficher(nom, taille, poids, imc, etat) {

  var text = "<h3>Nom: " + nom + "</h3>"
  text += "<h3>Taille: " + taille + "</h3>"
  text += "<h3>Poids: " + poids + "</h3>"
    text += "<h3>IMC: " + imc + "</h3>"
  text += "<p> Cette personne a un IMC " + etat + "</p>"
  corps.innerHTML = text

}
//executer la fonction
prendre()
