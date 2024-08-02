const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 11})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 5)
                .filter( (num) => num >= 30)

console.log(newNums);