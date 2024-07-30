// By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

function fiboEvenSum(limit) {
    var temp, sum = 0, a = 0, b = 1;
    while (b < limit) {
        temp = a;
        a = b;
        b += temp;
        if ((b & 1) === 0) {
            sum += b;
        }
    }
    return sum;
}