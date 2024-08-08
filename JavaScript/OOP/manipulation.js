const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

const Book = {
    name: 'abc',
    price: 3499,
    isAvailable: true,

    orderBook: function(){
        console.log("Book is out of Stock");
    }
}

console.log(Object.getOwnPropertyDescriptor(Book, "name"));

Object.defineProperty(Book, 'name', {
    //writable: false,
    enumerable: true,  
})
console.log(Object.getOwnPropertyDescriptor(Book, "name"));
for (let [key, value] of Object.entries(Book)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}