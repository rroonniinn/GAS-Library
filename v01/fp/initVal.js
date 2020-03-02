/**
 * Umożliwia wprowadzenie inicjującej wartości do kompozycji funkcyjnej.
 * Dzięki temu nie musimy podczas wywołania przekazywać jej jako parametru
 *
 * @param {Any} val Dowolna wartość
 */

const initVal = val => () => val;

export { initVal };
