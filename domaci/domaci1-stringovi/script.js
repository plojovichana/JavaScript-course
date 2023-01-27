// Domaći
//naći najdužu rec u string-u. Npr ako je string 'Ja volim programiranje' 
// Rezultat treba da bude 'programiranje'

//

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
  