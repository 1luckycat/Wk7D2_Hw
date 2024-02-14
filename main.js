//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function yummy(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if (Array.isArray(value)) {
            console.log(`${key}: `)
            value.forEach(food => console.log(food))
        } else {
            console.log(`${key}: ${value}`)
        }
    }
}
yummy(person3)



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        console.log(this.printInfo())
    }

    printInfo = () => {
        return `My name is ${this.name} and I am ${this.age}.`
    }

    addAge = (num = 1) => {
        this.age = this.age + num
        return this.age
    }
}

let human = new Person("Bob", 30)
let human2 = new Person("Anne", 25)
console.log(human.addAge())
console.log(human.addAge(3))




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function stringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve(str)
        } else {
            reject(str)
        }
    })
}

stringLength('aaaaaaaaaah')
    .then((big) => {
        console.log(`Big word`)
    })
    .catch((smol) => {
        console.log(`Small word`)
    })




// ================= CODEWARS #1 ================= //
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.


function squared(num) {
    numString = num.toString()
    listy =[]
    for (const i in numString) {
        listy.push(numString[i]**2)
    }

    return console.log(listy.join(""))
}

squared(9119)
squared(765)


// ================= CODEWARS #2 ===================== //
// In this kata you will create a function that takes a list of non-negative integers and strings and returns 
// a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function numOnly(array) {
    return array.filter(i => typeof i != "string")
}

console.log(numOnly([1,2,'a','b']))
console.log(numOnly([1,'a','b',0,15]))
console.log(numOnly([1,2,'aasf','1','123',123]))
