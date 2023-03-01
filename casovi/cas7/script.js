// let counter = 0;
// function add(){
//     let counter = 0;
//     counter+=1
// }
// add();
// add();


//

// function add (){
//     let counter = 0;
//     function plus(){
//         counter +=1;
//     }
//     return plus();
// }

// let brojac = add();

// brojac();
// brojac();
// brojac();

// let novibrojac = add();
// novibrojac();

//

// //IIEF
// (function(){
//     let counter = 0;
//     return function(){
//         counter +=1;
//         return counter;
//     }
// })()

//

function izracunaj(x){
    function pomnozi(y){
        return x * y;
    }
    return pomnozi;
}

let rezultat = izracunaj(2);
rezultat(3);
