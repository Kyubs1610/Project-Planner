let task = document.getElementById('myInput')
let description = document.getElementById('description')
let date = document.getElementById('dueDate')
let btn = document.getElementById('addBtn')

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }

}, false);



btn.addEventListener("click", (e) => { 

    if(task.value.length == 0){
            alert("Please Enter a Task")
        
    }else{
        const li = document.createElement("li")
        const ul= document.querySelector('ul')
        ul.appendChild(li) 

        
    function getTimer() {
        const now = new Date().getTime();
        const dateI = document.getElementById('dueDate').value
    
        const dateInput = new Date(dateI)
        
        const timer = dateInput - now;
        
        const days = Math.floor(timer / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timer %(1000 * 60 * 60 * 24))/(1000*60*60))
        const minutes = Math.floor((timer %(1000 * 60 * 60))/(1000*60))
        
        const text = `${days}j ${hours}h ${minutes}m  left until the end of your project`

    li.innerText = task.value +  '\n' + description.value + '\n' + text

    }
}
getTimer();

});

const removeTask = document.querySelector('.removeTask')
removeTask.addEventListener('click', function(){ 
         
    var els = document.querySelectorAll("li.checked");
    for (var x = 0; x < els.length; x++)
    els[x].style.display = 'none';
    
})
