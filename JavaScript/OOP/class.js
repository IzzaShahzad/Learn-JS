class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const userOne = new User("izza", "i@example.com", "jkiaqwweu24")

console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());


function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const userTwo = new User("Harry", "harry@gmail.com", "ijasxdiuwe8rr")

console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());