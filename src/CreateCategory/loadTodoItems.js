import { detailsButton } from "../2_Field_Date";
import { editTask } from "../edit";
import { loadFromLocalStorage, saveToLocalStorage } from "../localStorage";


export function loadTodoItems () {
    let todosItems = loadFromLocalStorage();

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

export function refreshTodos(todosItemsInput) {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";


    // Überprüfe, ob todosItemsInput ein Array ist
    if (!Array.isArray(todosItemsInput)) {
        todosItemsInput = [];
        todosItemsInput.push(loadFromLocalStorage());
        // Oder: return; um die Funktion frühzeitig zu beenden
    }


    // iterriert über das Array und fügt ein li - Element mit dem Titel und Datum
    todosItemsInput.forEach((todo) =>{
        const item = document.createElement("li");
        item.textContent = `${todo.title} - ${todo.date}`;

        // fügt in die Todo-Liste ein
        todoList.appendChild(item);

        const editBtn = document.createElement("button");
        editBtn.textContent = "Bearbeiten";

        editBtn.addEventListener("click", function() {
        // Input-Felder für EIntrag, Datum und Details
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

        // Derzeitiger Inhalt wird mit neuen Content ersetzt
        item.innerHTML = ""; // Existierenden Inhalt leeren
        item.appendChild(inputField);
        item.appendChild(inputFieldDetail);
        item.appendChild(inputFieldDate);

        // Bearbeitete Einträge speichern
        const saveChangesBtn = document.createElement("button");
        saveChangesBtn.textContent = "Save";
        item.appendChild(saveChangesBtn);

        function saveChanges() {
        // Update todo item mit neuen Values
        todo.title = inputField.value.trim();
        todo.details = inputFieldDetail.value.trim();
        todo.date = inputFieldDate.value.trim();

        // Rebuild von der  Liste mit updated data
        refreshTodos(todosItems);

        // Speichern der updated data in Local Storage
        saveToLocalStorage(todosItems);
        }

        // Event Listener für save changes button
        saveChangesBtn.addEventListener("click", saveChanges);

        // Event Listener für Enter key press für save changes
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