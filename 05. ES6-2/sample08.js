console.clear()
console.debug("=================================================")
console.debug('- sample08.js -')
console.debug("=================================================")


//---------------------------------------------------//
// 불변변수(const 변수)의 무결성 제약조건 지키기
//---------------------------------------------------//
// 배열, 객체의 내장함수로 수정하는 것을 금지시키고,
// 수정할 불변변수(const변수)를 새로이 만들어, 새 값을 할당하는 방법으로
// 불변변수의 무결성을 지킴
//---------------------------------------------------//

const num1 = 1
const num2 = num1 * 3


const str1 = '문자열1'
const str2 = str1 + '추가'


const arr1 = []
const arr2 = arr1.concat(1)
console.log('- arr2:', arr2)


const arr3 = [...arr2, 'Yoseph', 23]
console.log('- arr3:', arr3)


const arr4 = arr3.splice(0, 2)
console.log('- arr4:', arr4)


const arr5 = arr4.slice(0, arr4.length)
console.log('- arr5:', arr5)


const [ first, ...arr6 ] = arr5
console.log(`- first: ${first}, arr6:`, arr6)


//----------------------------------------------//

const obj1 = { name: 'Yoseph', age: 23 }
console.log('- obj1:', obj1)


const obj2 = { name: 'Trinity', age: obj1.age }
console.log('- obj2:', obj2)


// const obj3 = { ...obj2 }
const obj3 = { ...obj2, name: 'pyramide' }  // 객체 구조분해 할당된 키(필드)의 값을 변경
console.log('- obj3:', obj3)


const { name, ...obj4 } = obj3              // 객체의 구조분해 할당
console.log(`- name: ${name}, obj4:`, obj4)


console.debug("=================================================")