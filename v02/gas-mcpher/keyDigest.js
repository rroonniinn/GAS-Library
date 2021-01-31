/**
 * @param {[*]} arguments unspecified number and type of args
 * @return {string} a digest of the arguments to use as a key
 */
const keyDigest = () =>
		// conver args to an array and digest them
		 Utilities.base64EncodeWebSafe(
			Utilities.computeDigest(
				Utilities.DigestAlgorithm.SHA_1,
				Array.prototype.slice
					// eslint-disable-next-line no-undef
					.call(arguments)
					.map(function(d) {
						console.log('D', d);
						return Object(d) === d
							? JSON.stringify(d)
							: d.toString();
					})
					.join('-'),
				Utilities.Charset.UTF_8
			)
		);



export { keyDigest };
