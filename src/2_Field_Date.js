export function InputExtension () {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('add-task-form');
    
        // Erstellt ein neues Eingabefeld für die Beschreibung
        const descriptionInput = document.createElement('input');
        descriptionInput.type = 'text';
        descriptionInput.id = 'task-description';
        descriptionInput.name = 'taskDescription';
        descriptionInput.placeholder = 'Beschreibung der Aufgabe';
        form.insertBefore(descriptionInput, form.lastElementChild);

    
        // Erstellt ein Eingabefeld für das Datum
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.id = 'task-date';
        dateInput.name = 'taskDate';
        form.insertBefore(dateInput, form.lastElementChild);
    }); 
}

//Button für Details
export function detailsButton(elementId) {
    const listElm = document.getElementById(elementId);
    const descriptionInput = document.getElementById("task-description");

    // Erstellt ein Element zur Anzeige der Details
    const descriptionDisplay = document.createElement("span"); 
    descriptionDisplay.id = "description-display";

    descriptionDisplay.style.display = "none"; // Versteckt das Anzeigeelement anfangs
    listElm.appendChild(descriptionDisplay);

    const descriptionBtn = document.createElement("button");
    descriptionBtn.id = "description-btn";
    descriptionBtn.textContent = "Mehr Details";
    descriptionBtn.addEventListener("click", () => {
        
        if (descriptionDisplay.style.display === "none") {
            descriptionDisplay.textContent = descriptionInput.value; // Kopiert den Inhalt bei Klick
            descriptionDisplay.style.display = "block";
            descriptionBtn.textContent = "Weniger anzeigen" // Zeigt die Details an
        } else {
            descriptionDisplay.style.display = "none";
            descriptionBtn.textContent = "Mehr Details" // Versteckt die Details wieder
        }
    });
    listElm.appendChild(descriptionBtn);
}