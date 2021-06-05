// JavaScript Array Methods Part I
//  

// filter()
// Creates a new array with every element in an array that pass a test

let testGrades = [100, 68, 79, 94, 90, 55, 60, 0]

function passingGrade(arr) {
    return arr.filter(grade => {
        return grade >= 65
    })
}

console.log(passingGrade(testGrades))

function failingGrade(arr) {
    return arr.filter(grade => {
        return grade <= 65
    })
}

console.log(failingGrade(testGrades))


// forEach()
// Calls a function for each array element

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function addFive(arr) {
    let newArray = []
    arr.forEach(num => {
        newArray.push(num + 5)
    })
    return newArray
}

console.log(addFive(numbers))

// map() 
// Creates a new array with the result of calling a function for each array element

let numbersArray = [1, 3, 5, 7, 9, 11, 13]

function timesTwo(arr){
    return arr.map(num => {
        return num * 2 
    })
}

console.log(timesTwo(numbersArray))

// reduce()
// Reduce the values of an array to a single value (going left-to-right)

let nums = [5, 10, 15, 20, 25]

function oneNum(arr){
    return arr.reduce((total, num) => {
        return total = total + num
    })
}

console.log(oneNum(nums))
