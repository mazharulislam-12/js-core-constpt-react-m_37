//1. array destructuring
// const numbers = [42, 65]
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 62];

// const [x, y] = numbers;

// console.log(x,y)

function boxify (num1, num2) {
    const nums = [num1, num2]
    return nums;
}
console.log(boxify(62, 85))