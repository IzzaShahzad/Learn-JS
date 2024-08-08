function SetUsername(username){
    this.username = username
    console.log("called");
}
function createUser(username, email, password){
    SetUsername.call(this, username)  
    this.email = email
    this.password = password
}
const user = new createUser("Izzah", "i@example.com", "ufrefuwuw47t")
console.log(user);