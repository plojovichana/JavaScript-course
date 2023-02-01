function checkForMissingLetter(str) {
    var alp = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < alp.length; i++) {
      if (!str.includes(alp[i])) {
        return "zaboravili ste slovo : " + alp[i];
      }
    }
        return "Sva slova su tu ";
    
  }
  console.log(checkForMissingLetter("abcdf"));
  