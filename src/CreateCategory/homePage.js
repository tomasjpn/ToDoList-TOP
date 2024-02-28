
import { loadFromLocalStorage } from "../localStorage";
import { loadTodoItems, refreshTodos } from "./loadTodoItems";


export function homePage () {

    const listElm = document.getElementById("todo-list");

    const homeBtn = document.getElementById("home-Btn");
    homeBtn.addEventListener("click", function(event) {
        // Verhindert das Standardverhalten (Seitenaktualisierung) des Buttons
        event.preventDefault();
        // Setze den Inhalt von auf den ursprünglichen Home-Inhalt zurück
        const savedContent = loadFromLocalStorage();
        if (savedContent !==null) {
            document.getElementById("todo-list").innerHTML =savedContent;

        } else {
            document.getElementById("todo-list").innerHTML = "<p>Keine Todos gefunden. Füge einige hinzu!</p>";
        }        

        loadTodoItems();
    });

    
}

