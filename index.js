// JavaScript Array Methods Part II
//  

// forEach()
// Calls a function for each array element

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function addFive1(arr) {
    let newArray = []
    for (let i = 0; arr.length > i; i += 1) {
        newArray.push(arr[i] + 5)
    }
    return newArray
}

console.log(addFive1(numbers))

// numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function addFive2(arr) {
    let newArray = []
    arr.forEach(num => {
        newArray.push(num + 5)
    })
    return newArray
} 

console.log(addFive2(numbers))


// map() 
// Creates a new array with the result of calling a function for each array element

// numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function addFive3(arr) {
    return arr.map(num => {
        return num + 5
    })
} 

console.log(addFive3(numbers))

let oddNumbersArray = [1, 3, 5, 7, 9, 11, 13, 15]

function timesTwo(arr){
    return arr.map(num => {
        return num * 2 
    })
}

console.log(timesTwo(oddNumbersArray))

// filter()
// Creates a new array with every element in an array that pass a test

let testGrades = [100, 68, 79, 94, 90, 55, 60, 0]

function passingGrade(arr) {
    return arr.filter(grade => {
        return grade >= 65
    })
}

console.log(passingGrade(testGrades))

// testGrades = [100, 68, 79, 94, 90, 55, 60, 0]

function failingGrade(arr) {
    return arr.filter(grade => {
        return grade < 65
    })
}

console.log(failingGrade(testGrades))


// reduce()
// Reduce the values of an array to a single value (going left-to-right)

let allowance = [5, 10, 25, 20, 15]

function oneNum(arr){
    return arr.reduce((count, num) => {
        return count = count + num
    })
}

console.log(oneNum(allowance))
