

let Cases = document.getElementsByClassName('case')
let myCases = document.querySelectorAll('.case')
let el = document.getElementById("myModal");
let span = document.getElementById('span')
let contenu = document.getElementById('contenu')
let jourLun = document.getElementById('jourLun')
const divAfiche = document.getElementById('div-afiche')


// let list = document.getElementById('list')
console.log(myCases);
// variable pour recuperer la date du jour

let date = new Date();
// anee
let year = date.getFullYear();
// mois
let month = date.getMonth() + 1;
let day = date.getDate();

// stocker les mois
const moisName = ['janvier', "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];

const moiApres = "upMONTH";
const moiAvant = "downMONTH";

// function Reduceur
function calendrierReduceur(action) {
    switch (action) {
        case moiApres:
            if (month < 12) month++
            else {
                year++
                month = 1
            }
            break;
        case moiAvant:
            if (month < 12) month--
            else {
                year--
                month = 1
            }
            break;
        default:
            break;
    }
    // executer apres le swith
    calendrier(year, month)
}

// les button avant et apres

document.getElementById('avant').onclick = function () {
    calendrierReduceur(moiAvant)
    console.log(month);
}

document.getElementById('apres').onclick = function () {
    calendrierReduceur(moiApres)
    console.log(month);

}


// fonction pour afficher toutes les dates
function calendrier(year, month) {
    const monthNb = month + 12 * (year - 1990);
      console.log(monthNb);
    let cld = [{ deyStart: 0, length: 31, year: 1990, month: "janvier" }]

    for (let i = 0; i < monthNb - 1; i++) {
        let yearSimule = 1990 + Math.floor(i / 12)
        console.log(yearSimule);
        const monthSimuleLongeur = [31, getFevrierLength(yearSimule), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let monthSimuleIndex = (i + 1) - (yearSimule - 1990) * 12

        cld[i + 1] = {
            deyStart: (cld[i].deyStart + monthSimuleLongeur[monthSimuleIndex - 1]) % 7,
            length: monthSimuleLongeur[monthSimuleIndex],
            year: 1990 + Math.floor((i + 1) / 12),
            month: moisName[monthSimuleIndex]
        }
        if (cld[i + 1].month === undefined) {
            cld[i + 1].month = "janvier"
            cld[i + 1].length = 31
        }
    };



    for (let i = 0; i < Cases.length; i++) {
        Cases[i].innerText = "";
        
        // Ajoutez un gestionnaire d'événements de clic à chaque case
        Cases[i].addEventListener('click', function () {
            
            // Récupérez le contenu de la case (le jour du mois)
            const dayClicked = parseInt(this.innerText, 10);
       
            // Vérifiez si le contenu est un nombre valide (un jour du mois)
            if (!isNaN(dayClicked)) {
                 
                // on veut que tu recupére nos deonners
                list.innerHTML = localStorage.getItem("stock");

                // on recuoére tous ce qui est dans  notre class delete
                const spanDels = document.querySelectorAll(".delete");
                
                for (let span of spanDels) {
                    // ajoute l'evenement del
                    span.onclick = () => del(span.parentElement)
                 
                 };
                
                 
                nosTache.style.display = (list.innerHTML == "") ? "block" : "none";
                // Affichez la date complète (jour, mois et année) dans la console
                divAfiche.innerHTML = `${dayClicked} ${moisName[month- 1]} ${year}`;
                form.onsubmit = () => {
                    const myElement = document.createElement("li");
                    const myTitre = document.createElement('h3')
                    const myPara = document.createElement("p");
                    const myButton2 = document.createElement("button");
                    const myButton1 = document.createElement("button");
                   
                   //  Ajouter une  class
                   myButton2.classList.add("delete");
                   
                   myButton2.onclick = () => del(myElement);
                    myButton1.addEventListener ('click', () => {
                        myinput1.value = myTitre.textContent
                        myinput2.value = myPara.textContent
                    
                        del(myElement)
                    })

                    myTitre.innerHTML = myinput1.value;
                    myPara.innerHTML = myinput2.value;

                    myButton2.textContent = "Suprimer";
                    myButton1.textContent = "Modifier";
                    myButton2.style.marginLeft = "4px"
                    myButton1.style.backgroundColor = "green"
                    myButton2.style.backgroundColor = "red"
                 

                    myElement.appendChild(myTitre);
                    myElement.appendChild(myPara);
                    myElement.appendChild(myButton1);
                    myElement.appendChild(myButton2);
                    myElement.appendChild(divAfiche)
                    list.appendChild(myElement);
                  
                    myinput1.value = "";
                    myinput2.value = "";
                

                    nosTache.style.display = "none";

                     //  stoker nos doner
                    localStorage.setItem("stock", list.innerHTML)
                    return false;
                }

                function del(element) {
                    element.remove();

                    nosTache.style.display = (list.innerHTML == "") ? "block" : "none";

                    // enregistre la nouvelle list
                    localStorage.setItem("stock", list.innerHTML)
                }    
                
               
                el.style.display = "block";
                // Vous pouvez également afficher cette date où vous le souhaitez dans votre interface utilisateur
            }
        });
    }

    
    for (let i = 0; i < cld[cld.length - 1].length; i++) {

        Cases[i + cld[cld.length - 1].deyStart].innerText = i + 1

    };


    document.getElementById('cldt').innerText = cld[cld.length - 1].month.toLocaleLowerCase() + " " + cld[cld.length - 1].year
};

calendrier(year, month)

span.onclick = function() {
    el.style.display = "none";
    
} 


document.onclick = function(event) {
    if (event.target == el) {
      el.style.display = "none";
    }
} 

function getFevrierLength(year) {
    if (year % 4 === 0) return 29
    else return 28
}


