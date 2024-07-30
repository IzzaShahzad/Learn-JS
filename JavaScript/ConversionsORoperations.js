let score = "54"
console.log(typeof (score))

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

//"54" => 54
//"54abv" =>NaN
//true => 1 ; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 =>true ; 0 =>false
// "" => false
// "Izzah" =>true

let someNumber = 50;
let stringNumber = String(someNumber)
console.log (stringNumber);
console.log (typeof stringNumber);


//**********************************Operations*********************************** */
let value = 7
let negValue = -value
console.log(negValue)

let str1 = "Hello"
let str2 = "Sunshine"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log((3+4) * 5 % 3);

console.log(+true);
let a, b, c
a = b = c = 5 + 5
let gameCounter = 100
gameCounter++;
console.log(gameCounter);
