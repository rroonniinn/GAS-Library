/* eslint-disable max-params */

const getPropsStore = kind => {
	const options = {
		document: PropertiesService.getDocumentProperties(),
		script: PropertiesService.getScriptProperties(),
		user: PropertiesService.getUserProperties(),
	};
	return {}.hasOwnProperty.call(options, kind) ? options[kind] : null;
};

const setProps = (kind, propObj) => {
	const store = getPropsStore(kind);
	store.setProperties(propObj);
};
const deleteProp = (kind, key) => getPropsStore(kind).deleteProperty(key);

/**
 * Zwraca zawartość określonego klucza w określonym property storze
 * @namespace Lib_GasProps
 *
 * @param {string} store Rodzaj properties (document, script, user)
 * @param {string} key Klucz
 * @returns {any} zawartość propsów
 */

const getProp = (store, key) =>
	JSON.parse(getPropsStore(store).getProperty(key)) || null;

/**
 * Dodaje do Property Services przekazaną informację
 * Property Store - script
 * Klucz danych - csvFiles
 * @namespace Lib_GasProps
 *
 * @param {strig} store Rodzaj properties (document, script, user)
 * @param {string} key Klucz pod jakim dostępne będą dane
 * @param {array} data Dane do dodania
 * @returns {void}
 */

const addToProps = (store, key, data) => {
	if (store && key && data) {
		deleteProp(store, key);
		setProps(store, { [key]: JSON.stringify(data) });
	} else {
		throw new Error(
			'Niewłaściy store, key lub data do dodania do Propsów'
		);
	}
};

export { getProp, addToProps, deleteProp };
