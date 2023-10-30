//1.  how to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'winter';
season = 'rainy'

//2.  6 basic condition >, <, ===, !==, <=, >=
// multiple conditions: all true &&, only one true ||

if(fatherName ==='Arnold' || season === 'winter'){

}

else if (fatherName === 'arnold'){

}
else{
    console.log('no match');
}

// 3. array 
//index
//length, push

const number = [85, 45, 89,63,32]
number[0]= 83;


// 4. loop
for(let i=0 ; i< number.length ;i++){
    const number = number[i]
    console.log(number)
}

// 5. function 
function multiple = (num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiple(56, 89)


// 6. object
// 3 ways to access property by name
const student = {
    name: 'shakib',
    age: 56,
    movies: ['king khan', 'Dhaker mastan']
}

const myVariable = 'age';

console.log(student.age) 
console.log(student['age'])
console.log(student[myVariable])






