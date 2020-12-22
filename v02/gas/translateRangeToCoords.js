import { letterToColumn as toColumn } from './../../v01/gas/letterToColumn';


/**
 * Przyjmując range jako string (np. A1 lub A1:C2) zwraca obiekt z
 * wartość indeksów pionowych i poziomych wraz z długością zakresów
 * (liczbą kolumn i wierszy). Za pomocą tych koordynatów możemy dowiedzieć
 * się gdzie w pobranej z arkusza tablicy znajduje się jakiś zakres np. A3.
 * Założenie jest jednak taki, że dane są pobrane wraz z komórką A1.
 * Na przyszłość można dodać jeszcze offset
 *
 * @param {string} str
 */
const translateRangeToCoords = str => {
	const x = toColumn(/\D+/.exec(str)[0]);
	const y = Number(/\d+/.exec(str)[0]);

	if (!str.includes(':')) {
		return {
			x: x - 1,
			y: y - 1,
			xLength: 1,
			yLenght: 1,
		};
	}

	const xOffset = toColumn(/:(\D+)/.exec(str)[1]);
	const yOffset = Number(/\d$/.exec(str)[0]);

	return {
		x: x - 1,
		y: y - 1,
		xOffset: xOffset - x + 1,
		yOffset: yOffset - y + 1,
	};
};

export {translateRangeToCoords}
