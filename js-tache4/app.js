
// quelques types de boucles
let boucle = ' voi ci quelques types de boucles : ';
let tab = ['1- while', '2- do… while', '3- for', '4- for… in', '5- for… of .' ] ;
document.write("<h2> Execice 1</h2>")
document.write(boucle,tab + "<br>" + "<br>");

for (let i = 0; i < tab.length; i++){
    console.log(tab[i])
};
 
// Rechercher la définition et l’utilisation de boucle
let bouc = prompt("Rechercher la définition et l’utilisation de ces boucles: 1- while 2- dowhile 3- for 4- forin 5- forof").toLowerCase()




const deff = {
    while: 0 ,
    dowhile: 0,
    for: 0,
    forin: 0,
    forof: 0
}

//  switch bouc
switch (bouc){
    // boucle while
    case'while':{
      document.write("la définition et l’utilisation de while : tant que en français, il nous permettre de répéter une série d’instructions tant qu’une condition donnée est vraie");
        break;
    }

     // boucle do... while
    case'dowhile':{
      document.write("la définition et l’utilisation de do... while : faire… tant que en francais, il est relativement semblable à la boucle while dans sa syntaxe.");
        break;
    }

     // boucle for
    case'for':{
      document.write("la définition et l’utilisation de for : pour en français, est structurellement différente des boucles while et do… while puisqu’on va cette fois-ci initialiser notre variable à l’intérieur de la boucle. Une boucle for contient trois « phases » à l’intérieur du couple de parenthèses : une phase d’initialisation, une phase de test (condition de sortie) et une phase d’itération (généralement une incrémentation). Chaque phase est séparée des autres par un point-virgule.");
        break;
    }

     // boucle for... in
    case'forin':{
      document.write("la définition et l’utilisation de for... in : pour... dans en français, permet d'itérer sur les clés d'un object");
        break;
    }

     // boucle for... of
    case'forof':{
      document.write("la définition et l’utilisation de for... of : pour...de en français, permet d'itérer sur les valeurs d'un tableau");
        break;
    }

    // switch pae default
    default: 
    
    alert('Veilleez choisire une boucle proposé dans la liste')
}






let a;
a=window.prompt("Entrez le numéro de la table:","Saisir un entier ici");
document.write("<h2> Execice 2</h2>")
document.write("<h4>La table de multiplication du nombre: "+a+"</h4>")
 document.write("<table border >");
for (let i=1; i<=10; i++)
  {
    document.write("<tr>");
    document.write("<td>"+a+" x "+i+" =</td>");
    document.write("<td>"+a*i+"</td>");
    document.write("</tr>");
 }
 document.write("</table>");



// var a;
//  do{
//     a=prompt("Saisissez un nomre entier");
//  }while(isNaN(a) || a%1!==0);
 
//  document.write("<h4>La table de multiplication du nombre: "+a+"</h4>")
//  document.write("<table border >");

//  for(var i=1;i<=10;i++){
//     document.write("<tr>");
//     document.write("<td>"+a +" x "+i+" =</td>");
//     document.write("<td>"+a*i+"</td>");
//     document.write();
//     document.write("</tr>");
//  }
//  document.write("</table>");