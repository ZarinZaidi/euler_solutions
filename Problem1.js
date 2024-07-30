// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3Or5(number) {
    let result = 0;

    for (let i = 1; i < number; i++)
        if (i % 3 == 0 || i % 5 == 0) {
            result += i
        }

    return result;
}

multiplesOf3Or5(1000);