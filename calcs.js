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
   if (operatorcheck(lastitem) == false){
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
            let z = document.querySelector(".currentnum")
       
            operator.push(workingarray[3])
            
            let addition = Number(workingarray[0]) + Number(workingarray[2])
            textdisplay.splice([0])
            textdisplayright.splice([0])
            textdisplay.push(addition)
            
            z.textContent = addition
                
            }
            function multiply(workingarray) {
             return workingarray[0]
                
            }
            function subtract(workingarray) { 
             
            
            }
            function divide(workingarray) {
          
            
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
                    case ".":
            
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
   if (operatorcheck(lastitem) == false){
    let finalarray2 =  y.reduce((a,b) => a + b)
    
     z.textContent = finalarray2
   } else {

       let operatorchoice = y.pop()
       let finalarray2 =  y.reduce((a,b) => a + b)
       let finalarray1 = textdisplay.reduce((a,b) => a + b)
       z.textContent = finalarray2
       operate(finalarray1,operator,finalarray2,operatorchoice)
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