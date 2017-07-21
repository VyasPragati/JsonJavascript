function makeGreeting(language) {
 
    return function(firstname, lastname) {
     
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);   
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);   
        }
        
    }
    
}

var greetEnglish = makeGreeting('en'); // own execution context 
var greetSpanish = makeGreeting('es'); //diff context

greetEnglish('John', 'Doe');// en
greetSpanish('John', 'Doe');//es