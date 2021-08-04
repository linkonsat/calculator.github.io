
function texttodisplay () {
  let buttonlist =  document.querySelectorAll('button')
  buttonlist.forEach(item => item.addEventListener('click', arrayconstructor(item.textContent)))
  
}//so on every item click we want to send that textcontent to the operator function
//operator function then constructs an array.
// we will also need to introduce a function which takes the items and turns them into numbers
//for example array constructors job will be to filter the array into a readable format for the operator
// which will take the unique position of sending the array  once item.lengthh = 3
//which case it will look like initially ["1.2", "+", "3"]
//which array constructor will alter the format to be like this and spit out let newarray = Number(item[0], and string and numberitem[2])

 


function typecheck (x) {
    if (typeof(x) === "number") {
        return true 
    } else {
        return false
    }
}

function arrayconstructor (x) {
    let z = document.querySelector('.calcdisplay')
    z.textContent = x;
    

}
function add(userin) {
    //array. userin will hold full equation.
    //add looks through through the array and until it finds a + and adds elements 0 and 2 together
    // if it doesnt then it throws it back to enter which checks the next string and calls it depending on the case
    //for example if it it finds "-" it calls function subtract
    //then operate will simply ensure the right function is followed
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

function arraycreator (userin) {
        //select all buttons except clear and equal
        //button on click we want to push that associated value into the array.
        //so if they click 11111. we want to push that value onto the first positon of the array
        // then if they push + we want to push that proceeding on the array
        //then once they include
}
function operate(userinfo) { //operator,number,number2
    let z = userinfo
    //I could actually take the text content from the element and turn it into a number
    //say that they enter in 1.45 right? so what I would do is parsefloat that string
    //because you would have an array of 3 strings. The first would be the number and third would be number
    //operate would take in those values and turn them into parse floats
    //so operate would be added to all operator symbol
   let operation = userinfo[1]
    switch(operation){
        case "+": 
            add(z)
            break;
        case "-": 
            subtract(z)
            break;
        case "*":
            multiply(z)
            break;
        case "/":
            divide(z)
            break;
        case ".":

}
}

