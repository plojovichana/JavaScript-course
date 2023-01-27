// Domaci
// Dat je niz brojeva. Proveriti da li je dati niz pivot. 
// Pivot je niz gde je suma svih brojeva sa leve strane jednak zbiru brojeva sa desne

//

const niz = prompt("Unesite niz : ");
function provera(arr) {
  let LevaStr = 0;
  let DesnaStr = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    LevaStr += arr[i];
    DesnaStr += arr[arr.length - 1 - i];
  }
  if (LevaStr === DesnaStr) {
    return "Niz je pivot";
  }
  return "Niz nije pivot";
}
console.log(provera(niz));