/**
 * @param {[*]} arguments unspecified number and type of args
 * @return {string} a digest of the arguments to use as a key
 */
const keyDigest = () => {
	console.log('arguments', arguments);

	// conver args to an array and digest them
	return Utilities.base64EncodeWebSafe(
		Utilities.computeDigest(
			Utilities.DigestAlgorithm.SHA_1,
			Array.prototype.slice
				// eslint-disable-next-line no-undef
				.call(arguments)
				.map(function(d) {
					return Object(d) === d
						? JSON.stringify(d)
						: d.toString();
				})
				.join('-'),
			Utilities.Charset.UTF_8
		)
	);
};
export { keyDigest };
