let myheros = ["Batman", "Wonder Women"]
let heroPower = {
    Batman: "Detective",
    WonderWomen: "Flight",
    getBatmanPower: function(){
        console.log(`Batman power is ${this.Batman}`);
    }
}
Object.prototype.izza = function(){
    console.log(`izza is present in all objects`);
}

Array.prototype.heyizza = function(){
    console.log(`Izzah says hello`);
}
//                                           Inheritance

const User = {
    name: "charlie",
    email: "charlie@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Assingment # 01',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
//                                          Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Diana     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"izza".trueLength()
"iceTea".trueLength()