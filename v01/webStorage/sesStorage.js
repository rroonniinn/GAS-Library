/**
 * Serializuje przekazane dane i zapisuje je pod wskazanym
 * kluczem w sessionStorage. Zwraca przekazane dane do dalszej manipulacji
 */

const sesStorage = {
	/**
	 * Zapisuje dane do sessionStorage.
	 * @param {string} key Nazwa klucza
	 * @param {*} data Dane do zapisania
	 * @param {boolean} [isJson] Opcjonalne info, czy przekazane dane to JSON,
	 * 		jeśli tak to nie zamienia ich na JSONa.
	 */

	set: (key, data, isJson = false) => {
		const dataToSave = isJson ? data : JSON.stringify(data);

		sessionStorage.setItem(key, dataToSave);
		return data;
	},

	/**
	 * Pobiera dane z sessionStorage
	 * @param {string} key Nazwa klucza
	 */

	get: key => JSON.parse(sessionStorage.getItem(key)),
	/**
	 * Usuwa dane z sessionStorage
	 * @param {string} key Nazwa klucza do usunięcia danych
	 */

	del: key => sessionStorage.removeItem(key),
};

export { sesStorage };
