let todosItems = loadFromLocalStorage() || [];

// Funktion zum Speichern der Projekte (und Todos) in localStorage
export function saveToLocalStorage(todoItems) {
    localStorage.setItem('todos', JSON.stringify(todoItems));
}

export function loadFromLocalStorage() {
    const data = localStorage.getItem('todos');
    if (!data) return []; // Wenn nichts im LocalStorage ist, gib ein leeres Array zurück
    try {
        const parsedData = JSON.parse(data);
        if (Array.isArray(parsedData)) return parsedData; // Stelle sicher, dass es ein Array ist
        else return []; // Wenn geparsedData kein Array ist, gib ein leeres Array zurück
    } catch (e) {
        console.error('Error parsing todos from localStorage:', e);
        return []; // Im Fehlerfall ein leeres Array zurückgeben
    }
}
