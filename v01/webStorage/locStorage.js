/**
 * Serializuje przekazane dane i zapisuje je pod wskazanym
 * kluczem w localStorage. Zwraca przekazane dane do dalszej manipulacji
 */

const locStorage = {
	/**
	 * Zapisuje dane do localStorage
	 * @param {string} key Nazwa klucza
	 * @param {*} data Dane do zapisania
	 */

	set: (key, data) => {
		localStorage.setItem(key, JSON.stringify(data));
		return data;
	},

	/**
	 * Pobiera dane z localStorage
	 * @param {string} key Nazwa klucza
	 */

	get: key => JSON.parse(localStorage.getItem(key)),
};

export { locStorage };
