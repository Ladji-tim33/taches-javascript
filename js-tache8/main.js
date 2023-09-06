
/*soit deux tableaux (tab1 et tab2) de nombre positif et negatif saisis par l'utilisateur :
Écrire un programme permettant de recopier dans tab3 tous les éléments positifs de tab1, et remplacer les éléments
de tab2  par des zéros sans utiliser une boucle, et afficher les resultats dans le DOM */
let tab1 = []

for (let i = 0; i < 5; i++) {
    tab1.push(prompt("saisir tableaux 1"))
    if (tab1[i] >= 0) {
        // Utilser filter pour copier les elment positif du tab1 dans tab 3
        const tab3 = tab1.filter(element => element > 0);
        console.log(tab3);
    }

}
let tab2 = []
for (let i = 0; i < 5; i++) {
    tab2.push(prompt("saisir tableaux 2"))
    // Utilser map remplacer les élémentsde tab2  par des zéros
    const tab4 = tab2.map(element => 0);
     console.log(tab4);
}




