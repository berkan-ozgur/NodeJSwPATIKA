const arguments = process.argv.slice(2)

function showPrimeNumbers(lowNumber, highNumber) {
    for (let i = lowNumber; i <= highNumber; i++) {
        let isPrime = true;
        for (let k = 2; k <= i; k++) {
            if (i % k === 0 && k !== i) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(i)
        }
    }
}

showPrimeNumbers(arguments[0], arguments[1]);