
// 23. Write a program to check that the num given by the user is a prime num or not.


let num = 18;

isPrime = true;


if (num == 1){

    console.log("1 is neither prime nor composite number.");

}

else if (num > 1) {

    // looping through 2 to num-1
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is a not prime number`);
    }
}

// check if num is less than 1
else {
    console.log("The num is not a prime num.");
}