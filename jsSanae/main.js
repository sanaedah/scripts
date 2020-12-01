
let numbers=[];
let total =null;
let saisie=null;
let saisieInt=null;
let i=null;
let max=null;
let min=null;
let somme = null;
let moyenne = null;
saisie=prompt('veuillez entrer un nombre : ');
saisieInt=parseInt(saisie);
console.log(saisieInt);
        
if(saisie!=0){
    while(saisie!=0) {  
       
        numbers.push(saisieInt);
        somme = somme+saisieInt;
    saisie=prompt('veuillez entrer un nombre : ');
    saisieInt = parseInt(saisie);
        console.log(saisieInt);
        total++;
    }
    max=numbers[0];
  
    for(let i=1;i<=numbers.length;i++) {
        if(max<numbers[i]){
            max = numbers[i];
        }
    }
    
    min=numbers[0];
    for(let i=1;i<=numbers.length;i++) {

        if(min>numbers[i]) {
            min = numbers[i];
        }  
      
    }
   
    
    moyenne= somme/total;
console.log(total,' nombres saisis \n','Compris entre  ', min, ' et  ', max, '\n Pour une somme de  ', somme, '\n et une moyenne de  ', moyenne);
alert(total+' nombres saisis \n'+'Compris entre  '+ min+ ' et  '+ max+ '\n Pour une somme de  '+ somme+'\n et une moyenne de  '+ moyenne)

}
else {
    console.log('vous n\'avez entrer aucun nombre!!');
    alert('vous n\'avez entrer aucun nombre!')
}