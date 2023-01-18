// function najduzaRec(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var najduzarec;
//     str.forEach(function(str) {
//         if (longest < str.length) {
//             longest = str.length;
//             najduzarec = str;
//         }
//     });
//     return najduzarec;
// }
// console.log("recenica :   Ja volim programiranje")
// console.log("Najduza rec u recenici je:  ",najduzaRec("Ja volim programiranje"));

// function getLongestWord(str){
//     let words = str.split(' ');
//     let maxLength = 0;
//     let longestWord = '';
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//         longestWord = words[i];
//       }
//     }
//     console.log(longestWord)
  
//   }
// getLongestWord("Ja volim programiranje")


str = "Ja volim programiranje";
    var reci = str.split(' ');
    var maxLength = 0;
    var najduzarec = '';
  
    for (let i = 0; i < reci.length; i++) {
      if (reci[i].length > maxLength) {
        maxLength = reci[i].length;
        najduzarec = reci[i];
      }
    }
    console.log(najduzarec)
  