const accountId = 123556
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Australia"
let accountState ;
//accountId = 2 // not allowed
accountEmail = "gh@gmail.com"
accountPassword = "3236753"
accountCity = "Belgium"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
Prefer not to use var
because of issue in block scope and functional scope
*/