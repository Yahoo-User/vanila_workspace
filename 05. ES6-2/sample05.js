console.clear()
console.debug("=================================================")
console.debug('- sample05.js -')
console.debug("=================================================")



var obj1 = { one: 1, two: 2, other: 0 }
var obj2 = { three: 3, four: 4, other: -1 }

console.log('1. obj1:', obj1)
console.log('2, obj2:', obj2)


// ES5 -------------------------------------------

// var combined = {
//     one: obj1.one,
//     two: obj1.two,
//     three: obj2.three,
//     four: obj2.four
// }

// 동일 원소의 값은, 나중의 값이 우선함.
// var combined = Object.assign({}, obj1, obj2)
var combined = Object.assign({}, obj2, obj1)

// 객체에서 지정된 중복 키(필드) 삭제
delete combined.other


// ES6 -------------------------------------------

//--- Using spread operator for a Object.

// var combined = { ...obj1, ...obj2 }
var combined = { ...obj2, ...obj1 }

// 객체에서 지정된 중복 키(필드) 삭제
// delete combined.other


console.log('3. combined:', combined)


//--- Using destructuring assignment for a object.
// var { one, two, three, four, other } = combined

// console.log(`4. one: ${one}, two: ${two}, three: ${three}, four: ${four}, other: ${other}`)

var { other, ...others } = combined

console.log('5. other:', other, ', others:', others)


console.debug("=================================================")