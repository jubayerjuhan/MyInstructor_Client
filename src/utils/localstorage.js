export const storeAtLocalStorage = (key, value) => {
  const stringifiedValue = JSON.stringify(value);
  return localStorage.setItem(key, stringifiedValue);
};
