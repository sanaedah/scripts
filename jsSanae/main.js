
let numbers=[];
let total =null;
let saisie=null;
let saisieInt=null;
let i=null;
let max=null;
let min=null;
let somme=null;
let moyenne=null;

saisie=prompt('veuillez entrer un nombre : ');
    saisieInt=parseInt(saisie);
        console.log(saisieInt);
        if(saisie!=0){
    while(saisie!=0) {  
        total=total+1;
        numbers[total]=saisieInt;
        numbers.push(saisieInt);
        somme = somme+saisieInt;
        moyenne= somme/total;
    saisie=prompt('veuillez entrer un nombre : ');
    saisieInt=parseInt(saisie);
        console.log(saisieInt);
    }  ;
    max=numbers[1];
    min=numbers[1];
    for(let i=0;i<=numbers.length-1;i++) {
        if(max<numbers[i]){
            max = numbers[i];
        }
        if(min>numbers[i]) {
            min = numbers[i];
        }  
      
     
    }
    
   
console.log(total,' nombres saisis \n','Compris entre  ', min, ' et  ', max, '\n Pour une somme de  ', somme, '\n et une moyenne de  ', moyenne);
alert(total+' nombres saisis \n'+'Compris entre  '+ min+ ' et  '+ max+ '\n Pour une somme de  '+ somme+'\n et une moyenne de  '+ moyenne)
}
else {
    console.log('vous n\'avez entrer aucun nombre!!');
    alert('vous n\'avez entrer aucun nombre!')
}