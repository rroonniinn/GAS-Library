/**
 * Funkcja przyjmująca jako argument opcje z selecta
 * @callback RemoveOptionsCallback
 * @param {HTMLOptionElement} opt
 */

/**
 * Usuwa istniejące w selekcie opcje, które
 * przejdą pozytywnie test przekazany w callbacku
 * @param {HTMLSelectElement} select
 * @param {RemoveOptionsCallback} callback
 */

const selectRemoveOptions = (select, callback) => {
	[...select.options].forEach(opt => {
		if (callback(opt)) {
			return select.remove(opt.index);
		}
	});
};

export { selectRemoveOptions };
