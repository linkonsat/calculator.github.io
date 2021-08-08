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

function typecheck (x) {
    if (typeof(x) === "number") {
        return true 
    } else {    
        return false
    }
}
function arrayconstructor (x) {
    let z = document.querySelector('.calcdisplay')
   textdisplay.push(x)
   let y = textdisplay

   if (y.some(item => item == "." ) == true) {
       let decimalselect = document.querySelector('.decimal')
       decimalselect.removeEventListener('click',myfunc)
       let finalarray = y.reduce(function(start,end) {
           return start + end
       })
       z.textContent = finalarray
   }
   if (y.some(item => item == "+") == false){
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
    if (y.some(item => item == "-") == false){
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
    if (y.some(item => item == "*") == false){
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

   if (y.some(item => item == "/") == false){
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
            operator.push(workingarray[3])
            operator.pop()
            return workingarray[0] + workingarray[1]
                
            }
            function multiply(workingarray) {
             return workingarray[0]
                
            }
            function subtract(workingarray) { 
             
            
            }
            function divide(workingarray) {
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
                    case ".":
            
            }
            }
            
            function equation(x) {
                let z = document.querySelector('.calcdisplay')
            textdisplayright.push(x)
            let y = textdisplayright

   if (y.some(item => item == "." ) == true) {
       let decimalselect = document.querySelector('.decimal')
       decimalselect.removeEventListener('click',equation)
       let finalarray2 = y.reduce(function(start,end) {
           return start + end
       })
       z.textContent = finalarray2
   }
   if (y.some(item => item == "+") == false){
    let finalarray2 =  y.reduce((a,b) => a + b)
    
     z.textContent = finalarray2
   } else {

       let operatorchoice = y.pop()
       operator.push(operatorchoice)
       let finalarray2 =  y.reduce((a,b) => a + b)
       z.textContent = finalarray2
  
   }
    if (y.some(item => item == "-") == false){
    let finalarray2 =  y.reduce((a,b) => a + b)
    
     z.textContent = finalarray2
   } else {
 
    let operatorchoice = y.pop()
    operator.push(operatorchoice)
    let finalarray2 =  y.reduce((a,b) => a + b)
    z.textContent = finalarray2

   }
    if (y.some(item => item == "*") == false){
    let finalarray2 =  y.reduce((a,b) => a + b)
    
     z.textContent = finalarray2
    }else {
    let operatorchoice = y.pop()
    operator.push(operatorchoice)
    let finalarraymulti =  y.reduce((a,b) => a + b)
    z.textContent = finalarraymulti

   }

   if (y.some(item => item == "/") == false){
    let finalarray2 =  y.reduce((a,b) => a + b)
    
     z.textContent = finalarray2
   } else {

    let operatorchoice = y.pop()
    operator.push(operatorchoice)
    let finalarray2 =  y.reduce((a,b) => a + b)
    z.textContent = finalarray2
   }
            
        }