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
    listTodo.classList.add("todo-item");

    // Stelle sicher, dass 'inputValueArr' aus dem LocalStorage aktualisiert wird
    let inputValueArr = JSON.parse(localStorage.getItem('inputValueArr')) || [];
    

    if ("fromForm") {

    //checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    checkbox.checked = false; 

        // Checkbox Status wird wiederherstellt
        checkbox.addEventListener("change", function(){

        // Aktualisieren des Checkbox-Status im entsprechenden Todo-Objekt im Array
        const todoIndex = inputValueArr.findIndex(task => task.id === uniqueId);

        // Überprüft ob das akteulle Todo Objekt im Array gefunden wurden
        if (todoIndex !== -1) {
        inputValueArr[todoIndex].checked = checkbox.checked;
        // Speichern des aktualisierten Arrays im Local Storage
        localStorage.setItem('inputValueArr', JSON.stringify(inputValueArr));
    }
        })


    createLiElm.appendChild(checkbox);

    // Listenelement li = Input Value
    const taskText = document.createElement("span");
    taskText.textContent = `${inputValue.value}-${taskDate.value}`;
    createLiElm.appendChild(taskText);

    listTodo.appendChild(createLiElm);


    //Objekt für den Input Eintrag
    const newTask = {
        id: uniqueId,
        title: inputValue.value,
        date: taskDate.value,
        details: taskDetail.value,
        category: currentCategory,
        checked: checkbox.checked
    };

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