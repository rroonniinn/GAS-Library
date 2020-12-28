/**
Przetestowane na:

var a = '1'
var b = []
var c = [[]]
var d = [1,2,[1]]
var e = [[1,2,3], [1,2,3]]

console.log('a', isArray2d(a) === false)	// ->  true
console.log('b',  isArray2d(b) === false)	// ->  true
console.log('c', isArray2d(c) === true)		// ->  true
console.log('d', isArray2d(d) === false)	// ->  true
console.log('e', isArray2d(e) === true)		// ->  true

 */

/**
 * Weryfikuje czy przekazana wartość jest tablicą 2d
 * @param {*} val
 * @returns {boolean}
 */

const isArray2d = val => {
	if (!Array.isArray(val)) {
		return false;
	}

	if (val.length === 0) {
		return false;
	}

	return val.every(el => Array.isArray(el));
};

export { isArray2d };
