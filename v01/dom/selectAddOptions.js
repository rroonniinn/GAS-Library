/**
 * Wprowadza do selecta opcje z przekazanej tablicy. Wiersz w tablicy zawiera:
 * - value: wartość niewidoczna <option value>
 * - text: wartość widoczna - czy to co widać w UI
 * Parametr position działa tak: jeśli nowe opcje mają być dodane na początku
 * to wstawiamy 1, jeśli od drugiego to 2 itd. Jeśli ma być na końcu
 * to position musi być większy niż liczba dotychczasowych elementów
 * @param {HTMLSelectElement} select Select do którego mają być dodane opcje
 * @param {array} elements Tablica z elementami do dodania
 * @param {number} position Pozycja (od 1) od którego miejsca mają być dodane nowe opcje do już istniejących
 */

const selectAddOptions = (select, elements, position) => {
	elements.forEach(([value, text, toDataSet], i) => {
		const opt = document.createElement('option');
		opt.value = String(value);
		opt.text = String(text);
		select.options.add(opt, i + position - 1);

		// 1.
		if (toDataSet) {
			select.options[
				i + position - 1
			].dataset.custom = JSON.stringify(toDataSet);
		}
	});
};

export { selectAddOptions };

/**
 * 1.) Opcjonalnie mogę dodać dowolny obiekt do zapisania bezpośrednio
 * 		w dataSet.custom
 */
