console.clear()
console.debug("=================================================")
console.debug('- sample02.js -')
console.debug("=================================================")


var arr1 = ['one', 'two']
var arr2 = ['three', 'four']

//--------------------------------------------//

// const combined = [...arr1, ...arr2]         // using spread operator(...) for Array
const combined = [...arr2, ...arr1]

console.log('1. combined:', combined)
console.log(`\t+ typeof combined: ${typeof combined}`)
console.log(`\t+ Object.prototype.toString.call(combined): ${Object.prototype.toString.call(combined)}`)    // [object Array]
console.log('')

//--------------------------------------------//

// arr1 = combined
// arr1 = [1,2,3,4,5,6,7,8,9,0]

console.log('2. arr1:', arr1)

// const [ first ] = arr1           // using destructuring operator for Array
// const first = arr1               // Array assignment into other const variable
// const [first, second] = arr1     // using destructuring operator for Array

// const [
//     first,
//     second,
//     third,          // (* undefined *) print if NO default value specified
//     ...others       // (* Array([]) *) using spread operator(...) for Array
// ] = arr1    // using destructuring operator for Array

const [
    first,
    second,
    third='empty',   // (* default value *) print if specified
    ...others        // (* Array([]) *) using spread operator(...) for Array
] = arr1    // using destructuring operator for Array

// const [
//     first,
//     second,
//     third='empty',      // (* default value *) print if specified
//     ...others,          // (* Array([]) *) using spread operator(...) for Array
//     ...others           // (***) SyntaxError: Rest element must be last element
// ] = arr1    // using destructuring operator for Array

console.log(`3. first:, ${first}, second: ${second}, third: ${third}, others:`, others)


console.debug("=================================================")
