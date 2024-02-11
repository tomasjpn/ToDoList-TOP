export function addInput (){
    // Inhalt aus dem  Eingabefeld ToDo Listen Container werden geholt
    const inputValue = document.getElementById("task");
    const listTodo = document.getElementById("todo-list");
    const addTaskForm = document.getElementById("add-task-form");

    //Erstellen des Listenelement li
    const createLiElm = document.createElement("li");
    if ("fromForm") {
    

    // Listenelement li = Input Value
    createLiElm.textContent = inputValue.value;
    listTodo.appendChild(createLiElm);
    
    //Eingabefeld wird geleert
    inputValue.value = "";


    addTaskForm.style.display = "none";
    }



    // Delete Button
    const deleteInput = () => {

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "löschen"
        createLiElm.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", ()=>{
            listTodo.removeChild(createLiElm);
        })
        
    }

    deleteInput();


}

