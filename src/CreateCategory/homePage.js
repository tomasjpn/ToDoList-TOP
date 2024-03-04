
import { loadFromLocalStorage } from "../localStorage";
import { loadTodoItems, refreshTodos } from "./loadTodoItems";


export function homePage () {

    const listElm = document.getElementById("todo-list");

    const homeBtn = document.getElementById("home-Btn");
    homeBtn.addEventListener("click", function(event) {

        // Verhindert das Standardverhalten (Seitenaktualisierung) des Buttons
        event.preventDefault();
        
        // Setze den Inhalt von auf den ursprünglichen Home-Inhalt zurück
        const currentCategory = localStorage.getItem("HomePage");

        // Muss zuerst überprüft werden, ob die Kategorie gefunden wurde, sonst würde es versuchen, ToDo Elemente für eine nicht vorhandene Kategorie zu laden
        if (currentCategory) {
            listElm.innerHTML = "";
        
            //Home Page Inhalt wird aufgerufen und in loadTodoItems() eingesetzt
            localStorage.setItem("currentCategory", currentCategory);
            loadTodoItems(currentCategory)

        } else {
            listElm.innerHTML = "<p>Keine Todos gefunden. Füge einige hinzu!</p>";
        }        
    });

    
}

