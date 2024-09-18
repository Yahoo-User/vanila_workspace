console.clear()
console.debug("=================================================")
console.debug('- sample07.js -')
console.debug("=================================================")


const num = 1

// TypeError: Assignment to constant variable.
// num = 2

console.log(`1. num: ${num}`)



const str = '문자열1'

// TypeError: Assignment to constant variable.
// str = '문자열2'/

console.log(`2. str: ${str}`)



const arr = []

// TypeError: Assignment to constant variable.
// arr = [1,2,3,4,5,6,7,8,9,0]

console.log('3. arr:', arr)



const obj = {}

// TypeError: Assignment to constant variable.
// obj = { name: 'Yoseph', age: 23 }

console.log('4. obj:', obj)


//---------------------------------------------------//
// 불변변수(const 변수)의 무결성 제약조건 위배
//---------------------------------------------------//

const arr2 = []

arr2.push(1)
arr2.push(2)
arr2.splice(0, 0, 0)
arr2.pop()

console.log('5. arr2:', arr2)



const obj2 = {}

obj2['name'] = 'Yoseph'
obj2.age = 23

Object.assign(obj2, { height: 177 })

// 객체의 height 키(필드) 삭제
delete obj2.height

console.log('6. obj2:', obj2)


console.debug("=================================================")