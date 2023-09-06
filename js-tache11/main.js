var x = { name : "jhon"}

// changé la propreté
x.name = "codeur"
console.log(x);

// une nouvelle object
 x = { name : "jhon"}

// function normal

const me1 = {
    nom : "john",
    presentation : function (friend) {
        return "tu connait " + friend + " ?"
    }
};

console.log(me1.presentation("hawa"));

const me2 = {
    nom : "johne",
    presentation : friend =>  "tu connait " + friend + " ?"
    
};

console.log(me2.presentation("Moussa"));


const me3 = {
    presentation :  (friend1, friend2, friend3) =>  "tu connait " + friend1 + " " + friend2 + " " +  friend3 + " ?"
};

console.log(me3.presentation("hawa", "issa", "ladji"));


// pramaitre par defaut
function nomCoplet(prenom, nom = "diallo") {
    console.log(prenom + " " + nom);
    
}

nomCoplet("black")


// pramaitre rest
function laSome(...nombres) {
    let some = 0;
    for(let i = 0; i< nombres.length; i++){
        some += nombres[i]
    }
    return some
}

console.log(laSome(5, 8, 21, 46, 17));


// PRAMETRE SPREAD

const MyArray = [5, 8, 21];
function laSome3Nombres(nombresa, nombresb, nombresc) {

    return nombresa + nombresb + nombresc
}

console.log(laSome3Nombres(...MyArray));

// FOR OF

const fruitRouge = ["fraise", "franvoise", "cerise"];

for (let fruit of fruitRouge) {
    console.log("la " + fruit + " c'est bon !");
}

// Template literals
const fruit = "fraise";

console.log(`la   ${fruit}  c'est bon !`);

const maString = `je suis la ligne81

je suis la ligne 83
je suis la ligne 84
`

console.log(maString);

// Destructuring array

const myNombres = [1, 2, 3];
const [a,b,c] = myNombres;
console.log(a);
console.log(b);


let y = 5;
let j = 10;
[j,y] = [y,j]
console.log(y);
console.log(j);    

// Destructuring object 

const myObject = {
    nam: "jhon",
    age: 32,
    present : function () {
        console.log("hello");
    }
}

const {nam, present} = myObject
present()