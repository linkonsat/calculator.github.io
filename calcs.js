let buttonlist = document.querySelectorAll("button")
let textdisplay = []
let operator = []
let textdisplayright = []
let lastop = document.querySelector('.displaylasteq')
   
window.addEventListener('keydown', function keyboardsupport(e) {
    let buttonlistkeys = document.querySelectorAll(`button[data-key="${e.keyCode}"]`)
    console.log(buttonlistkeys)
    if (typeof(operator[0]) != "string") {
    arrayconstructor(buttonlistkeys[0].textContent)
    } else {
        equation(buttonlistkeys[0].textContent)
    }
    
})


buttonlist.forEach(x => x.addEventListener('click', NumbersLeft));


function NumbersLeft(event){
    let z = event.target.textContent;
  
    arrayconstructor(z)
   
}

function NumbersRight(event){
    let z = event.target.textContent;
   equation(z)
}


function arrayconstructor (x) {
    let z = document.querySelector('.currentnum')
    textdisplay.push(x)
    let y = textdisplay
    let lastitem = textdisplay[textdisplay.length - 1]   

        if (y.some(item => item == "." ) == true) {
            let decimalselect = document.querySelector('.decimal')
            decimalselect.removeEventListener('click', NumbersLeft)
            
            let finalarray = y.reduce(function(start,end) {
                return start + end
            })
            z.textContent = finalarray
            lastop.textContent = finalarray + " " + operator
            
        
        } 

        if (y.some(item => item == "CE") == true) {
                clear()
        }  else if (y.some(item => item == "DLT")) {
                y.pop()
                y.pop()
            if (y[0] != undefined) {
                let newicon = y.reduce((a,b) => a + b)
                z.textContent = newicon
                lastop.textContent = finalarray + " " + operator
            } else {
                z.textContent = ""
                lastop.textContent = finalarray + " " + operator
            }
                return
            }   
            else if (y.some(item => item == "=")) {
                y.pop()
                return }   
             else if (operatorcheck(lastitem) == false){
                let finalarray =  y.reduce((a,b) => a + b)
                z.textContent = finalarray
                lastop.textContent = finalarray + " " + operator
            } else {
                buttonlist.forEach(item => item.removeEventListener('click',NumbersLeft))
                let operatorchoice = y.pop()
                operator.push(operatorchoice)
                let finalarray =  y.reduce((a,b) => a + b)
                z.textContent = finalarray
                lastop.textContent = finalarray + " " + operator
                buttonlist.forEach(item => item.addEventListener('click', NumbersRight))
                }
             }
function equation(x) {
            
    let z = document.querySelector('.currentnum')
    textdisplayright.push(x)
    let y = textdisplayright
    let lastitem = textdisplayright[textdisplayright.length - 1]   

   if (y.some(item => item == "." ) == false) {
       let decimalselect = document.querySelector('.decimal')
       decimalselect.removeEventListener('click',NumbersRight)
       let finalarray2 = y.reduce(function(start,end) {
           return start + end
       })
       z.textContent = finalarray2
       lastop.textContent = textdisplay + " " + operator
   } else if (y[y.length -1] == "."
    && y[y.length - 2] == ".") {
    y.pop()
    }
   
   if (y.some(item => item == "CE") == true) {
    clear()
    }  else if (y.some(item => item == "DLT")) {
       y.pop()
       y.pop()
       if (y[0] != undefined) {
        let newicon = y.reduce((a,b) => a + b)
        
        z.textContent = newicon
        lastop.textContent = firstarray + " " + operator
        } else {
            z.textContent = ""
            lastop.textContent = firstarray + " " + operator
        }
        return
    }  
    else if ( lastitem == "=") {
        
        y.pop()
        let finalarray2 = textdisplayright.reduce((a,b) => a + b)
        let finalarray1 = textdisplay.reduce((a,b) => a + b)
        z.textContent = finalarray2
        lastop.textContent = finalarray1 + " " + operator[0]
        
        operate(finalarray1,operator[0],finalarray2)
        operator.splice(0)
        
        
    }
    else if (operatorcheck(lastitem) == false){
    let finalarray2 =  y.reduce((a,b) => a + b)
       
     z.textContent = finalarray2
     lastop.textContent = textdisplay.reduce((a,b)  => a + b) + " " + operator[0]
   } 
   else  {
       
       let operatorchoice = y.pop()
       if (operatorcheck(operator[0]) == false) {
           operator.unshift(operatorchoice)
       }
      
       
    
     
       let finalarray2 =  textdisplayright.reduce((a,b) => a + b)
       let finalarray1 = textdisplay.reduce((a,b) => a + b)
       z.textContent = finalarray2
       lastop.textContent = finalarray1 + " " + operator[0]
       
       operate(finalarray1,operator[0],finalarray2)
       operator.splice(1)
       operator.unshift(operatorchoice)
      
   }
}

function operate(firstnum,firstoperate,secnumber,secondoperate) { 
    let newarray = [firstnum,firstoperate,secnumber,secondoperate]
                
    let operation = newarray[1]
          
               
    switch(operation){
    case "+": 
        add(newarray)
        break;
    case "-": 
        subtract(newarray)
        break;
    case "*":
        multiply(newarray)
        break;
    case "/":
        divide(newarray)
        break;
                  
            
}
}
function add(workingarray) {
           
    let addition = Number(workingarray[0]) + Number(workingarray[2])
        operatorrun(addition,workingarray[3])}
                
function multiply(workingarray) {
    let multiply = Number(workingarray[0]) * Number(workingarray[2])
        operatorrun(multiply,workingarray[3])}
                    
                
function subtract(workingarray) { 
    let subtract = Number(workingarray[0]) - Number(workingarray[2])
    operatorrun(subtract,workingarray[3])}
                
function divide(workingarray) {
    if (Number(workingarray[0] ==0 || Number(workingarray[2] == 0))) {
        return alert("You broke the calculator :*(. Maybe don't have just a zero?")
    }
        let divide = Number(workingarray[0]) / Number(workingarray[2])
        operatorrun(divide,workingarray[3])
}
            
            

function operatorcheck (target) {

    let operators = ["+","-","*","/"]

        if (operators.includes(target)) {
            return true
        } else {
         return false
    }
}

function operatorrun(operation,newoperator)  {
    let z = document.querySelector(".currentnum")
        textdisplay.splice([0])
        textdisplayright.splice([0])
            
            
        textdisplay.push(operation)
        z.textContent = operation
        lastop.textContent = operation
           
}

function clear() {
    let currentoperation = document.querySelector('.currentnum').textContent = ""
    let previous_result = document.querySelector('.displaylasteq').textContent = ""
    textdisplay.splice(0)
    operator.splice(0)
    textdisplayright.splice(0)
    buttonlist.forEach(x => x.removeEventListener('click', NumbersRight))
    buttonlist.forEach(x => x.addEventListener('click', NumbersLeft))
}

