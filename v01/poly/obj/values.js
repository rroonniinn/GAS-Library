/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */

// https://stackoverflow.com/questions/42830257/alternative-version-for-object-values

if (!Object.values) {
	Object.values = function(obj) {
		const res = [];
		for (const i in obj) {
			if (obj.hasOwnProperty(i)) {
				res.push(obj[i]);
			}
		}
		return res;
	};
}
