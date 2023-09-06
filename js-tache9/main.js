
// Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
// Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
// Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2
let tab4 = [];
let tab5 = [];

for (let i = 0 ; i < 5 ; i++) {
    tab4.push(prompt("sesir tableaux 1"))

}

for (let i = 0 ; i < 5 ; i++) {
    tab5.push(prompt("sesir tableaux 2"))

}
 // Créer tab3 à partir des éléments de tab1 qui ne se trouvent pas dans tab2
const tab6 = tab4.filter(element => !tab5.includes(element));
console.log(tab6);
    
// Créer tab4 à partir des éléments de tab1 qui se trouvent dans tab2
const tab7 = tab4.filter(element => tab5.includes(element));
console.log(tab7);



// Soit un tableau tab1=[5,3,87,1,-4,-99,0]
// Sans utiliser les methodes javascript :
// 1. Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier  
// 2. Ecrire une fonction qui reçoit en parametre tab1 et retourne la valeur max , min
let tableaux = [5, 3, 87, 1, -4, -99, 0];

tableaux.sort();

document.getElementById('p1').innerHTML = `le tableau [ ${tableaux}]`
document.getElementById('p2').innerHTML = `le nombre max di tableau ( ${Math.max(...tableaux)} )`
document.getElementById('p3').innerHTML = `le nombre max di tableau ( ${Math.min(...tableaux)} )`