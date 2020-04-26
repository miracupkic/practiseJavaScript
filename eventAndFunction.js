//   document.addEventListener('click', myFunction)

function myFunction() {
  alert('hello there')
}
let myFunction2= function(){
  console.log('the sceond different writing functions')
}

let myFunction3= () => console.log('the third different writing functions')



function doubleMe(x) {
  return x * 2
}
console.log(doubleMe(20))

function createMultiplier(param) {
  return function (x) {
    return x * param
  }
}
let doubleNum = createMultiplier(2)
let tripleNum = createMultiplier(3)
let quadrupleNum = createMultiplier(4)

console.log('doubleNum- ' + doubleNum(5))
console.log('tripleNum- ' + tripleNum(5))
console.log('quadruleNum- ' + quadrupleNum(5))




// anonimus function

document.addEventListener('click', function () {
  alert('Thank you for clicking')
})

// arrow function
document.addEventListener('click', () => {
  alert('Thank you for clicking')
})


document.addEventListener('click', () => alert('Thank you for clicking'))


let num = [10, 100, 1000]

let doubleNumbers = num.map(function (x) {
  return x * 2
})

let doubleNumbers2 = num.map(x => x * 2)



