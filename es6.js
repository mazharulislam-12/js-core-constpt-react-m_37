const number = [85, 45, 89,63,32]
const student = {
    name: 'shakib',
    age: 56,
    movies: ['king khan', 'Dhaker mastan']
} 

const about = `MY name is ${student.name}. age og ${student.age} has number ${number[2]}. Also lied movies ${student.movies[0]}`


// 2. arrow function 
const getFiftyFive = () => 55;
const addSixtyFicve = num => num + 65;
const isEven = x => x % 2 == 0;

const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum
}


// spread operator
const numbers = [85, 45, 89,63,32]
const newNumbers = [...numbers];
numbers.push(99)
console.log(newNumbers)
console.log(numbers)

// cate a new array form an older array and add element
const currentNumbers = [...numbers, 55]

console.log(numbers)
console.log(newNumbers)
console.log(currentNumbers)

