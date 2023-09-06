
function some(){
let a = document.getElementById("mynum1").value;
let b = document.getElementById("mynum2").value;
let mult=a*b;
alert("Le résultat de "+a+" x "+b+" = "+ mult);
// document.getElementById('p1').innerHTML = "Le résultat de "+a+" x "+b+" = "+ mult;
}

let k =window.prompt("Entrez un numero");

let divise = k / 4;
let mod = k % 4;
document.write("Si l'on divise "+k+" par "+4+" = "+ divise + " le reste est de "+ mod)
