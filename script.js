// Déclaration de la fonction principale liée au clic du bouton "Générer un mot de passe"
function genererMotDePasse() {
    // Variable contenant le dictionnaire global de tous les caractères autorisés dans notre algorithme
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!";
    
    // Variable initialisée à vide qui servira à stocker le code final généré petit à petit
    let motDePasse = "";
    
    // Extraction de la valeur écrite par l'utilisateur dans l'input "longueur"
    // parseInt(...) convertit le format texte reçu du HTML en un véritable type Nombre mathématique en JavaScript
    let longueur = parseInt(document.getElementById("longueur").value);

    // Boucle de traitement algorithmique itératif (tourne autant de fois que la longueur demandée)
    for (let i = 0; i < longueur; i++) {
        // Math.random() génère un nombre décimal aléatoire entre 0 et 1 (ex: 0.547...)
        // On le multiplie par la taille totale de notre dictionnaire (caracteres.length)
        // Math.floor(...) supprime la virgule pour obtenir un index entier parfait (ex: 24)
        let position = Math.floor(Math.random() * caracteres.length);
        
        // Extrait le caractère situé à l'index calculé et l'ajoute à la suite de notre mot de passe
        motDePasse += caracteres[position];
    }

    // Sélectionne la boîte paragraphe du HTML par son identifiant unique et injecte le résultat à l'écran
    document.getElementById("motdepasse").innerHTML = motDePasse;
}

// Déclaration de la fonction secondaire liée au clic du bouton "Copier"
function copierMotDePasse() {
    // Récupération du texte actuellement affiché à l'intérieur du paragraphe de mot de passe
    let motDePasse = document.getElementById("motdepasse").innerHTML;
    
    // Structure de contrôle de sécurité : si la boîte est vide, on affiche une alerte et on coupe l'exécution
    if (motDePasse === "") {
        alert("Veuillez d'abord générer un mot de passe !");
        return; // Arrête immédiatement l'exécution de la fonction en cours
    }

    // API système native moderne permettant d'envoyer directement le texte extrait dans le presse-papier de l'OS
    navigator.clipboard.writeText(motDePasse);

    // Sélection dynamique du bouton dans le HTML de manière infaillible
    // On demande à JavaScript de scanner la page et d'extraire la liste de tous les éléments de type "button"
    let boutons = document.getElementsByTagName("button");
    let boutonCopier = boutons[1]; // L'index [0] cible Générer, l'index [1] cible le bouton Copier

    // EFFET VISUEL DYNAMIQUE (DÉBUT DU SUCCÈS)
    // On modifie à la volée le texte et le style CSS de l'élément récupéré pour notifier l'utilisateur
    boutonCopier.innerHTML = "Copié ! ✅";
    boutonCopier.style.backgroundColor = "#27ae60"; // Application d'un fond vert clair de succès

    // Utilisation d'un minuteur asynchrone système (setTimeout)
    // Exécute le bloc de code interne après un temps d'attente précis configuré en millisecondes
    setTimeout(function() {
        // Au bout de 2000 millisecondes (soit 2 secondes de temps réel) :
        boutonCopier.innerHTML = "Copier"; // Le texte initial est restauré
        boutonCopier.style.backgroundColor = ""; // La couleur verte s'efface pour restituer le contrôle au fichier CSS global
    }, 2000);
}