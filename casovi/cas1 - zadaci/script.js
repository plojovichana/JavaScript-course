// zadatak 1

//zadatak:
// Traziti od korisnika unos nekog realnog broja.
// Nakon toga ispisati u konzoli kvadrat tog broja
// (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu
// vrednost).

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

// zadatak 2

//zadatak:
// Na osnovu date recenice napraviti i ispisati novu recenicu tako da:
//     (i) se svi samoglasnici pretvore u velika slova;
//     (ii) na kraju se doda ‘.’
//     (iii) ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”

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

//zadatak:
// Da li se secate vremena kada bi devojcice uzimale cvet i kidale njegove latice,
// izgovarajuci svaku od sledecih fraza, svaki put kada bi kidale latucy govorile bi:

// I love you
// a little
// a lot
// passionately
// madly
// not at all

// Napraviti program preko kojeg cete uneti broj latica i vratiti koja se fraza dobija.

// var brojlatica = prompt("unesite broj latica:");
// var niz= ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
// console.log(niz[brojlatica % 6]);

// zadatak 4

//zadatak:
// Napisite program kvadratnog zbira tako da kvadrira svaki broj, a zatim sabere
// rezultat zajedno.

// npr. [1,2,2] trebalo bi da vrati 9 jer je 1^2+2^2+2^2=9.

// var niz = [1,2,2];
// let rezultat=0 ;
// for(var i = 0;i<niz.length;i++){
//     rezultat+= niz[i]**2;
// }
// console.log(rezultat);

// zadatak 5

//zadatak:
// Verovatno znate sistem 'like' sa Facebook i drugih stranica.
//  Ljudi mogu da lajkuju
// postove na blogu, slike ili druge stvari.
// Zelimo da kreiramo tekst koji treba da bude prikazan
// pored takve stavke.

// Imamo niz koji sadrzi imena ljudi kojima se neka stavka svidja.
// Treba da vrati sledece:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max",'Amil','Anes']  -->  "Alex, Jacob and 4  others like this"

// var niz = ["Alex", "Jacob", "Anes","amil"];

// *1
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

// *2
// switch(niz.length) {
//     case 0:
//         console.log("no one likes this");
//       break;
//     case 1:
//         console.log(niz[0],"like this");
//       break;
//     case 2:
//         console.log(niz[0],niz[1],"like this");
//     default:
//         console.log(niz[0],niz[1],"and",(niz.length - 2),"others like this")
//   }

