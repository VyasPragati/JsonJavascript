// function statement
function greet(name) {
    console.log('Hello ' + name);   
}
greet('John');

// using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    
    return 'Hello ' + name;
    
}('John');
// invoke function on the fly in this case greeting does not contain function but contains string

console.log(greeting);

// IIFE
var firstname = 'John';



(function(name) {
    
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
    
}(firstname)); // IIFE invoking can be done inside or outside parenthensis })(firstname) is also valid

/* note all function not assigned to a var have a name eg:greet, function assigned to var is anonymous, 

 3; is valid line of code but function() is not valid will throw error to provide a name to 
make it valid use () like used in expressions


*/
















