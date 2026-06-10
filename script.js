let historiqueMotsDePasse = [];

// Déclaration de la fonction principale liée au clic du bouton "Générer un mot de passe"
function genererMotDePasse() {
    // Variable contenant le dictionnaire global de tous les caractères autorisés dans notre algorithme
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!";
    // Variable initialisée à vide qui servira à stocker le code final généré petit à petit
    let motDePasse = "";
    // Extraction de la valeur écrite par l'utilisateur dans l'input "longueur"
    let longueur = parseInt(document.getElementById("longueur").value);

    // Boucle de traitement algorithmique itératif (tourne autant de fois que la longueur demandée)
    for (let i = 0; i < longueur; i++) {
        let position = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres[position];
    }

    // Sélectionne la boîte paragraphe du HTML par son identifiant unique et injecte le résultat à l'écran
    document.getElementById("motdepasse").innerHTML = motDePasse;

    // ANALYSE DE LA FORCE ET COLORATION DE LA BARRE
    let indicateur = document.getElementById("force-indicateur");
    let barre = document.getElementById("barre-force");

    if (longueur < 8) {
        indicateur.innerHTML = "Force : 🔴 Faible";
        indicateur.style.color = "#e74c3c";
        barre.style.width = "33%";
        barre.style.backgroundColor = "#e74c3c";
    } else if (longueur >= 8 && longueur < 12) {
        indicateur.innerHTML = "Force : 🟠 Moyen";
        indicateur.style.color = "#e67e22";
        barre.style.width = "66%";
        barre.style.backgroundColor = "#e67e22";
    } else {
        indicateur.innerHTML = "Force : 🟢 Fort";
        indicateur.style.color = "#2ecc71";
        barre.style.width = "100%";
        barre.style.backgroundColor = "#2ecc71";
    }

    // 1. On ajoute le nouveau mot de passe au début du tableau
    historiqueMotsDePasse.unshift(motDePasse);

    // 2. Si on dépasse 5 mots de passe, on jette le plus ancien
    if (historiqueMotsDePasse.length > 5) {
        historiqueMotsDePasse.pop();
    }

    // 3. On sélectionne notre liste HTML et on la vide
    let listeHTML = document.getElementById("liste-historique");
    listeHTML.innerHTML = "";

    // 4. On fait une boucle pour afficher chaque mot de passe rangé dans le tableau
    for (let i = 0; i < historiqueMotsDePasse.length; i++) {
        listeHTML.innerHTML += "<li>" + historiqueMotsDePasse[i] + "</li>";
    }
}

// Déclaration de la fonction secondaire liée au clic du bouton "Copier"
function copierMotDePasse() {
    let motDePasse = document.getElementById("motdepasse").innerHTML;
    if (motDePasse === "") {
        alert("Veuillez d'abord générer un mot de passe !");
        return; 
    }

    navigator.clipboard.writeText(motDePasse);

    let boutons = document.getElementsByTagName("button");
    let boutonCopier = boutons[1]; 

    boutonCopier.innerHTML = "Copié ! ✅";
    boutonCopier.style.backgroundColor = "#27ae60"; 

    setTimeout(function() {
        boutonCopier.innerHTML = "Copier"; 
        boutonCopier.style.backgroundColor = ""; 
    }, 2000);
}