import { loadFromLocalStorage, saveToLocalStorage } from "../localStorage";



export function loadTodoItems (category = "") {

    // das gespeicherte Array mit den Einträgen wird aus dem localStorage
    const storedItems = localStorage.getItem("inputValueArr");
    const todosItemsInput = storedItems ? JSON.parse(storedItems) : [];

    let filteredItems = todosItemsInput;

    //
    if (category) {
        // Kategorie wird gefiltert, also nur ToDo Einträge der entsprechenden Kategorie werden behalten
        filteredItems = todosItemsInput.filter(todo => todo.category === category);
      }

    // Nur wenn gültige Einträge vorhanden sind, wird die Todo-Liste aktualisiert
    if (Array.isArray(filteredItems) && filteredItems.length > 0) {
        refreshTodos(filteredItems); // Funktion, die die Todo-Liste neu aufbaut
    }
}

export function refreshTodos(todosItemsInput) {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    if(!Array.isArray(todosItemsInput)){
        todosItemsInput = []; // Initialisiere als leeres Array, wenn kein Array übergeben wird
    }


    // Überprüfe, ob todosItemsInput ein Array ist
    if (!Array.isArray(todosItemsInput)) {
        todosItemsInput = [];
        todosItemsInput.push(loadFromLocalStorage());
        // Oder: return; um die Funktion frühzeitig zu beenden
    }


    // Iterriert über das Array und fügt ein li - Element mit dem Titel und Datum
    todosItemsInput.forEach((todo) =>{
        const item = document.createElement("li");

        item.classList.add("todo-item");

        //checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("todo-checkbox");
        checkbox.checked = todo.checked; // Checkbox Status wird wiederherstellt
        checkbox.addEventListener("change", function(){
        
        // Suchen des Index des Todo-Objekts im Array anhand der ID
        const todoIndex = todosItemsInput.findIndex(todo => todo.id === todo.id);
        if (todoIndex !== -1) {

        // Aktualisieren des Checkbox-Status im Array
        todosItemsInput[todoIndex].checked = checkbox.checked;

        // Speichern des aktualisierten Arrays im localStorage
        saveToLocalStorage(todosItemsInput);

        }})
        item.appendChild(checkbox);

        //Todo-Einträge
        const inputText = document.createElement("span");
        inputText.textContent = `${todo.title} - ${todo.date}`;
        item.appendChild(inputText);


        // fügt in die Todo-Liste ein
        todoList.appendChild(item);

        const editBtn = document.createElement("button");
        editBtn.textContent = "Bearbeiten";

        editBtn.classList.add("editBtn");

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

        inputField.classList.add("category-input"); 
        inputFieldDate.classList.add("category-input");
        inputFieldDetail.classList.add("category-input");

        // Derzeitiger Inhalt wird mit neuen Content ersetzt
        item.innerHTML = ""; // Existierenden Inhalt leeren
        item.appendChild(inputField);
        item.appendChild(inputFieldDetail);
        item.appendChild(inputFieldDate);

        // Bearbeitete Einträge speichern
        const saveChangesBtn = document.createElement("button");
        saveChangesBtn.textContent = "Speichern";
        item.appendChild(saveChangesBtn);

        saveChangesBtn.classList.add("saveAddButton")

        function saveChanges() {

        // Lädt das aktuelle Array aus dem localStorage
        let inputValueArr = JSON.parse(localStorage.getItem('inputValueArr')) || [];

        const todoIndex = inputValueArr.findIndex(task => task.id === todo.id);
        if (todoIndex !==-1){
            // Der alte Inhalt wird durch den neuen Inhalt ersetzt
            inputValueArr[todoIndex].title = inputField.value.trim();
            inputValueArr[todoIndex].details = inputFieldDetail.value.trim();
            inputValueArr[todoIndex].date = inputFieldDate.value;
        }

        // Speichert das aktualisierte Array zurück in den localStorage
        localStorage.setItem('inputValueArr', JSON.stringify(inputValueArr));

        // Aktualisiert die Anzeige der geänderten Werten
        item.textContent = inputValueArr[todoIndex].title;
        item.textContent += " " + inputValueArr[todoIndex].details;
        item.textContent += " " + inputValueArr[todoIndex].date;

        // Buttons für Bearbeiten, Mehr Details und Löschen werden wieder hinzugefügt
        item.appendChild(deleteBtn);
        item.appendChild(editBtn);
        item.appendChild(descriptionBtn);

        }


    
        // Event Listener für save changes button
        saveChangesBtn.addEventListener("click", saveChanges);

        // Funktion, um die Änderungen zu speichern, wenn die Enter-Taste gedrückt wird
        function handleEnterKeyPress(event) {
        if (event.key === "Enter") {
           saveChanges();
         }
        }
        // Fügt den Event-Listener zu allen drei Eingabefeldern hinzu
        inputField.addEventListener("keydown", handleEnterKeyPress);
        inputFieldDetail.addEventListener("keydown", handleEnterKeyPress);
        inputFieldDate.addEventListener("keydown", handleEnterKeyPress);


        });

        item.appendChild(editBtn);


        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.classList.add("deleteButton");
       
        deleteBtn.addEventListener("click", function(){
            todoList.removeChild(item);
            
        // Lädt das aktuelle Array aus dem localStorage
        let inputValueArr = JSON.parse(localStorage.getItem('inputValueArr')) || [];

        // Entfernt das Element mit der entsprechenden taskId aus dem Array
        inputValueArr = inputValueArr.filter(task => task.id !== todo.id);

        // Speichert das aktualisierte Array zurück in den localStorage
        localStorage.setItem('inputValueArr', JSON.stringify(inputValueArr));


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

        descriptionBtn.classList.add("descriptionBtn");
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