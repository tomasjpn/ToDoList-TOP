export const editTask = (elementId)=>{
    const listElm = document.getElementById(elementId);
    

    //Edit Button wird erstellt
    const editBtn = document.createElement("button");
    editBtn.id = "editBtn";
    editBtn.textContent = "Bearbeiten";
    

    //Funktion für den Edit Button
    editBtn.addEventListener("click", ()=>{
        const todoList = document.getElementById("todo-list");


        //Input Feld (Titel, Details, Datum) für Edit Button
        const inputField = document.createElement("input");
        const inputFieldDate = document.createElement ("input");
        const inputFieldDetail = document.createElement("input");


        inputFieldDate.type = "date"
        inputFieldDate.value = ""; // --> Input Felder werden geleert

        inputField.type= "text";
        inputField.value = "";
        inputField.placeholder = "Titel";

        inputFieldDetail.type = "text";
        inputFieldDetail.value = ""; 
        inputFieldDetail.placeholder = "Details"


        // DOM die Input Felder werden hinzugefügt
        listElm.appendChild(inputField);
        listElm.appendChild(inputFieldDetail);
        listElm.appendChild(inputFieldDate);


        //Save Button 
        const saveChangesBtn = document.createElement("button");
        saveChangesBtn.textContent = "Speichern";
        listElm.appendChild(saveChangesBtn)

        // Der vorhandene Listen Eintrag wird durch Input Eingabe ersetzt, dannach verschwinden die Buttons
        function saveChanges () {
            const newText = inputField.value.trim();
            const newDate = inputFieldDate.value.trim();
            const newDetail = inputFieldDetail.value.trim();


            // Der alte Inhalt wird durch den neuen Inhalt ersetzt
            listElm.textContent = newText;
            listElm.textContent += " " + newDetail;
            listElm.textContent += " " + newDate;

            listElm.appendChild(editBtn);


        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
       
        deleteBtn.addEventListener("click", function(){
            todoList.removeChild(listElm);
            
        // Lädt das aktuelle Array aus dem localStorage
        let inputValueArr = JSON.parse(localStorage.getItem('inputValueArr')) || [];

        // Entfernt das Element mit der entsprechenden taskId aus dem Array
        inputValueArr = inputValueArr.filter(task => task.id !== todo.id);

        // Speichert das aktualisierte Array zurück in den localStorage
        localStorage.setItem('inputValueArr', JSON.stringify(inputValueArr));


        })
            listElm.appendChild(deleteBtn);




            // Erstellt ein Element zur Anzeige der Details
        const descriptionDisplay = document.createElement("span"); 
        descriptionDisplay.id = "description-display"
        
        descriptionDisplay.style.display = "none"; // Versteckt das Anzeigeelement anfangs;
        listElm.appendChild(descriptionDisplay);


        // Mehr Details Button
        const descriptionBtn = document.createElement("button");
        descriptionBtn.textContent = "Details";
        descriptionBtn.addEventListener("click",()=>{
            if (descriptionDisplay.style.display === "none") {
                descriptionDisplay.textContent = inputFieldDetail.value; // Text Content wird auf den eingegeben Todo Eintrag gestzt
                descriptionDisplay.style.display = "block";
                descriptionBtn.textContent = "Weniger anzeigen" // Zeigt die Details an
            } else {
                descriptionDisplay.style.display = "none";
                descriptionBtn.textContent = "Mehr Details" // Versteckt die Details wieder
            }


        });

        listElm.appendChild(descriptionBtn);

        }

    // Event Listener für save changes button
    saveChangesBtn.addEventListener("click", saveChanges);

    // Funktion, um die Änderungen zu speichern, wenn die Enter-Taste gedrückt wird
    function handleEnterKeyPress(event) {
    if (event.key === "Enter") {
        saveChanges();
     }
    }
    // Fügt den Event-Listener zu allen drei Eingabefeldern hinzu
    inputField.addEventListener("keydown", handleEnterKeyPress);
    inputFieldDetail.addEventListener("keydown", handleEnterKeyPress);
    inputFieldDate.addEventListener("keydown", handleEnterKeyPress);
    });
    //Edit button wird hinzugefügt zur der Liste
    listElm.appendChild(editBtn);
}