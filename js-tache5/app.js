// Les mois 
let tab = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', ' juillet'];

// Retirer le dernière valeur du tableau moi
let dell = tab.pop()
document.write("-on a retirer le dernier element du tableau q'est " + dell + "<br>")

// Ajouter la valeur août à la fin du tableau
let fors = tab.push('Aout')
document.write('-on Ajouter la valeur août à la fin du tableau ' + "<br>")

//Remplacer la valeur ‘février’ par ‘Février’
tab[1]="Février";
document.write('-on remplacer la valeur ‘février’ par ‘Février’ ' + "<br>")

// Afficher les valeurs du tableau en utilisant la méthode document.write 
document.write("Afficher les valeurs du tableau en utilisant la méthode document.write " + '</br>')
for(let i in tab){
    document.write (tab[i]+'</br>');
}

// Afficher le nombre de valeurs du tableau en utilisant la méthode document.write 
document.write( "le nombre de valeurs du tableau est " + tab.length + '</br> ');

//Afficher la troisième valeur du tableau
document.write( "La troisième élément du tableau est " + tab[2] );