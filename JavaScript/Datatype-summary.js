
//  Primitive (call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 500
const scoreValue = 500.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('456')
const anotherId = Symbol('456')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Non primitive (call by refrence)

// Array, Objects, Functions

const heros = ["Pak legion", "kohl", "Pakistan Man"];
let myObj = {
    name: "Izza",
    age: 10,
}

const myFunction = function(){
    console.log("Hello Sunshine");
}

console.log(typeof anotherId);


//******************************************************************************** */
//stack(primitive)
//heap(non-primitive)
let myname = "IzzahShahzad"
let anothername = Sunshine
console.log(anothername)
console.log(myname)

let user ={
    email: "abc@gmail.com",
    upi:"user@upi.com"
}
let newUser = user
newUser.email = "ght@google.com"
console.log(user.email);
console.log(newUser.email);

