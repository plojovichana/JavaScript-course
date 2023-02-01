const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
const words = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
function filter_Geese(str, geese) {
    return str.filter(string => !geese.includes(string));
  }

  const filtriraneReci = filter_Geese(words, geese);
  console.log(filtriraneReci); 