const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// 
taskInput.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        const taskText = taskInput.ariaValueMax.trim();
        if(tastText !== ""){
            addTask(taskText);
            taskInput.value = "";;
        }
    }
    
});

function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(taskItem);

    const deleteButton = taskItem.querySelector(".delete");
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskItem);
    });
}