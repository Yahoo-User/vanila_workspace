console.clear()
console.debug("=================================================")
console.debug('- sample03.js -')
console.debug("=================================================")


// Using spread operator for the arguments of a Function
function f(...args) {
    console.debug('f(...args) invoked.')

    console.log('1. args:', args)
    console.log(`\t+ typeof args: ${typeof args}`)
    console.log('\t+ Object.prototype.toString.call(args):', Object.prototype.toString.call(args))  // [object Array]
    console.log('')

    console.log('2. arguments:', arguments)
    console.log(`\t+ typeof arguments: ${typeof arguments}`)
    console.log(`\t+ Object.prototype.toString.call(arguments): ${Object.prototype.toString.call(arguments)}`)  // [object Arguments]
    console.log('')

    var [first, ...others]  = args
    console.log(`3. first: ${first}, ...others:`, others)   // others: []
    console.log(`\t+ typeof others: ${typeof others}`)
    console.log(`\t+ Object.prototype.toString.call(others): ${Object.prototype.toString.call(others)}`)
    console.log('')

} // f


// f()
f(1,2,3,4,5,6,7,8,9,0)
// f([1,2,3,4,5,6,7,8,9,0])


console.debug("=================================================")