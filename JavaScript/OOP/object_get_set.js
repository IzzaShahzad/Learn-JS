const User = {
    _email: "abc@example.com",
    _password: "ksasxkjsd",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const obj = Object.create(User)
console.log(obj.email);