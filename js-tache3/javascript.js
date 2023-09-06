
// Écrire un programme qui demande à un utilisateur d’écrire son âge, et lui retourne sa catégorie d’âge.  

const age = prompt('Quel est votre age ?')


if (age <= 14) {
    document.write("vous etes Enfants")
}

else if (age <= 25) {
    document.write("vous etes Adolescents")
}

else if (age < 65) {
    document.write("vous etes Adultes")
}

else {
    document.write("vous etes Aînés")
}



