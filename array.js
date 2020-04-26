// let uses block scope
// var uses function scope


let myNumbers = [9, 2, 8, 3, 7, 4]
let myWords = ['red', 'blue', 'yellow']
let myPets = [
  { name: 'Meau', species: 'cat', age: 2 },
  { name: 'Barks', species: 'dog', age: 3 },
  { name: 'Purs', species: 'cat', age: 8 }
]

let returnPush = myPets.push({ name: 'Pupster', species: 'dog', age: 1 })

let test = myPets.map(nameOnly)
let justDog = myPets.filter(onlyDog)
let babyDogNames = myPets.filter(onlyDog).filter(onlyBabies).map(nameOnly)

function nameOnly(x) {
  return x.name
}
function onlyDog(x) {
  return x.species == 'dog'
}
function onlyBabies(x) {
  return x.age < 3
}
console.log(test)
console.log(justDog)
console.log(babyDogNames)
console.log()

myWords.push('green')
console.log(myWords)

myWords.splice(1, 1)
console.log(myWords)

console.log(myNumbers[3])
console.log(myPets[1].species)



myWords.forEach(saySomething)

function saySomething(x) {
  console.log("the color " + x + " is great color.")
}



