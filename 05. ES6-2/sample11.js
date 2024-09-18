console.clear()
console.debug("=================================================")
console.debug('- sample11.js -')
console.debug("=================================================")


//---------------------------------------------------//
//-- ES6 : 클래스 선언
//---------------------------------------------------//

class Shape {

    name = 'Shape'       // static field, equals to the ES5 : this.name = 'Shape'
    // static name = 'Shape'

    // static age = 77     // static field
    age = 77           // instance field


    constructor(x, y) {
        console.debug('- Shape::constructor(x,y) invoked.')

        this.move(x, y)
    } // Constructor

    move(x, y) {
        console.debug('- Shape::move(x, y) invoked.')

        this.x = x
        this.y = y
    } // move

    area() {
        console.debug('- Shape::area() invoked.')

        return 0
    } // area

    static create(x, y) {
        console.debug('- static Shape::create(x,y) invoked.')

        return new Shape(x, y)
    } // create

} // end class


//-------------------------------------//

// var shape = new Shape(1, 2)
var shape = Shape.create(3, 4)

console.log('')
// console.log('shape:', shape)
console.dir(shape)

console.group()
    console.log(`+ Shape.name: ${Shape.name}, Shape.age: ${Shape.age}, shape.age: ${shape.age}`)
    console.log(`+ shape.area: ${ shape.area() }`)
console.groupEnd()


console.debug("=================================================")