class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}izza`
    }

    set password(value){
        this._password = value
    }
}

const abc = new User("abc@example.com", "jicisfu")
console.log(abc.email);