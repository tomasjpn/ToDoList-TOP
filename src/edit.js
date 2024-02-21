export const editTask = (elementId)=>{
    const listElm = document.getElementById(elementId);
    

    //Edit Button wird erstellt
    const editBtn = document.createElement("button");
    editBtn.id = "editBtn";
    editBtn.textContent = "Bearbeiten";
    

    //Funktion für den Edit Button
    editBtn.addEventListener("click", ()=>{

        const currentTask = listElm.textContent.trim();

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


            //die Input Felder sowie der Speichern Button werden entfernt
            listElm.removeChild(inputField);
            listElm.removeChild(saveChangesBtn);
        }

        // Speicherbutton angedrückt -> function saveChanges
        saveChangesBtn.addEventListener("click", saveChanges);
        // Eingabefeld bei Betätigen vom Enter -> function saveChanges
        inputField.addEventListener("keydown",(event)=>{
            if (event.key === "Enter") {
                saveChanges();
            }

        });
    });
    //Edit button wird hinzugefügt zur der Liste
    listElm.appendChild(editBtn);
} 