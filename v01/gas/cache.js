import { crush, uncrush } from '../gas-mcpher/crush';
import { roughSizeOfObject } from '../utils/roughSizeOfObject';

const isStoreProper = kind =>
	['document', 'script', 'user'].includes(kind);

const getCacheStore = kind => {
	if (isStoreProper(kind)) {
		const options = {
			document: CacheService.getDocumentCache(),
			script: CacheService.getScriptCache(),
			user: CacheService.getUserCache(),
		};
		return options[kind];
	}
	throw new Error('Nieprawidłowy Cache store...');
};

const deleteCache = (kind, key) => getCacheStore(kind).remove(key);

const setCache = (kind, propObj, expirationTime = 600) => {
	const store = getCacheStore(kind);
	store.putAll(propObj, expirationTime);
};

/**
 * Zwraca zawartość określonego klucza w określonym Cache storze.
 * Odpizowuje zawartość.
 *
 * @param {string} store Rodzaj properties (document, script, user)
 * @param {string} key Klucz
 * @returns {any} zawartość Cacha
 */

const getCache = (store, key) => {
	if (isStoreProper(store)) {
		const cache = getCacheStore(store).get(key);
		return cache ? JSON.parse(uncrush(cache)) : null;
	}
	throw new Error('Nieprawidłowy Cache store...');
};

/**
 * Dodaje do Cache Services wartość w określonym kluczu.
 * Wcześniej usuwa cały klucz. Dane kompresuje
 *
 * @param {strig} store Rodzaj properties (document, script, user)
 * @param {string} key Klucz pod jakim dostępne będą dane
 * @param {array} data Dane do dodania
 * @param {Number} expirationTime Czas przechowywania casche w sekundach
 * min 1 max 21600 (6h)
 * @returns {void}
 */

const putToCache = (store, key, data, expirationTime) => {
	// Tu również powinno być sprawdzenie poprawności stora - jak w innych
	if (store && key && data) {
		deleteCache(store, key);
		const crushed = crush(data);

		setCache(store, { [key]: crushed }, expirationTime);
	}
};

export { getCache, putToCache, deleteCache };
