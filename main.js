var tab = [2, 6, 3, 4, 9, 10];




for (let i = 0; i < tab.length; i++) {

    resultat = [];
    for (let i = 0; i < tab.length; i++) {
        resultat.push(tab[i] * 2);
    }
    
   
}

console.log(resultat);


//affiche le dernier element d'un tableau
function showlast(tableau) {
  
    return tableau[tableau.length - 1];

}

console.log(showlast(tab));  


//reverse 
for (let i = tab.length - 1; i >= 0; i--) {
    resultat = [];
    for (let i = tab.length - 1; i >= 0; i--) {
        resultat.push(tab[i]);
    }
    
}

console.log(resultat);




