function greeting(name) {
  // say a friendly hi
  console.log("Hello world! This is " + name)
  return `name: ${name}`
}

let result = greeting("Mary")
console.log(result)

function add(x, y){
  return x + y;
}

function multiply(x, y){
  return x * y;
}
console.log(multiply(add(1, 2), 10))

let array = [1, 2, 3, 4, 5]
let res1 = array.slice(0,3)
let res2 = [0, ...array,7]
console.log(res2)
console.log(res1)


