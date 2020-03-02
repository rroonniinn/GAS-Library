/**
 * Funkcja logująca do zastosowania w kompozycjach (zazwyczaj z ).
 * Przyjmuje paramet określający czy ma wyświetlić wynik jako tablica czy też standrdowo
 * Dla 't' - tablica, dla pustego stringa standardowo
 *
 * @param {String} type 't' dla wyśtietlania jako tablica, brak dla wyświtlania standardowo
 */
const log = type => v => (type === 't' ? console.table(v) : console.log(v));
export { log };
