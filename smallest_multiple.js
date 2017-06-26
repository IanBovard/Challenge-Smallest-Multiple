/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
 module.exports = function( num ) {
  if (num ===1){
    return 1;
  }
  let factors = [];
  let result;
  for (let i = 2; i <= num; i++){
    factors.push(i);
  }
  while (!result) {
    let allFactorsPass = true;

    for (let i = 0; i < factors.length ; i++){
      if (num % factors[i] !== 0){
        allFactorsPass = false;
      }
      if (allFactorsPass) {
        result = num;
      }
      else {
        num++;
      }

    }
  }
  return result;
};
console.log(module.exports(10));