
    let userinfo =[2,"+",1]

 


function typecheck (x) {
    if (typeof(x) === "number") {
        return true 
    } else {
        return false
    }
}
function add(userin) {
    //array. userin will hold full equation.
    //add looks through through the array and until it finds a + and adds elements 0 and 2 together
    // if it doesnt then it throws it back to enter which checks the next string and calls it depending on the case
    //for example if it it finds "-" it calls function subtract
    
    const z = userin.length
    let start = 0;
    let end = 2
    for(let i = 0; i < z;i++) {
        
    
        if (typecheck(userin[i]) == true || userin[i] == "+") {
             return console.log(userin[start] + userin[end])
        } else if (typecheck(userin[i]) == false && userin[i] != "+") {
             return("this works")
        }

        }
  
}
function multiply(btnm,userin) {
    const z = userin.length
    let start = 0;
    let end = 2;
    for(let i = 0; i < z;i++) {
        if(typecheck(userin[i]) == true || userin[i] == "*") {
            return userin[start] * userin[end]
        } else if(typecheck(userin[i]) == false && userin != "*") {
            return "this works"
        }
        
    }
    
}
function subtract(btns,userin) { 
    const z = userin.length
    let start = 0;
    let end =2; 
    for(i = 0; i < z; i++) {
        if(typecheck(userin[i]) == true || userin[i] == "-") {
            return userin[start] - userin[end]
        } else if(lettercheck(userin[i]) == false && userin[i] != "-") {
            return "this works"
        }
        
    }

}
function divide(btnd,userin) {
    const z = userin.length
    let start = 0;
    let end = 2;
    for(i = 0; i < z; i++) {
        if(typecheck(userin[i]) ==true || userin[i] == "/") {
            return userin[start] / userin[end] 
        } else if (lettercheck(userin[i]) == false || userin[i] != "/") {
            return "this works"
        }
    }

}

function operate(userinfo) { //operator,number,number2
    let z = userinfo
    ///let array = [number,operator,number2]
   // let operation = array[1]
   let operation = userinfo[1]
    switch(operation){
        case "+": 
        add(z)
    }
}

