// Immediately Invoked Function Expressions (IIFE)


(function test(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('izzah')