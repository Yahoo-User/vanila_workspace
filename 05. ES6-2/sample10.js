console.clear()
console.debug("=================================================")
console.debug('- sample10.js -')
console.debug("=================================================")


//---------------------------------------------------//
//-- ES5 : 자식 클래스 선언
//---------------------------------------------------//

//------------------------------------//
// 1. 부모 클래스 선언
//------------------------------------//
function Shape(x, y) {
    console.debug('- Shape.Constructor(x, y) invoked.')

    this.myName = 'Yoseph'
    this.move(x, y)
} // Shape


// Shape.prototype.age = 23
// Shape.prototype.move = function (x, y) {
//     console.debug('- Shape.prototype.move(x,y) invoked.')

//     this.x = x
//     this.y = y
// } // move
// Shape.prototype.area = function () {
//     console.debug('- Shape.prototype.area() invoked.')

//     return 0
// } // area
// Shape.create = function (x, y) {
//     console.debug('- Shape.create(x, y) invoked.')

//     return new Shape(x, y)
// } // create


Shape.prototype = {

    age: 77,

    move: function (x, y) {
        console.debug('- Shape.prototype.move(x,y) invoked.')

        this.x = x
        this.y = y
    },  // move

    area: function () {
        console.debug('- Shape.prototype.area() invoked.')

        return 0
    }   // area

} // prototype


console.log('Shape:', Shape)

console.group()
    console.log(`+ Shape.name: ${Shape.name}`)
    console.log('+ Shape.prototype:', Shape.prototype)
console.groupEnd()

console.log('')


//------------------------------------//
// 2. 자식 클래스 선언
//------------------------------------//

function Circle(x, y, radius) {
    console.debug('- Circle.Constructor(x, y, radius) invoked.')

    // 부모 클래스 생성자 호출 (*** this를 꼭 넘겨줘야함 ***)
    Shape.call(this, x, y)          // Like super(x, y) in Java

    // this.name = 'Circle'            // 클래스의 이름 (생략해도 무방, 값은 이미 고정됨)
    this.radius = radius            // 인스턴스 필드 추가
} // Circle

// 2. 부모 클래스의 메소드 상속 (**필수**)
// Object.assign(Circle.prototype, Shape.prototype)

Object.assign(Circle.prototype, Shape.prototype, {

    // Override : 부모(Shape) 클래스의 메소드 오버라이딩
    area: function () {
        console.debug('- Circle.prototype.area() invoked.')

        return this.radius * this.radius
    } // area

}); // assign


console.log('Circle:', Circle)
console.group()
    console.log(`+ Circle.name: ${Circle.name}`)
    console.log('+ Circle.prototype:', Circle.prototype)
console.groupEnd()
console.log('')

//--------------------------------------//

var circle = new Circle(10, 20, 5)

console.log('')
console.log('circle:', circle)

console.group()
    console.log('+ Circle.prototype:', Circle.prototype)

    console.group()
        console.log(`+ area: ${ circle.area() }`)
    console.groupEnd()
console.groupEnd()

console.log('')



console.debug("=================================================")