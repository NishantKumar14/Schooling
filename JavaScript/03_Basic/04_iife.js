// Immediately Invoke Function Expression (IIFE)


// named iife
(function chai() {
    console.log(`DB CONNECTION`)
})();


// simple iife
( (name) => {
    console.log(`DB CONNECTION TWO ${name}`)
}) ("Nishant");