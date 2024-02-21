// deleteAndAdd.js
import { detailsButton } from "./2_Field_Date";
import { editTask } from "./edit";
import { saveToLocalStorage } from '/src/localStorage.js'; // Importieren Sie die Funktion saveToLocalStorage

export function addInput () {
    const inputValue = document.getElementById("task");
    const listTodo = document.getElementById("todo-list");

    const taskDetail = document.getElementById("task-description");
    const taskDate = document.getElementById("task-date");

    const createLiElm = document.createElement("li");
    const uniqueId = Date.now();
    createLiElm.id = `listElm-${uniqueId}`;

    createLiElm.textContent = `${inputValue.value}-${taskDate.value}`;
    listTodo.appendChild(createLiElm);
    inputValue.value = "";

    // Hier speichern wir den aktuellen Stand der Liste in localStorage nach dem Hinzufügen einer neuen Aufgabe
    saveToLocalStorage(listTodo.innerHTML);

    function DeleteButton(createLiElm) {
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "löschen";
        createLiElm.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
            listTodo.removeChild(createLiElm);
            // Nach dem Löschen einer Aufgabe speichern wir den aktualisierten Stand in localStorage
            saveToLocalStorage(listTodo.innerHTML);
        });
    }
    DeleteButton(createLiElm);
    editTask(`listElm-${uniqueId}`);
    detailsButton (`listElm-${uniqueId}`);
}
