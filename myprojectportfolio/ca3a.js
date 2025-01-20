function cheking(num1, num2) {
    return num1 === 8 || num2 === 8 || num1 + num2 === 8 || Mth(num1 - num2) === 8;
}

const num1 = 5;
const num2 = 3;
console.log(cheaking(num1, num2));
console.log("one of them isdifferent ")