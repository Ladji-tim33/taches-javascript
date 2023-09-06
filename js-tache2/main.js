
// Écrire un script qui permet de voir sur une page web les différents types de variables avec des exemples.
let prenom = "Je m'appelle Pierre";
let age = 29;
let vraix = true;
let nul = null;
let ind;

document.getElementById('p1').innerHTML = 'Type de prenom : ' + typeof prenom;
document.getElementById('p2').innerHTML = 'Type de age : ' + typeof age;
document.getElementById('p3').innerHTML = 'Type de age : ' + typeof vraix;
document.getElementById('p4').innerHTML = 'Type de nul : ' + typeof nul;
document.getElementById('p5').innerHTML = 'Type de ind : ' + typeof ind;

// Déclarez trois variables x, y et z comme "1", "2" et x+y. Afficher le type et la valeur de chaque variable. Ensuite, forcez le type de x et y à entier et exécutez à nouveau a+b. Afficher le type 
var x = "1"
var y = "2"
document.write( "Le type de x c'est  "  + "[" + typeof (x) + "] , " + "la valeur de x c'est " + x + "</br>" )
document.write("Le type de y c'est  "  + "[" + typeof (y) + "] , " + "la valeur de y c'est " + y + "</br>")
let z = x + y
document.write(x + "+" + y + "=" + z)
console.log("z = " + z + "[" + typeof (z) + "]");

var a = "1"
var b = "2"
console.log("a = " + a + "[" + typeof (a) + "]")
console.log("b = " + b + "[" + typeof (b) + "]")



