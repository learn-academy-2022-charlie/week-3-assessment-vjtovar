// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// a describe method that lists the name of the function OR naming of the particular test.
// a test/it method, nested within the describe block, that in plain words, describes that the function does.
//an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      
  
// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("lengthArr", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
     // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        expect(lengthArr(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(lengthArr(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})
// FAIL  ./code-challenges.test.js
// lengthArr
//   ✕ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
// ● lengthArr › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
//   ReferenceError: lengthArr is not defined


// b) Create the function that makes the test pass.
// Declare a function named lengthArr
// Assign array as parameter
// Assign variables fib and newArray
// Use for loop to get previous numbers 
// Return array the length of number with Fibonacci sequence

const lengthArr = (array) =>{
let fib = [1, 0]
let newArray = []
for(let i=2; i <= array + 1; i++) {
    fib[i] = fib[i-2] + fib[i-1]
    newArray.push(fib[i])
}
return newArray
}
// PASS  ./code-challenges.test.js
// lengthArr
//   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("oddNum", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
         // Expected output: [-9, 7, 9, 199]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23]
        expect(oddNum(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddNum(fullArr2)).toEqual([-823, 7, 23])
    })
})
// FAIL  ./code-challenges.test.js
// oddNum
//   ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)
// ● oddNum › takes in an array and returns a new array of only odd numbers sorted from least to greatest
//   ReferenceError: oddNum is not defined


// b) Create the function that makes the test pass.
// Declare a function named oddNum
// Assign array as parameter
// Use filter method to iterate through the array 
// Return new array with only odd numbers and sorted least to greatest

const oddNum = (array) => {
    let newArray = array.filter(value => {
        return value % 2 !== 0 && typeof value !== "string" && value !== null && value !== true && value !== false
        })
        return newArray.sort((a, b) => a - b)
    } 
//     PASS  ./code-challenges.test.js
//     oddNum
//       ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)
  
//   Test Suites: 1 passed, 1 total
//   Tests:       1 passed, 1 total



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("sumArray", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        // Excpected output: [2, 6, 51, 60]
        const numbersToAdd2 = [0, 7, -8, 12]
       // Expected output: [0, 7, -1, 11]
        const numbersToAdd3 = []
        // Expected output: []
        expect(sumArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sumArray(numbersToAdd3)).toEqual([])
    })
})
// FAIL  ./code-challenges.test.js
// sumArray
//   ✕ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array (1 ms)
// ● sumArray › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array
//   ReferenceError: sumArray is not defined



// b) Create the function that makes the test pass.
// Declare a function named sumArray
// Assign array as parameter
// Use map method to iterate through the array 
// Return array with accumulating sum

const sumArray = (array) => array.map((sum => value => sum += value)(0))

// PASS  ./code-challenges.test.js
// sumArray
//   ✓ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
    
