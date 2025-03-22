// age mineur ou majeur

let age;
let isValid = false;

while (!isValid) {
    age = prompt("Quel est votre âge ?");
    age = parseInt(age);
    if (!isNaN(age)) {
        isValid = true;
    } else {
        alert("Veuillez entrer un âge valide !");
    }
}
    if (age < 18){
        alert("Vous êtes mineur.");
    } else {
        alert("Vous êtes majeur.");
    }


    // nombre pair ou impair

let nombre;
let issValid = false;

while (!issValid) {
    nombre = prompt("Veuillez saisir un nombre");
    nombre = parseInt(nombre);
    if (!isNaN(nombre)) {
        issValid = true;
    } else {
        alert("Veuillez saisir un nombre valide !");
    }
}
    if (nombre%2 == 0){
        alert("Ce nombre est pair.");
    } else {
        alert("Ce nombre est impair.");
    }


    // nom du mois correspondant au nombre

    function obtenirNomMois(numeroMois) {
        const mois = [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ];
    
        if (numeroMois >= 1 && numeroMois <= 12) {
            return mois[numeroMois - 1];
        } else {
            return null;
        }
    }
    
    function demanderMoisValide() {
        let numeroMois;
        do {
            numeroMois = parseInt(prompt("Veuillez entrer un numéro de mois (entre 1 et 12) :"), 10);
    
            if (isNaN(numeroMois) || numeroMois < 1 || numeroMois > 12) {
                alert("Numéro de mois invalide. Veuillez entrer un nombre entre 1 et 12.");
            }
        } while (isNaN(numeroMois) || numeroMois < 1 || numeroMois > 12);
    
        return numeroMois;
    }
    
    const numeroMois = demanderMoisValide();
    const nomMois = obtenirNomMois(numeroMois);
    
    alert('Le mois correspondant au numéro '+ numeroMois +' est : '+ nomMois);