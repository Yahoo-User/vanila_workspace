console.clear()
console.debug("=================================================")
console.debug('- sample06.js -')
console.debug("=================================================")


//-- ES6: Lexical Scoping Variable using 'let' keyword

let num = 2
num *= 3

console.log(`1. num: ${num}`)


let str = '문자열1'
str = '문자열2'

console.log(`2. str: ${str}`)


let arr = []
arr = [1,2,3,4,5,6,7,8,9,0]

console.log('3. arr:', arr)


let obj = {}
obj = { name: "Yoseph", age: 23 }

console.log('4. obj:', obj)
console.log(`\t+ Object.prototype.toString.call(obj): ${Object.prototype.toString.call(obj)}`)  // [object Object]


// User-defined block
{
    let var1 = 100

    console.log(`5. var1: ${var1}`)
}

// ReferenceError: var1 is not defined
// console.log(`\t+ var1: ${var1}`)


let boolean = true

if(boolean) {
    let var2 = 200

    console.log(`6. var2: ${var2}`)
} // if

// ReferenceError: var2 is not defined
// console.log(`\t+ var2: ${var2}`)

console.debug("=================================================")