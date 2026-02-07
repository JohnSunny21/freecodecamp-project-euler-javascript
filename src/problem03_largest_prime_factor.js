/**
 * Problem 3: Largest Prime Factor
 *
 * The prime factors of 13195 are:
 * 5, 7, 13, and 29
 *
 * Find the largest prime factor of the given number.
 *
 *
 */

/* =========================================================
 * ❌ INITIAL APPROACH (SUBOPTIMAL / LEARNING VERSION)
 * =========================================================
 *
 * This approch attempts to:
 * - Iterate up to sqrt(number)
 * - Check both divisor and co-factor for primality
 * - Store all prime factors in an arraay.
 *
 * Issues with this approach:
 * 1. The number is never reduced during factorization.
 * 2. Repeated primality checks are expensive and unnecessary.
 * 3. Uses extra memory to store all factors.
 * 4. Does not scale well for large inputs.
 *
 * This version is kept intentionally for learning purposes.
 */

function largestPrimeFactor_Initial(number) {
  const prime_factors = [];

  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0 && isPrime(i)) {
      prime_factors.push(i);
    }

    const coFactor = number / i;
    if (number % i === 0 && isPrime(coFactor)) {
      prime_factors.push(coFactor);
    }
  }

  if (isPrime(number)) {
    prime_factors.push(number);
  }

  return Math.max(...prime_factors);
}

function isPrime(n) {
  if (n < 2) return false;
  if (n % 2 === 0 && n != 2) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/* =========================================================
 * ✅ CORRECT FACTORIZATION APPROACH (PRODUCTION-READY)
 * =========================================================
 *
 * Approach:
 * - Repeatedly divide the number by the smallest possible factor.
 * - Remove factor occurrences as they are found.
 * - Once the number is reduced, the remaining value (if > 1)
 * - is the largest prime factor.
 *
 * Key Insight:
 * - If a factor divides the number, divide it out completely.
 * - No explicit primality check is needed.
 *
 * Time complexity: O(sqrt(n))
 * Space complexity: O(1)
 *
 *
 */

function largestPrimeFactor(number) {
  let n = number;
  let largestFactor = 1;

  // Remove all the factors of 2
  while (n % 2 == 0) {
    largestFactor = 2;
    n = n / 2;
  }

  // check odd factors only
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      largestFactor = i;
      n = n / i;
    }
  }

  // if n is still greater than 1, it it prime
  if (n > 1) {
    largestFactor = n;
  }

  return largestFactor;
}

console.log(largestPrimeFactor_Initial(13195));
console.log(largestPrimeFactor_Initial(600851475143));


console.log(largestPrimeFactor(13195));        // 29
console.log(largestPrimeFactor(600851475143)); // 6857