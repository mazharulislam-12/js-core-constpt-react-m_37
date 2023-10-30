const products = [
    {name: 'laptop', price: 350000, brand: 'lenovo', color: 'silver'},
    {name: 'Phone', price: 7820, brand: 'I Phone', color: 'golden'},
    {name: 'Watch', price: 56000, brand: 'apple', color: 'black'},
];

// 1. map
const brands = products.map(product => product.brand)
console.log(brands)

const prices = products.map(product => product.price)
console.log(prices)

const name = products.map(product => product.name)
console.log(name)

const color = products.map(product => product.color)
console.log(color)

//2. for Each
products.forEach(product => console.log(product.color))
products.forEach(product => console.log(product.name))

// products,forEach(product =>{

// })

// 3. filter 
const cheap = products.filter(product => product.price <= 20000);
// console.log(cheap)

const spectficName = products.filter(p => p.name.includes('n'))
// console.log(spectficName)

// 4. find
const special = products.find(p => p.name.find.includes('n'))
console.log(special)


