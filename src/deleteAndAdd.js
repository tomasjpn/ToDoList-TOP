import { editTask } from "./edit";

export function addInput (){
    // Inhalt aus dem  Eingabefeld ToDo Listen Container werden geholt
    const inputValue = document.getElementById("task");
    const listTodo = document.getElementById("todo-list");
    const addTaskForm = document.getElementById("add-task-form");

    //Erstellen des Listenelement li
    const createLiElm = document.createElement("li");
    const uniqueId = Date.now();
    createLiElm.id = `listElm-${uniqueId}`;
    if ("fromForm") {
    

    // Listenelement li = Input Value
    createLiElm.textContent = inputValue.value;
    listTodo.appendChild(createLiElm);
    
    //Eingabefeld wird geleert
    inputValue.value = "";


    // Hinzufügen Button wird entfernt
    addTaskForm.style.display = "none";
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
    }
    DeleteButton(createLiElm);
    editTask(`listElm-${uniqueId}`);


}

