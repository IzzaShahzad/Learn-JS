//var c = 300
let a = 500
if (true) {
    let a = 50
    const b = 70
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "izzah"

    function two(){
        const website = "GITHUB"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "IZZA"
    if (username === "izzah") {
        const website = " GITHUB"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ******************************** interesting *****************************


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}