/* eslint-disable max-params */
import { paste as pasteS } from '../gas/paste';

/**
 * Wersja zcurrowana przyjmująca tablice w drugim kroku
 * Wkleja przekazaną tablicę danych (2D) w określone miejsce przekazanego arkusza.
 * Jako sheet przyjmuje zarówno string (wtedy pobiera arkusz z bieżącego pliku - bound).
 * Przy przekazaniu sheet jako object pochodzenie pliku już nie ma znaczenia
 * @memberof Lib_Gas
 *
 * @param {string|object} sheet Nazwa arkusza lub obiekt arkusza
 * @param {string} col Lewa kolumna zakresu - string np. 'A'
 * @param {number} row Wiersz lewego górnego zakresu do wklejenia
 * @param {arrow[][]} arr Tablica 2D z danymi
 */

export const paste = (sheet, col, row) => arr => pasteS(sheet, col, row, arr);
