
//solution for 2 arrays, sending just two parameters:
//reduce to get the sum of the array, add those together

function arrayPlusArraySimple(arr1, arr2) {
  arr1 = arr1.reduce((sum, current) => sum + current, 0);
  arr2 = arr2.reduce((sum, current) => sum + current, 0);
  return arr1 + arr2;
}

console.log(arrayPlusArraySimple([1, 2, 3], [4, 5, 6])); //21


//transform both arrays into one, reduce that
const arrayAdditionBetter = (arr1, arr2) => arr1.concat(arr2).reduce((sum, current) => sum + current, 0);

console.log(arrayAdditionBetter([12, 1, 4], [45, 56, 100])); //218


//solution destructuring arguments into one bigger array (from comments):

function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}


//solution for n arrays, sending n parameters:
// ...arrays is rest parameter, which will be an any number of arrays
//uses two reduces, one to sum the inner arrays, and the other to sum the outer array, initial value both 0

function arrayPlusManyArray(...arrays) {
  return arrays.reduce((sum, current) => sum + current.reduce((sum, current) => sum + current, 0), 0);
}

console.log(arrayPlusManyArray([1, 2, 3], [4, 5, 6], [7, 8, 9])); //45