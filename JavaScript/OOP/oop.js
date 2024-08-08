const user = {
    username: "IzzaShahzad",
    loginCount: 15,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}
const userOne = new User("izzaShahzad", 15, true)
const userTwo = new User("David", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);