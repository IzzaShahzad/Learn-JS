

function sayMyName(){
    console.log("I");
    console.log("Z");
    console.log("Z");
    console.log("A");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(7, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "Tom"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("izzah"))
// console.log(loginUserMessage("izzah"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(1000, 5000, 4287, 2000))

const user = {
    username: "izzah",
    prices: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Tom",
    price: 2399
})

const myNewArray = [234, 464, 100, 757]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
