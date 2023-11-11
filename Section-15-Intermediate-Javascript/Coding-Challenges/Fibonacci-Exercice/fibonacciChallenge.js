function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆

    //Write your code here:
    var output = [];

    if (n === 1) {
        output.push(0);
    } else if (n === 2) {
        output.push(0, 1);
    } else {
        output = [0, 1];
        for (let i = 2; i < n; i++) {
            let lastNumberIndex = (output.length - 1);
            let lastNumber = output[lastNumberIndex];
            let previousNumber = output[lastNumberIndex - 1];
            let nextNumber = previousNumber + lastNumber;
            output.push(nextNumber);
        }

    }


    console.log(output)






    //Return an array of fibonacci numbers starting from 0.

    //Do NOT change any of the code below 👇
}

fibonacciGenerator(7)

