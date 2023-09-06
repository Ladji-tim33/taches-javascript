// Créez un tableau de nombres et utilisez la méthode .map() pour doubler chaque nombre du tableau.
let tableaux = [5, 10, 3, 18, 25, 7, 35]

let modifiedTab = tableaux.map(function(element){
    return element *2;
});

document.getElementById('p1').innerHTML =" Le doubler de chaque nombre du tableau est : " + modifiedTab + "." ;

/*Créez un tableau de chaînes et utilisez la méthode .filter() pour renvoyer un nouveau tableau
 avec uniquement les chaînes dont la longueur est supérieure à 3. */

let chaine = ["banane", "pom", "orange", "carote", "rest", "luk"]
let lucky = chaine.filter(function(chaineString) {
    return chaineString.length > 3;
  });
  document.getElementById('p2').innerHTML =" les chaînes dont la longueur est supérieure à 3 sont : " + lucky + ".";

// Utilisez la méthode .reduce() pour résumer tous les nombres dans un tableau de nombres. 
let numbers = [8, 15, 7, 3, 5];

let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
document.getElementById('p3').innerHTML =" le résumer de tous les nombres c'est : " + sum + " ."; 

// Utilisez la méthode .sort() pour trier un tableau de chaînes par ordre alphabétique.
const foo = [' santos ',' moussa ',' ladji ', ' alpha ', ' ndeye ', ' pape ', ' boulaye'];
foo.sort();
document.getElementById('p4').innerHTML =" ici on a notre tableaux trier de chaine par ordre alphabétique : " + foo + " ."; 


// Utilisez la méthode .forEach() pour imprimer chaque élément d'un tableau.
let myNum = ["69 ", "50 ", "20 " , "5 ", "33 ",]
myNum.forEach(function(numbernum) {
 document.write(numbernum);
});
