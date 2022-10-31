let task = document.getElementById('myInput')
let description = document.getElementById('description')
let date = document.getElementById('dueDate')
let btn = document.getElementById('addBtn')
 
var li = document.createElement("li")




;


   
    btn.addEventListener("click", (e) => { 
        const li = document.createElement("li")
        const ul= document.querySelector('ul')
        ul.appendChild(li) 
        
        li.innerText = task.value + ' ' + description.value + ' ' + date.value
   
    });
   
  
  
  
  
