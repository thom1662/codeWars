//do..while loop will always run at least once because it runs the loop before checking to see if the while test passes.
//The while loop will test your condition before it runs the loop.

function padIt(str, n) {
  let currentString = str;
  let counter = 0;
  while (counter < n) {
    if (counter % 2 === 0) { //no remainder == even num
      currentString = '*' + currentString;
    } else {
      currentString = currentString + '*';
    }
    counter++;
  }
  return currentString;
}
//stars alternate side based on the COUNTER being odd or even, rather than n at the beginning



//another solution from comments:


function padIt2(str, n) {
  while (n > 0) {
    if (n % 2 === 0) {
      str = str + '*';
    } else {
      str = '*' + str;
    }
    n--;
  }
  return str;
}

//uses n as a counter, to count down rather than up, alternating n between odd and even
//no additional variables or using string methods (vs my initial idea to use padStart/End)
