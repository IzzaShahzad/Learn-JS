// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [50, 60, 70, 80, 90]

for (const num of arr) {
    //console.log(num);
}

const greetings = "HelloSunshine!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('AUS', "Ausralia")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('AUS', "Australia")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    company1: 'Google',
    company2: 'Microsoft'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }