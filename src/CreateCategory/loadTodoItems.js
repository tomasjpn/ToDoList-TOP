import { loadFromLocalStorage, saveToLocalStorage } from "../localStorage";


let todosItems = loadFromLocalStorage() || [];
export function loadTodoItems () {

    // das gespeicherte Array mit den Einträgen wird aus dem localStorage geholt
    const storedItems = localStorage.getItem("inputValueArr");
    const todosItemsInput = storedItems ? JSON.parse(storedItems) : [];

    refreshTodos(todosItemsInput); // Funktion, die die Todo-Liste neu aufbaut
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


    // Iterriert über das Array und fügt ein li - Element mit dem Titel und Datum
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
        saveChangesBtn.textContent = "Speichern";
        item.appendChild(saveChangesBtn);

        function saveChanges() {
        // Update todo item mit neuen Values
        todo.title = inputField.value.trim();
        todo.details = inputFieldDetail.value.trim();
        todo.date = inputFieldDate.value.trim();

        // Der alte Inhalt wird durch den neuen Inhalt ersetzt
        item.textContent = todo.title;
        item.textContent += " " + todo.details;
        item.textContent += " " + todo.date;

        // Speichern der updated data in Local Storage
        const updatedTodos = todosItems.map(t => t.id === todo.id ? todo : t);
        saveToLocalStorage(updatedTodos);

        // Rebuild von der  Liste mit updated data
        refreshTodos(todosItems);
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



        // Button für Details
        const descriptionInput = document.getElementById("task-description");

        // Erstellt ein Element zur Anzeige der Details
        const descriptionDisplay = document.createElement("span"); 
        descriptionDisplay.id = "description-display"
        
        descriptionDisplay.style.display = "none"; // Versteckt das Anzeigeelement anfangs;
        item.appendChild(descriptionDisplay);


        // Mehr Details Button
        const descriptionBtn = document.createElement("button");
        descriptionBtn.textContent = "Details";
        descriptionBtn.addEventListener("click",()=>{
            if (descriptionDisplay.style.display === "none") {
                descriptionDisplay.textContent = todo.details; // Text Content wird auf den eingegeben Todo Eintrag gestzt
                descriptionDisplay.style.display = "block";
                descriptionBtn.textContent = "Weniger anzeigen" // Zeigt die Details an
            } else {
                descriptionDisplay.style.display = "none";
                descriptionBtn.textContent = "Mehr Details" // Versteckt die Details wieder
            }


        });


        item.appendChild(descriptionBtn);

        todoList.appendChild(item);
        
    })

    
    
}