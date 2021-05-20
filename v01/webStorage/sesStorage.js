/**
 * Serializuje przekazane dane i zapisuje je pod wskazanym
 * kluczem w sessionStorage. Zwraca przekazane dane do dalszej manipulacji
 */

const sesStorage = {
	/**
	 * Zapisuje dane do sessionStorage
	 * @param {string} key Nazwa klucza
	 * @param {*} data Dane do zapisania
	 */

	set: (key, data) => {
		sessionStorage.setItem(key, JSON.stringify(data));
		return data;
	},

	/**
	 * Pobiera dane z sessionStorage
	 * @param {string} key Nazwa klucza
	 */

	get: key => JSON.parse(sessionStorage.getItem(key)),
};

export { sesStorage };
