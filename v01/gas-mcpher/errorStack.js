/**
 * get the stack
 * @param {Error} e the error
 * @return {string} the stack trace
 */
const errorStack = e => {
	try {
		// 	// throw a fake error
		throw new Error(); // x is undefined and will fail under use struct
		// - ths will provoke an error so i can get the call stack
	} catch (err) {
		return `Error:${e}\n${err.stack
			.split('\n')
			.slice(1)
			.join('\n')}`;
	}
};

export { errorStack };

// return 'Error:' + e + '\n' + err.stack.split('\n').slice(1).join('\n');
