const user = {
    username: "izzah",
    price: 739,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to our website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "abc"
// user.welcomeMessage()

// console.log(this);

// function hello(){
//     let username = "izzah"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "izzah"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "izzah"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "izzah"})


console.log(addTwo(8, 1))


// const myArray = [6, 2, 9, 1, 8]

// myArray.forEach()