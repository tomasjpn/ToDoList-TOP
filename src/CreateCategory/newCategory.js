import { loadFromLocalStorage, saveToLocalStorage } from "../localStorage";
import { loadTodoItems } from "./loadTodoItems";



export function createCategory() {

    const addButton = document.getElementById("addCategory-Btn");
    const uniqueId = Date.now();
    
    //Add-Category Button
    addButton.addEventListener("click", function() {
        // Input-Feld erstellen
        const nameCategoryInput = document.createElement("input");
        nameCategoryInput.type = "text";
        nameCategoryInput.placeholder = "Name der Kategorie";
        nameCategoryInput.id = `category-${uniqueId}`;

        nameCategoryInput.classList.add("category-input");
        

        // Fügt das Input-Feld direkt nach dem Add-Category-Button ein
        addButton.parentNode.insertBefore(nameCategoryInput, addButton.nextSibling);


        //Save-AddButton
        const saveAddButton = document.createElement("button");
        saveAddButton.id = `saveAddButton-${uniqueId}`;
        saveAddButton.textContent = "Bestätigen";
        addButton.parentNode.insertBefore(saveAddButton, nameCategoryInput.nextSibling);
        saveAddButton.classList.add("saveAddButton");
        saveAddButton.addEventListener("click", function() {
            

            // Stellt sicher, dass nameCategoryInput nicht leer ist
            if (nameCategoryInput.value.trim() !== "") {
                const newCategoryBtn = document.createElement("button");
                newCategoryBtn.textContent = nameCategoryInput.value;
                newCategoryBtn.id = `categoryBtn-${uniqueId}`;

                newCategoryBtn.classList.add("category-button"); // Wird der Klasse entsprechneden Klasse hinzugefügt
        
                newCategoryBtn.addEventListener("click", function(event) {

                    event.preventDefault();
                    document.getElementById("todo-list").innerHTML ="";

                    const currentCategory = newCategoryBtn.textContent;
                    // Speichern der aktuellen Kategorie im localStorage für die Persistenz
                    localStorage.setItem('currentCategory', currentCategory);
                    loadTodoItems(currentCategory);
                    

                });
        
                // Logik für das Klicken auf den neuen Kategorie-Button
                const homeBtn = document.getElementById("home-Btn");
                homeBtn.parentNode.insertBefore(newCategoryBtn, homeBtn.nextElementSibling);
        
                nameCategoryInput.remove(); // Entfernt das Eingabefeld
                saveAddButton.remove(); // Entfernt den Save-Add-Button selbst
            }

        });


        // Listener für die Eingabetaste im Input-Feld
        nameCategoryInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter" && e.target.value.trim() !== "") {

                const currentContent = document.getElementById("todo-list").innerHTML;
                saveToLocalStorage(currentContent);
                
                // Erstellt einen neuen Button für die Kategorie
                const newCategoryBtn = document.createElement("button");
                newCategoryBtn.textContent = e.target.value;
                newCategoryBtn.id = `categoryBtn-${uniqueId}`;
                newCategoryBtn.classList.add("category-button");

                // Ereignisbehandler für den neuen Kategorie-Button hinzufügen
                newCategoryBtn.addEventListener("click", function(event) {
                    // Verhindert das Standardverhalten (Seitenaktualisierung) des Buttons
                    event.preventDefault();

                    //löscht den Inhalt
                    document.getElementById("todo-list").innerHTML ="";

                    const currentCategory = newCategoryBtn.textContent;
                    localStorage.setItem("currentCategory", currentCategory);
                    loadTodoItems(currentCategory);
                });

                // Fügt den neuen Kategorie-Button neben dem Home-Button ein
                const homeBtn = document.getElementById("home-Btn");
                homeBtn.parentNode.insertBefore(newCategoryBtn, homeBtn.nextElementSibling);

                
                // Stellt sicher, dass das Input-Feld nach der Verwendung entfernt wird
                e.target.remove();
                saveAddButton.remove();
            }
        });
    });

}