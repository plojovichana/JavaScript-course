

// Challenge 1
function addTwo(num) {
	return num+2
}

// To check if you've completed it, uncomment these console.logs!
 console.log(addTwo(3));
 console.log(addTwo(10));


// Challenge 2
function addS(word) {
 return word + "s"
}

// uncomment these to check your work
console.log(addS('pizza'));
 console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  const newArr=[];
  for(let i = 0; i < array.length;i++){
    newArr.push(callback(array[i]));
  }
return newArr;
}

 console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for(let i = 0;i<array.length;i++){
    callback(array[i]);
  }

}

// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
  const newArray = [];
  forEach(array,(num)=>newArray.push(callback(num)));
  return newArray;
}


 console.log(mapWith([1, 2, 3], addTwo));

// Challenge 6
function reduce(array, callback, initialValue) {
	for(let i = 0; i < array.length; i ++){
    initialValue = callback(initialValue, array[i]);
    return initialValue
  }
}
