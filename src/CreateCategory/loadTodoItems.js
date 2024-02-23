import { detailsButton } from "../2_Field_Date";
import { editTask } from "../edit";
import { loadFromLocalStorage, saveToLocalStorage } from "../localStorage";

let todosItems = loadFromLocalStorage() || [];
export function loadTodoItems () {

    //Die InputWerte des Eintrags werden in einem Objekt gespeichert
    const todoItemsObj = {
        id: Date.now(),
        title: document.getElementById("task").value,
        details:document.getElementById("task-description").value,
        date: document.getElementById("task-date").value
    };

    // das todoItemObjekt wird in das Array hinzugefügt
    todosItems.push(todoItemsObj);
    saveToLocalStorage(todosItems); //Das Array wird schließlich in den LocalStorage gespeichert 

    refreshTodos(todoItems); //Function, die die Todo Liste neu aufbaut
}

export function refreshTodos(todosItems) {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";



    // iterriert über das Array und fügt ein li - Element mit dem Titel und Datum
    todosItems.forEach (todo =>{
        const item = document.createElement("li");
        item.textContent = `${todo.title} - ${todo.date}`;

        // fügt in die Todo-Liste ein
        todoList.appendChild(item);

        const editBtn = document.getElementById("editBtn");
        editBtn.addEventListener("click", editTask(todo));


        const deleteBtn = document.getElementById("deleteTask-btn");
        deleteBtn.addEventListener("click", function(){
            todoList.removeChild(item);
        })

        const descriptionBtn = document.getElementById("description-btn");
        descriptionBtn.addEventListener("click",detailsButton(item) );
        
    })

    
    
}