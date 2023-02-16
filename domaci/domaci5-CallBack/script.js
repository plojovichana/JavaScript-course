//http://csbin.io/callbacks

// Challenge 7
function intersection(arrays) {
    if (arrays.length === 0) {
       return [];
     }
   
     return arrays.reduce((acc, prisutniEl) => {
       return acc.filter(element => prisutniEl.includes(element));
     });
   }

    console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
   // should log: [5, 15]