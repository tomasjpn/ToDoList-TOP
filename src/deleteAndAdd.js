export function addInput (){
    // Inhalt aus dem  Eingabefeld ToDo Listen Container werden geholt
    const inputValue = document.getElementById("task");
    const listTodo = document.getElementById("todo-list");

    //Erstellen des Listenelement li
    const createLiElm = document.createElement("li");

    // Listenelement li = Input Value
    createLiElm.textContent = inputValue.value;
    listTodo.appendChild(createLiElm);
    
    //Eingabefeld wird geleert
    inputValue.value = "";


}


const addTaskForm = document.getElementById("add-task-form");



addTaskForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    addInput();
})