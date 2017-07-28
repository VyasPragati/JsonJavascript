function buildFunctions() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        
        arr.push(
            function() {
                console.log(i);   // i is stored but console.log is not invoked so last val 3 is stored in i in the var context
            }
        )
        
    }
    
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
//all 3 are i=3 since console.log(i) is not excuted but i=3 is in memory context
function buildFunctions2() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() { // note the return
                    console.log(j);   
                }
            }(i))// invoke function or pass i to let j=i 
        )
        
    }
    
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();