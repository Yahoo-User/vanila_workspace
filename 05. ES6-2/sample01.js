console.clear()
console.debug("=================================================")
console.debug('- sample01.js -')
console.debug("=================================================")

function f() {

    console.log('0. this:', this)
    console.log(`\t+ Object.prototype.toString.call(this): ${Object.prototype.toString.call(this)}`)    // [object global]
    console.log('')

    console.log('1. arguments:', arguments)
    console.log(`\t+ typeof arguments: ${typeof arguments}`)
    console.log(`\t+ arguments.length: ${arguments.length}`)
    console.log(`\t+ Object.prototype.toString.call(arguments): ${Object.prototype.toString.call(arguments)}`)    // [object Arguments]
    console.log('')

    console.log('2. Array.prototype:', Array.prototype)
    console.log(`\t+ typeof Array.prototype: ${typeof Array.prototype}`),
    console.log(`\t+ Array.prototype.length: ${Array.prototype.length}`)
    console.log(`\t+ Object.prototype.toString.call(Array.prototype): ${Object.prototype.toString.call(Array.prototype)}`)   // [object Array]
    console.log('')

    console.log('3. Array.prototype.slice:', Array.prototype.slice)
    console.log(`\t+ Object.prototype.toString.call(Array.prototype.slice): ${Object.prototype.toString.call(Array.prototype.slice)}`)  // [object Function]
    console.log('')

    console.log('4. Array.prototype.slice.call:', Array.prototype.slice.call)
    console.log(`\t+ Object.prototype.toString.call(Array.prototype.slice.call): ${Object.prototype.toString.call(Array.prototype.slice.call)}`) // [object Function]
    console.log('')

    var args = Array.prototype.slice.call(this, arguments)
    console.log('5. args:', args)
    console.log(`\t+ Object.prototype.toString.call(args): ${Object.prototype.toString.call(args)}`)    // [object Array]
    console.log(`\t+ first: ${args[0]}`)
    console.log(`\t+ args.slice(1, args.length): ${args.slice(1, args.length)}`)

} // f


// f()
// f(1,2,3,4,5,6,7,8,9,0)
f([1,2,3,4,5,6,7,8,9,0])


console.debug("=================================================")