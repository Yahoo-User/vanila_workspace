console.clear()
console.debug("=================================================")
console.debug('- sample12.js -')
console.debug("=================================================")


//---------------------------------------------------//
//-- ES6 : 부모 클래스 선언
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



//---------------------------------------------------//
//-- ES6 : 자식 클래스 선언
//---------------------------------------------------//

class Circle extends Shape {


    constructor(x, y, radius) {
        console.debug('- Circle::constructor(x, y, radius) invoked.')

        super(x, y)

        this.radius = radius
    } // constructor

    // Override
    area() {
        console.debug('- Circle::area() invoked.')

        if(this.area === 0) {
            return super.area()
        } // if

        return this.radius * this.radius
    } // area

} // end class


//-------------------------------------------//

var circle = new Circle(100, 300, 7)

console.log('')

console.dir(circle)

console.group()
    console.log(`+ Circle.name: ${Circle.name}, Circle.age: ${Circle.age}, circle.age: ${circle.age}`)
    console.log(`+ circle.area: ${ circle.area() }`)
console.groupEnd()
console.groupCollapsed()

console.debug("=================================================")