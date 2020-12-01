/**
 * Sprawdza czy przekazana wartość ciągu wskazuje, iż jest to
 * pierwotny obiekt daty zamieniony na string (np. JSON).
 * String taki ma strukturę: "2020-09-30T22:00:00.000Z"
 * @param {string} str Sprawdzany string
 */
export const isDateStr = str => /\d\d\d\d-\d\d-\d\dT/.test(str);
