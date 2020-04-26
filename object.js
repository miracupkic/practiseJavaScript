// variable
let catName ='Flyffy'
let catAge = 4

console.log(`print dynamic value without + and ' ${catName}`)

// function
function meow(){
  alert('Meooooowwww')
}


// object
let cat= {
  name:'Flyffy',
  age: 4,
  foods:{
    favorite: 'tuna',
    leastFavorite: 'Oranges'
  },
  exeColor:'blue',
  meow(){
    alert('meowww')
  }
  
}
// invoking object properties
cat.meow()

document.write(cat.name +' '+ cat.foods.favorite)

let john={
  firstName: "John",
  lastName: "Doe",
  driveCar(){
    console.log(this.firstName+' '+this.lastName+' is drivinhg a car.')
  }
}
john.driveCar()

function breathe(){
  console.log(this.firstName+' '+this.lastName+' just inhaled and exhaled')

}
breathe.call(john)
