export const editTask = ()=>{
    const listElm = document.getElementById("listElm");

    //Edit Button wird erstellt
    const editBtn = document.createElement("button");
    editBtn.id = "editBtn";
    editBtn.textContent = "Bearbeiten";
    

    //Funktion für den Edit Button
    editBtn.addEventListener("click", ()=>{

        const currentTask = listElm.textContent.trim();

        //Input Feld für Edit Button
        const inputField = document.createElement("input");
        inputField.type= "text";
        inputField.value = currentTask;
        listElm.appendChild(inputField);


        //Save Button 
        const saveChangesBtn = document.createElement("button");
        saveChangesBtn.textContent = "Speichern";
        listElm.appendChild(saveChangesBtn)

        function saveChanges () {
            const newText = inputField.value.trim();
            listElm.textContent = newText;
            
            listElm.removeChild(inputField);
            listElm.removeChild(saveChangesBtn);
        }

        saveChangesBtn.addEventListener("click", saveChanges);
        inputField.addEventListener("keydown",(event)=>{
            if (event.key === "Enter") {
                saveChanges();
            }

        });
    });
    listElm.appendChild(editBtn);
} 