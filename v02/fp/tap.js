/**
 * Tap jest niezwykle przydatną funkcją pozwalającą łączyć funkcje niczego nie zwracające
 * (void functions / funkcje od side effectów - np. logujące lub zmieniające coś w HTML lub bazie)
 * z resztą kompozycji. Jej działanie sprowadza się do wykonania przekazanej funkcji
 * na przekazanym obiekcie a następnie zwróceniu niezmodyfikowanego obiektu
 *
 * @param {Function} Funkcja do przetworzenia przekazanej na dalszym etapie wartości
 * @returns {any} Przekazana na dalszym etapie wartość
 */

const tap = fn => a => {
	fn(a);
	return a;
};

export { tap };
