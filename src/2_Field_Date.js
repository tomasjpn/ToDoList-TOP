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

export function detailsButton (elementId){
    const listElm = document.getElementById(elementId);
    const descriptionBtn = document.createElement("button");
    const descriptionInput = document.get("")
        descriptionBtn.id = "desc-btn";
        descriptionBtn.textContent = "mehr Details";
        descriptionBtn.addEventListener("click", ()=>{
           descriptionInput.style.display === "none" ? descriptionBtn.style.display = "block" : "none";
        })

        listElm.appendChild(descriptionBtn);


}