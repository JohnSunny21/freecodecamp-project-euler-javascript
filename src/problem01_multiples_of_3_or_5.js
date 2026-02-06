/**
 * Problem 1: Multiples of 3 or 5
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, 
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.

 * Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
 * 
 *
 * Solution 
 * 
 * Given a number, return the sum of all natural numbers
 * below it that are divisible by 3 or 5.
 * 
 * Example:
 * multipleOf3Or5(10) -> 23
 * 
 * Approach:
 * Iterate from 1 to (number - 1) and accumulate values.
 * divisible by 3 or 5.
 * 
 * Time Complexity: O(n)
 * Space complexity: O(1)
 */

function multiplesOf3Or5(limit) {
  if (limit <= 0) return 0;

  let sum = 0;

  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}



/**
 * Optimized Solution (Mathematical Approach)
 *
 * Uses arithmetic series formula to compute the sum
 * without iterating through all numbers.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 */

function multiplesOf3Or5Math(limit) {
  if (limit <= 0) return 0;

  const sumOfMultiples = (divisor) => {
    const count = Math.floor((limit - 1) / divisor);
    return (divisor * (count * (count + 1))) / 2;
  };

  return sumOfMultiples(3) + sumOfMultiples(5) - sumOfMultiples(15);
}


// Execution
const example = multiplesOf3Or5(10);
console.log(example);

const result = multiplesOf3Or5(1000);
console.log(result);


console.log(multiplesOf3Or5Math(10));
console.log(multiplesOf3Or5Math(1000));
