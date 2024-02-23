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

    refreshTodos(todosItems); //Function, die die Todo Liste neu aufbaut
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

        const editBtn = document.createElement("button");
        editBtn.textContent = "Bearbeiten";

        editBtn.addEventListener("click", function() {
    // Create input fields for editing title, details, and date
    const inputField = document.createElement("input");
    const inputFieldDate = document.createElement("input");
    const inputFieldDetail = document.createElement("input");

    inputFieldDate.type = "date";
    inputFieldDate.value = todo.date;

    inputField.type = "text";
    inputField.value = todo.title;
    inputField.placeholder = "Title";

    inputFieldDetail.type = "text";
    inputFieldDetail.value = todo.details;
    inputFieldDetail.placeholder = "Details";

    // Replace existing content with input fields
    item.innerHTML = ""; // Clear existing content
    item.appendChild(inputField);
    item.appendChild(inputFieldDetail);
    item.appendChild(inputFieldDate);

    // Save button for saving changes
    const saveChangesBtn = document.createElement("button");
    saveChangesBtn.textContent = "Save";
    item.appendChild(saveChangesBtn);

    // Save changes function
    function saveChanges() {
        // Update todo item with new values
        todo.title = inputField.value.trim();
        todo.details = inputFieldDetail.value.trim();
        todo.date = inputFieldDate.value.trim();

        // Rebuild the list with updated data
        refreshTodos(todosItems);

        // Save the updated data to local storage
        saveToLocalStorage(todosItems);
    }

    // Attach event listener to save changes button
    saveChangesBtn.addEventListener("click", saveChanges);

    // Listen for Enter key press to save changes
    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            saveChanges();
        }
    });
});

        item.appendChild(editBtn);


        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
       
        deleteBtn.addEventListener("click", function(){
            todoList.removeChild(item);
            todosItems = todosItems.filter(t => t.id !== todo.id);
            saveToLocalStorage(todosItems); // Speichere das aktualisierte Array im LocalStorage

        })
        item.appendChild(deleteBtn);

        const descriptionBtn = document.createElement("button");
        descriptionBtn.textContent = "Details";

        descriptionBtn.addEventListener("click",()=> detailsButton(todo.id) );
        item.appendChild(descriptionBtn);

        todoList.appendChild(item);
        
    })

    
    
}