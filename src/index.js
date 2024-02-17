
import { detailsButton } from "./2_Field_Date";
import { addInput } from "./deleteAndAdd";
import { displayAddTask } from "./displayAddTask";

// Wenn der Submit Button betätigt wird, dann soll addInput Funktion aufgerufen werden
const addTaskForm = document.getElementById("add-task-form");
addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addInput(true);
});


displayAddTask();
