// let n = 10;
// while(n>0){
//     console.log(n);
//     n--;
// }



// let n = 1;

// while(n<11){
//     console.log(n);
//     n++;
// }


// let n = 1;
// while(true){
//     console.log(n);
//     n++
// }



// n = 1;
// do{
//     console.log(n);
//     n++;
// }
// while(n<10);

//1.

// function provera(str){
//     if (str.length % 2 === 0){
//         return (str.slice(0,str.length/2) +'|' + str.slice(str.length/2,str.length));
//     }
//     else{
//         return (str.slice(0,str.length/2) +'|' + str.slice((str.length/2 + 1), str.length));
//     }
// }
// console.log(provera("abcd"));

//2.

//const a = "hello world";
// console.log(a.split("").join("."));

// function separator (str,sep){
//     return(str.split("").join(sep));
// }
// console.log(separator("Hello World","."))

//3.

// n = 5;
// let proizvod = 1;

// function faktorijal (br){
//     while(br>0){
//     proizvod *= br;
//     br--;
// }
// return proizvod;
// }

// console.log(faktorijal(n));

//4.

// n = 20;
// suma = 0;
// function sabiranje(br){
//     while(br>0){
//         if(br % 2 === 0 ){
//             suma += br;
//         }
//     }
// }
// console.log(sabiranje(n));

//5.

// let niz = [1,2,3,4,5,6];
// let spojBrojeve= niz.reduce((prethodna,trenutna) => prethodna+trenutna,"");
// console.log(spojBrojeve);

//6.


// function animal (obj){
//     return "This"+" "+ obj.color+" " + obj.name+" "+"has"+" "+obj.legs+" "+"legs";
// }
// const zivotinja = {
//     name : "dog",
//     color : "white",
//     legs : 4,
// }
// console.log(animal(zivotinja))