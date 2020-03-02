/* eslint-disable max-params */
/**
 * Kombinator fork jest przydatny w sytuacjach, gdy
 * potrzebne jest przetworzenie jednego zasobu na dwa różne sposoby
 * a następnie połączenie wyniku tych przetworzeń.
 * Przyjmuje trzy funkcje: jedną łączącą i dwie przetwarzające input.
 * Końcowy rezultat przetworzeń obu funkcji jest przekazywany do funkcji łączącej.
 *
 * @param {Function} join
 * @param {Function} func1
 * @param {Function} func2
 * @returns {any} Wynik działania funkcji join
 */
const fork = (join, func1, func2) => val => join(func1(val), func2(val));

export { fork };
