let buttonlist = document.querySelectorAll("button")
buttonlist.forEach(x => x.addEventListener('click', myfunc));

let textdisplay = []
let operator = []
let textdisplayright = []
function myfunc(event){
    let z = event.target.textContent;
  
    arrayconstructor(z)
   
}

function myfunc2(event){
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
       decimalselect.removeEventListener('click',myfunc)
       let finalarray = y.reduce(function(start,end) {
           return start + end
       })
       z.textContent = finalarray
   }
   if (y.some(item => item == "CE") == true) {
    clear()
   }  else if (y.some(item => item == "DLT")) {
    y.pop()
    y.pop()
    let newicon = y.reduce((a,b) => a + b)
    z.textContent = newicon
     return
 }   else if (y.some(item => item == "=")) {
     y.pop()
     return
 }   
   else if (operatorcheck(lastitem) == false){
    let finalarray =  y.reduce((a,b) => a + b)
    
     z.textContent = finalarray
   } else {
       buttonlist.forEach(item => item.removeEventListener('click',myfunc))
       let operatorchoice = y.pop()
       operator.push(operatorchoice)
       let finalarray =  y.reduce((a,b) => a + b)
       z.textContent = finalarray
       
       buttonlist.forEach(item => item.addEventListener('click', myfunc2))
   }
    
            }
        function add(workingarray) {
           
            let addition = Number(workingarray[0]) + Number(workingarray[2])
            operatorrun(addition,workingarray[3])
            }
            function multiply(workingarray) {
             let multiply = Number(workingarray[0]) * Number(workingarray[2])
             operatorrun(multiply,workingarray[3])
                
            }
            function subtract(workingarray) { 
             let subtract = Number(workingarray[0]) - Number(workingarray[2])
             operatorrun(subtract,workingarray[3])
            
            }
            function divide(workingarray) {
                if (Number(workingarray[0] ==0 || Number(workingarray[2] == 0))) {
                    return alert("You broke the calculator :*(. Maybe don't have just a zero?")
                }
                let divide = Number(workingarray[0]) / Number(workingarray[2])
                operatorrun(divide,workingarray[3])
            }
            function operate(firstnum,firstoperate,secnumber,secondoperate) { 
                let newarray = [firstnum,firstoperate,secnumber,secondoperate]
                
               let operation = newarray[1]
          
               
                switch(operation[0]){
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
            
            function equation(x) {
                let z = document.querySelector('.currentnum')
            textdisplayright.push(x)
           
            let y = textdisplayright
             let lastitem = textdisplayright[textdisplayright.length - 1]   
   if (y.some(item => item == "." ) == true) {
       let decimalselect = document.querySelector('.decimal')
       decimalselect.removeEventListener('click',equation)
       let finalarray2 = y.reduce(function(start,end) {
           return start + end
       })
       z.textContent = finalarray2
   }
   if (y.some(item => item == "CE") == true) {
    clear()
    }  else if (y.some(item => item == "DLT")) {
       y.pop()
       y.pop()
       let newicon = y.reduce((a,b) => a + b)
       z.textContent = newicon
        return
    }  
    else if ( lastitem == "=") {
        
        y.pop()
        y.unshift([""])
        let finalarray2 = y.reduce((a,b) => a + b)
        let finalarray1 = textdisplay.reduce((a,b) => a + b)
        z.textContent = finalarray2
        operate(finalarray1,operator,finalarray2)
    }
    else if (operatorcheck(lastitem) == false){
    let finalarray2 =  y.reduce((a,b) => a + b)
    
     z.textContent = finalarray2
   } 
   else  {
       
       let operatorchoice = y.pop()
       operator.unshift(operatorchoice)
       
       let finalarray2 =  y.reduce((a,b) => a + b)
       let finalarray1 = textdisplay.reduce((a,b) => a + b)
       z.textContent = finalarray2
        
       operate(finalarray1,operatorchoice,finalarray2,operatorchoice)
        
   }
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
        
            operator.pop()
            operator.push(newoperator)
            
            textdisplay.push(operation)
            z.textContent = operation
}

function clear() {
    let z = document.querySelector('.currentnum').textContent = ''
    textdisplay.splice(0)
    operator.splice(0)
    textdisplayright.splice(0)
    buttonlist.forEach(x => x.removeEventListener('click', myfunc2))
    buttonlist.forEach(x => x.addEventListener('click', myfunc))
}

