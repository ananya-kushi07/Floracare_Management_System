// Function to set a key-value pair in localStorage
function setLocalStorage(key, value) {
    // Check if the value is an object or array and stringify it
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
}

// Function to get a value from localStorage
function getLocalStorage(key) {
    const value = localStorage.getItem(key);
    // Try to parse the value as JSON, if it fails return the raw value
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
}

function clearLocalStorage(key) {
    if (localStorage.getItem(key) !== null) {
        localStorage.removeItem(key);
    } 
}

export { setLocalStorage,getLocalStorage,clearLocalStorage };