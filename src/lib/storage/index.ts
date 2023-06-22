export const setStorageData = (key: string, data: any) => {
    localStorage.setItem(key, data);
}

export const getStorageData = (key: string) => {
    return localStorage.getItem(key) || null; 
}

export const clearStorageData = (key: string = '') => {
    if(key) {
        localStorage.removeItem(key);
        return;
    }
    localStorage.clear();
}