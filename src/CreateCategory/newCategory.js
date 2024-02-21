// Hauptdatei

import { saveToLocalStorage, loadFromLocalStorage } from '/src/localStorage.js';


export function createCategory() {
    const addButton = document.getElementById("addCategory-Btn");
    // Ursprünglichen Home-Inhalt einmalig speichern
    let originalHomeContent = document.getElementById("app").innerHTML;

    // Laden der Daten aus localStorage beim ersten Laden der App
    const savedContent = loadFromLocalStorage();
    if (savedContent) {
        originalHomeContent = savedContent;
    }

    addButton.addEventListener("click", function() {
        // Input-Feld erstellen
        const nameCategoryInput = document.createElement("input");
        nameCategoryInput.type = "text";
        nameCategoryInput.placeholder = "Name der Category";
        const uniqueId = Date.now();
        nameCategoryInput.id = `category-${uniqueId}`;

        // Fügt das Input-Feld direkt nach dem Add-Category-Button ein
        addButton.parentNode.insertBefore(nameCategoryInput, addButton.nextSibling);

        // Listener für die Eingabetaste im Input-Feld
        nameCategoryInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
                // Erstellt einen neuen Button für die Kategorie
                const newCategoryBtn = document.createElement("button");
                newCategoryBtn.textContent = e.target.value;
                newCategoryBtn.id = `categoryBtn-${uniqueId}`;

                // Ereignisbehandler für den neuen Kategorie-Button hinzufügen
                newCategoryBtn.addEventListener("click", function(event) {
                    // Verhindert das Standardverhalten (Seitenaktualisierung) des Buttons
                    event.preventDefault();
                    // Setze den Inhalt von #app auf den ursprünglichen Home-Inhalt zurück
                    document.getElementById("app").innerHTML = originalHomeContent;
                    // Input-Felder leeren
                    nameCategoryInput.value = ''; 
                });

                // Fügt den neuen Kategorie-Button neben dem Home-Button ein
                const homeBtn = document.getElementById("home-Btn");
                homeBtn.parentNode.insertBefore(newCategoryBtn, homeBtn.nextElementSibling);

                // Speichere den aktuellen Home-Inhalt in localStorage
                saveToLocalStorage(originalHomeContent);

                // Stellt sicher, dass das Input-Feld nach der Verwendung entfernt wird
                e.target.remove();
            }
        });
    });

    

    const homeBtn = document.getElementById("home-Btn");
    homeBtn.addEventListener("click", function(event) {
        // Verhindert das Standardverhalten (Seitenaktualisierung) des Buttons
        event.preventDefault();
        // Setze den Inhalt von #app auf den ursprünglichen Home-Inhalt zurück
        document.getElementById("app").innerHTML = originalHomeContent;
        
    });
}
