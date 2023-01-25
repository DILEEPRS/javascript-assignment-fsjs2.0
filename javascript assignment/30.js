// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.


// take the operator input
const operator = "+";

// take the operand input
const number1 = 30
const number2 = 20

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);