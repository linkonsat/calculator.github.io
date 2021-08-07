let buttonlist = document.querySelectorAll("button")
buttonlist.forEach(x => x.addEventListener('click', myfunc));

let textdisplay = []
let operator = []
let textdisplayright = []
function myfunc(event){
    let z = event.target.textContent;
    arrayconstructor(z)
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
    let operators = document.querySelectorAll('.operator')
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
       
       buttonlist.forEach(item => item.addEventListener('click', equation))
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
    buttonlist.forEach(item => item.addEventListener('click', equation))
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
    buttonlist.forEach(item => item.addEventListener('click', equation))
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
    buttonlist.forEach(item => item.addEventListener('click', equation))
   }

            }
        function add(userin) {

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
            function operate(userinfo) { 

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
            
            function equation(event) {
                let z = event.target.textContent
                let number1 = textdisplayright
                let operatormain = operator
                number1.push(z)
            }