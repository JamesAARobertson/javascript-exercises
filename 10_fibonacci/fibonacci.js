const fibonacci = function (nArg) {
if (typeof nArg !== "number") {
    n = parseInt(nArg)
} else {
    n = nArg
}

  // catch first fib number
  if (n == 0) return 0;
  // catch negative numbers
  if (n < 0) return "OOPS";

  //    initialise two variables to keep track of fibonacci numbers. This will also provide 1 for 2nd fib num
  let firstPrev = 1;
  let secondPrev = 0;

  for (i = 2; i <= n; i++) {
    // calculate current number
    let current = firstPrev + secondPrev;
    // update secondPrev to the last fib number
    secondPrev = firstPrev;
    // update firstPrev to current fib number
    firstPrev = current;
  }
  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
