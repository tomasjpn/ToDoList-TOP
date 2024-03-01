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

    // Stelle sicher, dass 'inputValueArr' aus dem LocalStorage aktualisiert wird
    let inputValueArr = JSON.parse(localStorage.getItem('inputValueArr')) || [];
    

    if ("fromForm") {

        //Objekt für den Input Eintrag
        const newTask = {
            id: uniqueId,
            title: inputValue.value,
            date: taskDate.value,
            details: taskDetail.value
        };
    

    // Listenelement li = Input Value
    createLiElm.textContent = `${inputValue.value}-${taskDate.value}`;
    listTodo.appendChild(createLiElm);

    //Das Objekt wird in das Array hinzugefügt und anschließend in den localStorage
    inputValueArr.push(newTask);
    localStorage.setItem('inputValueArr', JSON.stringify(inputValueArr));
    
    
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
        deleteBtn.id = "deleteTask-btn"
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