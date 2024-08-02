const myNums = [1, 2, 3]
// basic syntax of reduce:
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 5)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "html course",
        price: 1999
    },
    {
        itemName: "web dev course",
        price: 9999
    },
    {
        itemName: "CSScourse",
        price: 12999
    },
]

const Total = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(Total);