// By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

function fiboEvenSum(limit) {
    // temp is a temporary variable for swapping values
    // sum will hold the sum of even Fibonacci numbers
    // a and b are the first two numbers in the Fibonacci sequence
    var temp, sum = 0, a = 0, b = 1;


    // Continue generating Fibonacci numbers until the current number (b) exceeds the limit
    while (b < limit) {
        // Save the current value of 'a' in 'temp'
        temp = a;

        // Move 'a' to the next number in the sequence (which is the current 'b')
        a = b;

        // Calculate the next Fibonacci number by adding 'temp' and 'b'
        b += temp;

        // Check if the new Fibonacci number is even
        if ((b & 1) === 0) {
            // If it is even, add it to the sum
            sum += b;
        }
    }
    // Return the sum of even Fibonacci numbers that do not exceed the limit
    return sum;
}