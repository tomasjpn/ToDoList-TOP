import { InputExtension } from "./2_Field_Date";

export function displayAddTask () {
   
    const showInputBtn = document.getElementById("show-input-btn");
    const inputContainer = document.getElementById("input-container");
    const addTaskForm = document.getElementById("add-task-form");
    InputExtension();

    
    showInputBtn.addEventListener("click",()=>{ 
        inputContainer.style.display ="block"; // Das ganze Forum wird angezeigt
        addTaskForm.style.display="block"; // Wird angezeigt, wenn der "Neue Aufgabe hinzufügen" Button betätigt wird
        
    });
}