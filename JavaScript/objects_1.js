
// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Izzah",
    "full name": "Izzah Shahzad",
    [mySym]: "mykey1",
    age: 18,
    location: "Islamabad",
    email: "izzah@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Thursday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "izzah@outlook.com"
// Object.freeze(JsUser)
JsUser.email = "izzah@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
