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
    descriptionDisplay.style.display = "none"; // Versteckt den Inhalt aus "Mehr Details" anfangs
    listElm.appendChild(descriptionDisplay);

    const descriptionBtn = document.createElement("button");
    descriptionBtn.id = "description-btn";
    descriptionBtn.textContent = "Mehr Details";
    descriptionBtn.addEventListener("click", () => {
        const descriptionText = descriptionInput.value.trim(); // Text aus dem Input-Feld abrufen

        if (descriptionText) {
            descriptionDisplay.textContent = descriptionText;

            // Erstelle das Overlay für den Fokus-Bereich
            const overlay = document.createElement('div');
            overlay.id = 'overlay';
            document.body.appendChild(overlay);

            // Füge der body-Klasse 'blur-background' hinzu, um den Hintergrund zu verschwimmen
            document.body.classList.add('blur-background');


            setTimeout(() => {
                overlay.style.opacity = '1'; // Zeige das Overlay
                descriptionDisplay.style.opacity = '1'; // Zeige die Detailansicht
            }, 10);


            // Füge einen Eventlistener hinzu, um das Overlay zu entfernen
        overlay.addEventListener('click', () => {
            overlay.style.opacity = '0'; // Verstecke das Overlay
            descriptionDisplay.style.opacity = '0'; // Verstecke die Detailansicht
            setTimeout(() => {
                overlay.remove(); // Entferne das Overlay aus dem DOM
                // Entferne die 'blur-background' Klasse vom body, um den unscharfen Hintergrund zurückzusetzen
                document.body.classList.remove('blur-background');
            }, 300); // Wartezeit für den Übergang, bevor das Overlay entfernt wird
        });
            

            // Positioniere das Detail-Display zentriert auf dem Bildschirm
            descriptionDisplay.style.position = 'fixed';
            descriptionDisplay.style.top = '50%';
            descriptionDisplay.style.left = '50%';
            descriptionDisplay.style.transform = 'translate(-50%, -50%)';
            descriptionDisplay.style.zIndex = '10000';
            descriptionDisplay.style.display = 'block';

            // Füge einen Eventlistener hinzu, um das Overlay zu entfernen
            overlay.addEventListener('click', () => {
                descriptionDisplay.style.display = 'none';
                overlay.remove();
                // Entferne die 'blur-background' Klasse vom body, um den unscharfen Hintergrund zurückzusetzen
                document.body.classList.remove('blur-background');
            });
        }
    });

    listElm.appendChild(descriptionBtn);
}
