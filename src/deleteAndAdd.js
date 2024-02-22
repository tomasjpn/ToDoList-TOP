import { detailsButton } from "./2_Field_Date";
import { editTask } from "./edit";
import { saveToLocalStorage } from "./localStorage";

export function addInput (){
    
    // Inhalt aus dem  Eingabefeld ToDo Listen Container werden geholt
    const inputValue = document.getElementById("task");
    const listTodo = document.getElementById("todo-list");
    const addTaskForm = document.getElementById("add-task-form");

    //Zweites Eingabefeld mit Datum Eingabefeld
    const taskDetail = document.getElementById("task-description");
    const taskDate = document.getElementById("task-date");
    

    //Erstellen des Listenelement li
    const createLiElm = document.createElement("li");
    const uniqueId = Date.now();
    createLiElm.id = `listElm-${uniqueId}`;
    if ("fromForm") {
    

    // Listenelement li = Input Value
    createLiElm.textContent = `${inputValue.value}-${taskDate.value}`;
    listTodo.appendChild(createLiElm);
    
    //Eingabefeld wird geleert
    inputValue.value = "";


    // Hinzufügen Button wird entfernt
    addTaskForm.style.display = "none";
    
    //Speichern des derzeitigen Inhalts
    const currentContent = listTodo.innerHTML;
    saveToLocalStorage(currentContent);
    }

    
    function DeleteButton(createLiElm) {
        // Erstellt den Löschen-Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "löschen";
        createLiElm.appendChild(deleteBtn);
    
        // Fügt dem Löschen-Button einen Event-Listener hinzu
        deleteBtn.addEventListener("click", () => {
            listTodo.removeChild(createLiElm);
        });

        //Speichern des derzeitigen Inhalts
        const currentContent = listTodo.innerHTML;
        saveToLocalStorage(currentContent);
    }
    DeleteButton(createLiElm);
    editTask(`listElm-${uniqueId}`);
    detailsButton (`listElm-${uniqueId}`);


}