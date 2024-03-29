import { homePage } from "./CreateCategory/homePage";
import { loadTodoItems, refreshTodos } from "./CreateCategory/loadTodoItems";
import { createCategory } from "./CreateCategory/newCategory";
import { addInput } from "./deleteAndAdd";
import { displayAddTask } from "./displayAddTask";
import { loadFromLocalStorage } from "./localStorage";
import "../dist/styles.css";

// Wenn der Submit Button betätigt wird, dann soll addInput Funktion aufgerufen werden
const addTaskForm = document.getElementById("add-task-form");
addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addInput(true);
});

document.addEventListener("DOMContentLoaded", function() {
    const currentCategory = localStorage.getItem('currentCategory') || "HomePage";
    // Wenn currentCategory nicht gesetzt ist, setze es auf "HomePage"
    if (!currentCategory) {
        currentCategory = "HomePage";
        localStorage.setItem("currentCategory", currentCategory);
    }
    loadTodoItems(currentCategory);
  });
//gespeicherter Zustand wird automatisch geladen, wenn die Seite neu geladen bzw. gespeichert
document.addEventListener("DOMContentLoaded", function (){
    const savedContent = loadFromLocalStorage();
    if(savedContent){
        document.getElementById("todo-list").innerHTML = savedContent; 
    }
})

document.addEventListener("DOMContentLoaded", function (){
    const savedContent = loadFromLocalStorage();
    // Angenommen, loadFromLocalStorage gibt ein Array von Todos zurück
    if (Array.isArray(savedContent) && savedContent.length > 0) {
        // Stellt sicher, dass refreshTodos korrekt aufgerufen wird
        refreshTodos(savedContent);
    } else {
        // Wenn kein Inhalt geladen wurde oder es kein Array ist, handle den Fall entsprechend
        console.log("Keine gespeicherten Todos gefunden oder ungültiges Format.");
    }
})




displayAddTask();
createCategory();
homePage();