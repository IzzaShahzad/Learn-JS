const myObject = {
    js: 'javascript',
    html: 'Hyper Text Markup Language',
    css: "Cascading Style Sheet",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "html", "css", "java", "swift"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('AUS', "Australia")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('AUS', "Australia")

// for (const key in map) {
//     console.log(key);
// }