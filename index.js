var x = 67;
//  +prompt("Enter a number", 97);

var counter = 2;
var isPrime = true;
while (counter <= x / 2 && isPrime) {
    if (x % counter == 0) {
        isPrime = false;
        break;
    }
    counter++;
}

if (isPrime) {
    console.log(`${x} is a prime number`);
        
}
else
    console.log(`${x} is not prime (${counter})`);
    