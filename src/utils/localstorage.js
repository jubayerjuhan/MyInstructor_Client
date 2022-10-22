export const storeAtLocalStorage = (key, value) => {
  const stringifiedValue = JSON.stringify(value);
  return localStorage.setItem(key, stringifiedValue);
};

export const getLocalStorageData = (key) => {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
};
