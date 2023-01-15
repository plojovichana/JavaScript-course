//zadatak 1
// var broj = prompt("Unesite neki broj");

// if(isNaN(broj)){
//     console.log("ovo nije broj")
// }else{
//     console.log(broj**2);
// }

// if(typeof broj == "string"){
//     console.log("ovo je string");
// }else{
//     console.log(broj ** 2);
// }

//zadatak 2

// let recenica = "Nakon danasnjeg testa cemo znati ko ce da nastavi sa drugim ciklusom";
// let novarecenica = ""
// for(var i = 0;i<recenica.length - 1;i++){
//     if(recenica[i] === "a" || recenica[i] === "e" || i ==="i" || i ==="o" || i === 'u'){
        
//         novarecenica+=recenica[i].toUpperCase();
//     }
//     else{
//         novarecenica+=recenica[i];
//     }
// }
// console.log(novarecenica += ".")

// zadatak 3

// var brojlatica = prompt("unesite broj latica:");
// var niz= ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
// console.log(niz[brojlatica % 6]);

//zadatak 4

// var niz = [1,2,2];
// let rezultat=0 ;
// for(var i = 0;i<niz.length;i++){
//     rezultat+= niz[i]**2;
// }
// console.log(rezultat);

//zadatak 5

var niz = ["Alex", "Jacob", "Anes","amil"];
//*1
// if (niz.length === 0){
//     console.log("no one likes this");
// }
// else if(niz.length === 1){
//     console.log(niz[0],"like this");
// }
// else if(niz.length === 2){
//     console.log(niz[0],niz[1],"like this");
// }

// else if(niz.length === 3 || niz.length > 3){
//     console.log(niz[0],niz[1],"and",(niz.length - 2),"others like this")
// }

//*2
switch(niz.length) {
    case 0:
        console.log("no one likes this");
      break;
    case 1:
        console.log(niz[0],"like this");
      break;
    case 2:
        console.log(niz[0],niz[1],"like this");
    default:
        console.log(niz[0],niz[1],"and",(niz.length - 2),"others like this")
  }
//zadatak 6

