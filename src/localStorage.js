let todosItems = loadFromLocalStorage() || [];

// Funktion zum Speichern der Projekte (und Todos) in localStorage
export function saveToLocalStorage(todoItems) {
    localStorage.setItem('todoList', JSON.stringify(todoItems));
}

// Funktion zum Laden der Daten aus localStorage beim ersten Laden der App
export function loadFromLocalStorage() {
    const savedContent = localStorage.getItem('todoList');
    return savedContent ? JSON.parse(savedContent) : [];
}