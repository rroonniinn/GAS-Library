/**
 * Zwraca (zcurowaną) właściwość przkazanego obiektu
 * Jeśli właściowści w obiekcie brak zwraca null
 * Jeśli zamiast obiektu przekazana zostanie wartość falsey zwróci null
 *
 * @param {string / object} key Właściwość / W drugim wywołanu oczekuje obiektu
 */
// const prop = key => obj => (obj ? obj[key] : null);
const prop = key => obj => (obj ? obj[key] || null : null);

export { prop };
