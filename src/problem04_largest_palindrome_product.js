/**
 * Problem 4: Largest Palindrome Product
 *
 * A palindromic number reads the same forwards and backwards.
 *
 * Example:
 * The largest palindrome made from the product of two 2-digit numbers is:
 * 9009 = 91 × 99
 *
 * Find the largest palindrome made from the product
 * of two n-digit numbers.
 */

/* =========================================================
 * ✅ PRIMARY APPROACH (OPTIMIZED BRUTE FORCE)
 * =========================================================
 *
 * Approach:
 * - Generate all products of two n-digit numbers.
 * - Check whether the product is a palindrome.
 * - Track the maximum palindrome found.
 * 
 * Optimizations applied:
 * 1. Iterate from largest to smallest numbers so that large palindromes are found earlier.
 * 2. Start inner loop from "i" to avoid duplicate pairs (e.g., (91 x 99) and (99 x 91)).
 * 3. Break early when the product is already smaller than the current maximum
 *    palindrome, since further iterations will only decrease the product.
 * 
 * 
 * Time Complexity:
 * - worst case: O(10^(2n))
 * - Practical performance is significantly better due to pruning.
 * 
 * Space Complexity:
 * - O(1)
 */
function largestPalindromeProduct(n){

    let maxPalindrome = 0;

    const upper = Math.pow(10, n) - 1;
    const lower = Math.pow(10, n-1);

    for(let i = upper; i >= lower; i--){
        for(let j = i ; j >= lower; j--){
            const product = i * j;

            // Pruning: no need to check smaller products
            if(product <= maxPalindrome){
                break;
            }
            if(isPalindrome(product)){
                maxPalindrome = product;
            }
        }
    }
    return maxPalindrome;
}


function isPalindrome(n){
    const s = n.toString();
    return s === s.split("").reverse().join("");


}


/* =========================================================
 * 🚀 ALTERNATIVE APPROACH: GENERATE PALINDROMES DIRECTLY
 * =========================================================
 *
 * Key Idea:
 * - The largest palindrome will be found first if we generate 
 *   palindromes in descending order.
 * - Instead of multiplying every pair, we:
 *      1. Constuct palindromes directly
 *      2. Check it they can be factored into two n-digit numbers
 * 
 * This drastically reduces the search space.
 * 
 * Time Complexity:
 * - Palindrome generation: O(10^n)
 * - Factor checks: O(10^n) in worst case
 * - Much faster in practice than brute force
 * 
 * Space Complexity: O(1)
 * 
 */

function largestPalindromeProduct(n){
    const upper = Math.pow(10, n) - 1;
    const lower = Math.pow(10, n - 1);

    for(let left = upper; left >= lower; left--){
        const palindrome = parseInt(left.toString() + left.toString().split('').reverse().join(""));

        for(let divisor = upper; divisor >= lower; divisor--){
            if(palindrome % divisor === 0){
                const quotient  = palindrome / divisor;
                if(quotient >= lower && quotient <= upper){
                    return palindrome;
                }
            }
        }

       
    }
     return -1;
}

/* =========================================================
 * ▶️ EXECUTION / VERIFICATION
 * =========================================================
 */

console.log(largestPalindromeProduct(2)); // 9009
console.log(largestPalindromeProduct(3)); // 906609