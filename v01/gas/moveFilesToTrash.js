/**
 * Przenosi do kosza pliki których ID znajdują się w przekazanej tablicy
 *
 * @memberof Lib_Gas
 *
 * @param {array|string} idArr Tablica z ID plików do usunięcia.
 * Może zostać również przekazany string ID jednego pliku
 * @returns {void} Tylko side effect
 */
const moveFilesToTrash = idArr => {
	if (Array.isArray(idArr)) {
		idArr.forEach(id => {
			DriveApp.getFileById(id).setTrashed(true);
		});
	} else {
		DriveApp.getFileById(idArr).setTrashed(true);
	}
};
export { moveFilesToTrash };

// TODO: należał przebudować aby bral jako argument również obiekty File oraz url
