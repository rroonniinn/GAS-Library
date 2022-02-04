/* eslint-disable max-params */
import { getFirstDayNextM } from '../../v02/time/getFirstDayNextM';

import { getDateAfter } from './getDateAfter';
import { getNormalizedDate } from './getNormalizedDate';
import { getQuarter } from './getQuarter';

/**
 * Zwraca pierwszy dzień kolejnego kwartału niż ten, do którego należy
 * przekazana data
 * @param {Date} date
 * @returns {Date}
 */

const getNextQuarter = date => {
	const year = date.getFullYear();
	const monthNum = date.getMonth() + 1;

	if (monthNum >= 10) return new Date(year + 1, 0, 1);
	if (monthNum >= 7) return new Date(year, 9, 1);
	if (monthNum >= 4) return new Date(year, 6, 1);

	return new Date(year, 3, 1);
};

/**
 * Zwraca poprawną datę zależną od reSpan
 * @param {Date} date Data
 * @param {number|'month'|'year'|'quarter'} resSpan Okres odstępu w dniach (np. 7 to tydzień, 1 to codziennie) lub 'month', 'year' , 'quarter'
 */

const getProperDate = (date, resSpan) => {
	if (typeof resSpan === 'number') return date;
	if (resSpan === 'month') return getFirstDayNextM(date, 0);
	if (resSpan === 'year') return new Date(date.getFullYear(), 0, 1);
	if (resSpan === 'quarter') return getQuarter(date);

	throw new Error('Not supported resSpan');
};

/**
 * Zwraca poprawnie przesuniętą datę kolejną
 * @param {Date} date Data
 * @param {number|'month'|'year'|'quarter'} resSpan Okres odstępu w dniach (np. 7 to tydzień, 1 to codziennie) lub 'month', 'year' , 'quarter'
 */

const getTimeOffset = (date, resSpan) => {
	if (typeof resSpan === 'number') return getDateAfter(date, resSpan);
	if (resSpan === 'month') return getFirstDayNextM(date, 1);
	if (resSpan === 'year') return new Date(date.getFullYear() + 1, 0, 1);
	if (resSpan === 'quarter') return getNextQuarter(date);
};

/**
 * Generuje tablicę tygodni będącą postawą CF. Funkcja rekurencyjna.
 * Tydzień zaczyna się od wtorku i trwa do poniedziałku (na tym etapie)
 * @param {Date} start
 * @param {Date} end
 * @param {number|'month'|'year'|'quarter'} resSpan
 * @param {array} [timeline]
 * @returns {Date[]} Tablica dat timeline-u
 */

const setTimeline = (start, end, resSpan, timeline = []) => {
	const timelinePlus = [...timeline, start];

	if (
		getNormalizedDate(start).getTime() >
		getNormalizedDate(end).getTime()
	) {
		return typeof resSpan === 'string' || resSpan === 1
			? timelinePlus.slice(0, timelinePlus.length - 1) // W tych przypadkach usuwa ostatni wpis, który przekroczył już datę końcową
			: timelinePlus;
	}

	return setTimeline(
		getTimeOffset(start, resSpan),
		end,
		resSpan,
		timelinePlus
	);
};

/**
 * Generuje tablicę dni, tygodni, miesięcy lub lat pomiędzy dwiema przekazanymi datami.
 * Dla miesięcy, kwartałów oraz lat datą jest pierwszy dzień okresu.
 * @param {Date} start Data startowa (zawierająca się)
 * @param {Date} end Data startowa (zawierająca się)
 * @param {number|'month'|'year'|'quarter'} resSpan Okres odstępu w dniach (np. 7 to tydzień, 1 to codziennie) lub 'month' lub 'year'
 * @returns {Date[]} Tablica dat timeline-u
 */

export const getConsecutiveDates = (start, end, resSpan) => {
	const properStart = getProperDate(start, resSpan);

	return setTimeline(properStart, end, resSpan);
};
