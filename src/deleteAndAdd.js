import { detailsButton } from "./2_Field_Date";
import { editTask } from "./edit";
import { saveToLocalStorage } from "./localStorage";

export function addInput (){

    let currentCategory = localStorage.getItem('currentCategory') || localStorage.getItem("homePage");
    
    // Wenn currentCategory nicht gesetzt ist, setze es auf "HomePage"
    if (!currentCategory) {
        currentCategory = "HomePage";
        localStorage.setItem("currentCategory", currentCategory);
    }
    
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
    
    //Objekt für den Input Eintrag
    const newTask = {
        id: uniqueId,
        title: inputValue.value,
        date: taskDate.value,
        details: taskDetail.value,
        category: currentCategory
    };

    if ("fromForm") {

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


        

        // Entfernt das Element mit der entsprechenden taskId aus dem Array
        inputValueArr = inputValueArr.filter(task => task.id !== uniqueId);

        // Speichert das aktualisierte Array zurück in den localStorage
        localStorage.setItem('inputValueArr', JSON.stringify(inputValueArr));
        saveToLocalStorage(listTodo.innerHTML);

        });


    }

    DeleteButton(createLiElm);
    editTask(`listElm-${uniqueId}`);
    detailsButton (`listElm-${uniqueId}`);


}