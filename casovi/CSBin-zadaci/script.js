//8.

// function union(arrays) {
//     return arrays.reduce(function(result, currentArray) { // primjenjuje reduce() na arrays, result je trenutni rezultat unije, currentArray je trenutni niz u arrays koji se uspoređuje s result
//       currentArray.forEach(function(item) { // prolazi kroz svaki element u trenutnom nizu
//         if (result.indexOf(item) === -1) { // provjerava da li se element već nalazi u rezultatu; ako se ne nalazi, dodaje se u niz
//           result.push(item); // dodaje element u niz
//         }
//       });
//       return result; // vraća novi rezultat unije nizova
//     }, []); // početni rezultat je prazan niz
//   }
//   console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]


//9.

   
  function objOfMatches(arr1, arr2, callback) {
    // koristimo reduce() metodu nad arr1, uzimamo početni akumulator kao prazan objekt {}
    return arr1.reduce(function(acc, val, index) {
      // provjeravamo da li callback(val) vraća vrijednost koja odgovara arr2[index]
      if (callback(val) === arr2[index]) {
        // ako se poklapaju, dodajemo ključ/vrijednost par u objekt acc
        acc[val] = arr2[index];
      }
      // vraćamo ažurirani akumulator
      return acc;
    }, {});
  }
    console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
  // should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }
 
 
  // 10.


  function multiMap(arr, callbacks) {
    // kreiramo prazan objekt za pohranjivanje rezultata
    let result = {};
  
    // prolazimo kroz svaki element u nizu arr koristeći forEach() metodu
    arr.forEach(function(value) {
      // dodajemo novi ključ u objekt result koji odgovara trenutnom elementu iz niza arr
      result[value] = callbacks.map(function(cb) {
        // za svaku povratnu funkciju (callback) iz niza callbacks, pozivamo je sa trenutnim elementom iz niza arr
        return cb(value);
      });
    });
  
    // vraćamo objekt result
    return result;
  }
  
console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
//should log: 
//{ catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], 
//glue: ['GLUE', 'Glue', 'glueglue'], 
//beer: ['BEER', 'Beer', 'beerbeer'] }



// Challenge 19
function rating(arrOfFuncs, value) {
	let count = 0;
    for (let i = 0; i < arrOfFuncs.length; i++) {
        if (arrOfFuncs[i](value)) {
            count++;
        }
    }
    return count / arrOfFuncs.length * 100;
}

// /*** Uncomment these to check your work! ***/
const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 


// Challenge 20
function pipe(arrOfFuncs, value) {
  let result = value;
      for (let i = 0; i < arrOfFuncs.length; i++) {
          result = arrOfFuncs[i](result);
      }
      return result;
  }
  
  // /*** Uncomment these to check your work! ***/
  const capitalize = str => str.toUpperCase();
  const addLowerCase = str => str + str.toLowerCase();
  const repeat = str => str + str;
  const capAddlowRepeat = [capitalize, addLowerCase, repeat];
  console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


  