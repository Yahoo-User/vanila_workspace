console.clear()
console.debug("=================================================")
console.debug('- sample09.js -')
console.debug("=================================================")


//---------------------------------------------------//
//-- ES5 : 클래스 선언
//---------------------------------------------------//
// 객체생성함수를 선언하고, 상속이 필요한 변수/함수를 prototype 객체에 할당
// 즉, prototype 객체에 추가한 변수/함수는 해당 객체생성함수와 new 연산자로
// 생성될 객체의 인스턴스 멤버(정적 멤버가 아니라)가 됨! (***)
//---------------------------------------------------//

//---------------------------------------------------//
// *** prototype 객체 ***
//---------------------------------------------------//
// new 연산자로 생성한 객체에서, this 키워드를 통한 함수/변수의
// 선언위치를 참조(사용)할 수 있는 요소
//---------------------------------------------------//


// 객체생성자함수 선언시, name 필드(키)는 미리정의된 필드(키)로, 값은 함수의 이름이 됨  (****)
function Shape(x, y) {
    console.debug('- Shape.Constructor invoked.')

    this.myName = 'Yoseph'

    this.move(x, y)
} // Shape


//-----------------------------------------------------------//
// 클래스에 새로운 (**인스턴스**) 메소드(함수) 추가
//-----------------------------------------------------------//
// prototype을 통해 추가된 함수(메소드)는 인스턴스 멤버임 (****)
//-----------------------------------------------------------//
// Shape.prototype.move = function (x, y) {
//     console.debug('- Shape.prototype.move(x,y) invoked.')

//     this.x = x
//     this.y = y
// } // move

// Shape.prototype.area = function () {
//     console.debug('- Shape.prototype.area() invoked.')

//     return 0
// } // area

//-----------------------------------------------------------//
// 클래스에 새로운 (**정적**) 메소드(함수) 추가
//-----------------------------------------------------------//
// prototype을 통하지 않고, 직접 추가된 함수(메소드)는 정적 멤버임 (****)
//-----------------------------------------------------------//
// Shape.create = function (x, y) {
//     console.debug('- Shape.create(x, y) invoked.')

//     return new Shape(x, y)
// } // create

//-----------------------------------------------------------//
// 클래스에 새로운 인스턴스 필드(키) 추가
//-----------------------------------------------------------//
// prototype을 통해 추가된 필드(키)는 인스턴스 멤버임 (****)
//-----------------------------------------------------------//
// Shape.prototype.age = 23


//-----------------------------------------------------------//
// 위의 인스턴스 메소드와 필드의 추가를 한번에 prototype 객체의 멤버로
// 모두 선언
//-----------------------------------------------------------//
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


console.log('1. Shape:', Shape)

console.group()
    console.log(`+ typeof Shape: ${typeof Shape}`)
    console.log(`+ Object.prototype.toString.call(Shape): ${Object.prototype.toString.call(Shape)}`)  // [object Function]
    console.log(`+ name: ${Shape.name}`)        // name 필드(키)는 미리정의된 필드(키)로, 값은 함수의 이름이 됨

    console.group()
        console.log(`+ age: ${Shape.age}`)          // undefined : 객체생성자함수명으로 age 필드의 값 참조 불가 (***)
        console.log(`+ myName: ${Shape.myName}`)    // undefined : 객체생성자함수명으로 age 필드의 값 참조 불가 (***)
        console.log(`+ x: ${Shape.x}`)    // undefined : 객체생성자함수명으로 age 필드의 값 참조 불가 (***)
        console.log(`+ y: ${Shape.y}`)    // undefined : 객체생성자함수명으로 age 필드의 값 참조 불가 (***)
    console.groupEnd()
console.groupEnd()

console.log('')


console.log('2. Shape.prototype:', Shape.prototype)     // Shape { move: [Function] }

console.group()
    console.log(`+ typeof Shape.prototype: ${typeof Shape.prototype}`)
    console.log(`+ Object.prototype.toString.call(Shape.prototype): ${Object.prototype.toString.call(Shape.prototype)}`)  // [object Object]
console.groupEnd()

console.log('')


//-----------------------------------------------------------//
// 객체생성자함수에 추가한 필드/메소드와 다르게, prototype으로 추가한 필드/메소드는 
// new 연산자로 객체생성시 출력결과에 보이지 않으나, 필드/메소드 참조(사용) 가능.
//-----------------------------------------------------------//

var shape1 = new Shape(10, 20)   // Object instantiation

shape1.move(30, 40)              // Instance method invocation


console.log('')

// prototype에 추가한 age 필드(키)는 보이지 않음
console.log('3. shape1:', shape1)

console.group()
    console.log(`+ myName: ${shape1.myName}, x: ${shape1.x}, y: ${shape1.y}, age: ${shape1.age}`)
    console.log(`+ area: ${ shape1.area() }`)
console.groupEnd()

console.log('')

//--------------------------------//

var shape2 = Shape.create(50, 60)


console.log('')

// prototype에 추가한 age 필드(키)는 보이지 않음
console.log('4. shape2:', shape2)

console.group()
    console.log(`+ myName: ${shape2.myName}, x: ${shape2.x}, y: ${shape2.y}, age: ${shape2.age}`)
console.groupEnd()

console.log('')



console.debug("=================================================")