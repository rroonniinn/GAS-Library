/**
 * Kopiuje właściwości obiektu b do a, zwraca a. Jeśli klucze
 * się powtarzają to nadpisuje wartość w obiekcie a. Zwykły Object.assign
 * ale zajmujący mniej miejsca.
 * @param {Object<string, any>} a Target object
 * @param {Object<string, any>} b Slave object
 * @returns {Object<string, any>} Obiekt posiadający wszystkie właściwości
 */

export const oa = (a, b) => Object.assign(a, b);
