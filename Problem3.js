function largestPrimeFactor(n) {
    // Function to check if a number is prime
    // function isPrime(num) {
    //     if (num <= 1) return false;
    //     if (num <= 3) return true;
    //     if (num % 2 === 0 || num % 3 === 0) return false;
    //     for (let i = 5; i * i <= num; i += 6) {
    //         if (num % i === 0 || num % (i + 2) === 0) return false;
    //     }
    //     return true;
    // }

    // Start checking from the smallest prime number
    let maxPrime = -1;

    // Check for the number of 2s that divide n
    while (n % 2 === 0) {
        maxPrime = 2;
        n /= 2;
    }

    // n must be odd at this point, hence skip even numbers
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            maxPrime = i;
            n /= i;
        }
    }

    // This condition is to check if n is a prime number
    // greater than 2
    if (n > 2) {
        maxPrime = n;
    }

    return maxPrime;
}

console.log(largestPrimeFactor(5));