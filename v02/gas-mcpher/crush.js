/**
 * Zipuje i odzipowuje pliki - do zastosowania z cachem
 */

/**
 * crush for writing to cache.props
 * @param {string} crushThis the string to crush
 * @return {string} the b64 zipped version
 */
const crush = crushThis =>
	Utilities.base64Encode(
		Utilities.zip([
			Utilities.newBlob(JSON.stringify(crushThis)),
		]).getBytes()
	);

/**
 * uncrush for writing to cache.props
 * @param {string} crushed the crushed string
 * @return {string} the uncrushed string
 */
const uncrush = crushed =>
	Utilities.unzip(
		Utilities.newBlob(
			Utilities.base64Decode(crushed),
			'application/zip'
		)
		// );
	)[0].getDataAsString();

export { crush, uncrush };
