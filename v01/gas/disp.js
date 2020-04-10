/**
 * Wyświetla Browser.msg
 * @memberof Lib_Gas
 * @param {any} val Wartość do wyświetlenia
 * @returns {void} Tylko side effect
 */

const disp = val => {
	Browser.msgBox(String(val));
};

export { disp };

// Ta metoda jest również dostępna dla każdego obiektu bezpośredno w prototypie
