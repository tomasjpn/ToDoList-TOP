// Funktion zum Speichern der Projekte (und Todos) in localStorage
export function saveToLocalStorage(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
}

// Funktion zum Laden der Daten aus localStorage beim ersten Laden der App
export function loadFromLocalStorage() {
    const savedContent = localStorage.getItem('todoList');
    if (savedContent) {
        return JSON.parse(savedContent);
    }
    return null;
}