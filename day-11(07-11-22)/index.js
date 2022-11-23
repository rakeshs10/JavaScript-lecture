// How to create an empty array

// Using Array constructor
// // // // // // // // // // // // // // // // const arr = Array()
// // // // // // // // // // // // // // // // // or
// // // // // // // // // // // // // // // // // let arr = new Array()
// // // // // // // // // // // // // // // // console.log(arr) // []


// Using square brackets([])
// // // // // // // // // // // // // // // const arr = []
// // // // // // // // // // // // // // // console.log(arr)    //[]

// How to create an array with values

// // // // // // // // // // // // // // const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// // // // // // // // // // // // // const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits

// // // // // // // // // // // // // // // Print the array and its length

// // // // // // // // // // // // // // console.log('Numbers:', numbers)
// // // // // // // // // // // // // // console.log('Number of numbers:', numbers.length)

// // // // // // // // // // // // // console.log('Fruits:', fruits)
// // // // // // // // // // // // // console.log('Number of fruits:', fruits.length)

// Array can have items of different data types
// // // // // // // // // // // // const arr = [
// // // // // // // // // // // //     'Asabeneh',
// // // // // // // // // // // //     250,
// // // // // // // // // // // //     true,
// // // // // // // // // // // //     { country: 'Finland', city: 'Helsinki' },
// // // // // // // // // // // //     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// // // // // // // // // // // // ] // arr containing different data types
// // // // // // // // // // // // console.log(arr);

// Creating an array using split-----------------

// // // // // // // // // // // let js = 'JavaScript'
// // // // // // // // // // // const charsInJavaScript = js.split('')

// // // // // // // // // // // console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// // // // // // // // // // // let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// // // // // // // // // // // const companies = companiesString.split(',')

// // // // // // // // // // // console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// // // // // // // // // // // let txt =
// // // // // // // // // // //   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// // // // // // // // // // // const words = txt.split(' ')

// // // // // // // // // // // console.log(words)
// // // // // // // // // // // // the text has special characters think how you can just get only the words
// // // // // // // // // // // // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]


// Accessing array items using index---------------------

// // // // // // // // // // const fruits = ['banana', 'orange', 'mango', 'lemon']
// // // // // // // // // // let firstFruit = fruits[0] // we are accessing the first item using its index

// // // // // // // // // // console.log(firstFruit) // banana

// // // // // // // // // // let lastFruit = fruits[3]
// // // // // // // // // // console.log(fruits[2]);
// // // // // // // // // // console.log(lastFruit) // lemon
// // // // // // // // // // // Last index can be calculated as follows

// // // // // // // // // // let lastIndex = fruits.length - 1
// // // // // // // // // // lastFruit = fruits[lastIndex]

// // // // // // // // // // console.log(lastFruit)  // lemon

// Modifying array element----------------------------------------------
// // // // // // // // // const numbers = [1, 2, 3, 4, 5]
// // // // // // // // // numbers[0] = 10      // changing 1 at index 0 to 10
// // // // // // // // // numbers[1] = 20      // changing  2 at index 1 to 20

// // // // // // // // // console.log(numbers) // [10, 20, 3, 4, 5]

// // // // // // // // // const countries = [
// // // // // // // // //   'Albania',
// // // // // // // // //   'Bolivia',
// // // // // // // // //   'Canada',
// // // // // // // // //   'Denmark',
// // // // // // // // //   'Ethiopia',
// // // // // // // // //   'Finland',
// // // // // // // // //   'Germany',
// // // // // // // // //   'Hungary',
// // // // // // // // //   'Ireland',
// // // // // // // // //   'Japan',
// // // // // // // // //   'Kenya'
// // // // // // // // // ]

// // // // // // // // // countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
// // // // // // // // // let lastIndex = countries.length - 1
// // // // // // // // // countries[lastIndex] = 'Korea' // Replacing Kenya by Korea

// // // // // // // // // console.log(countries)
// // // // // // // // // //["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]

// Methods to manipulate array-----------------------------------------------------

// Array Constructor..........................

// // // // // // // // const arr = Array() // creates an an empty array
// // // // // // // // console.log(arr)

// // // // // // // // const eightEmptyValues = Array(8) // it creates eight empty values
// // // // // // // // console.log(eightEmptyValues) // [empty x 8]


// Creating static values with fill--------------------
// // // // // // // const arr = Array() // creates an an empty array
// // // // // // // console.log(arr)

// // // // // // // const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
// // // // // // // console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

// // // // // // // const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
// // // // // // // console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

// // // // // // // const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
// // // // // // // console.log(four4values) // [4, 4, 4, 4]

// Concatenating array using concat------------------------------------------------
// // // // // // // const firstList = [1, 2, 3]
// // // // // // // const secondList = [4, 5, 6]
// // // // // // // const thirdList = firstList.concat(secondList)

// // // // // // // console.log(thirdList) // [1, 2, 3, 4, 5, 6]
// // // // // // // const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
// // // // // // // const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
// // // // // // // const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

// // // // // // // console.log(fruitsAndVegetables)
// // // // // // // ["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]


// Getting array length-----------------------------
// // // // // // const numbers = [1, 2, 3, 4, 5]
// // // // // // console.log(numbers.length) // -> 5 is the size of the array



// Getting index an element in arr array-------------------------
// // // // // const numbers = [1, 2, 3, 4, 5]

// // // // // console.log(numbers.indexOf(5)) // -> 4
// // // // // console.log(numbers.indexOf(0)) // -> -1
// // // // // console.log(numbers.indexOf(1)) // -> 0
// // // // // console.log(numbers.indexOf(6)) // -> -1



// Check an element if it exist in an array......................................

// Check items in a list--------------------------
// // // // const fruits = ['banana', 'orange', 'mango', 'lemon']
// // // // let index = fruits.indexOf('banana')  // 0

// // // // if(index === -1){
// // // //    console.log('This fruit does not exist in the array')  
// // // // } else {
// // // //     console.log('This fruit does exist in the array')
// // // // }
// // // // // This fruit does exist in the array




// Getting last index of an element in array----------------------------------
// // // const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

// // // console.log(numbers.lastIndexOf(2)) // 7
// // // console.log(numbers.lastIndexOf(0)) // -1
// // // console.log(numbers.lastIndexOf(1)) //  6

// // const numbers = [1, 2, 3, 4, 5]

// // console.log(numbers.includes(5)) // true
// // console.log(numbers.includes(0)) // false
// // console.log(numbers.includes(1)) // true
// // console.log(numbers.includes(6)) // false


// Checking array----------------------
// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers)) // true

// const number = 100
// console.log(Array.isArray(number)) // false

// Converting array to string-----------------------------
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook







