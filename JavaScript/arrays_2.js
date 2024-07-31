const marvel_heros = ["hhdja", "nauhfuyf", "nxj vdfhfy"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_array = [...marvel_heros, ...dc_heros]

// console.log(all_new_array);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("IzzaShahzad"))
console.log(Array.from("IzzaShahzad"))
console.log(Array.from({name: "IzzaShahzad"}))

let score1 = 475
let score2 = 817
let score3 = 236

console.log(Array.of(score1, score2, score3));