import { errorStack } from './errorStack';
import { errorQualifies } from './errorQualifies';

/* eslint-disable complexity */
/* eslint-disable max-params */
/* eslint-disable max-lines-per-function */
/**
 * recursive rateLimitExpBackoff()
 * @param {function} callBack some function to call that might return rate
 * limit exception
 * @param {object} options properties as below
 * @param {number} [attempts=1] optional the attempt number of this
 * instance - usually only used recursively and not user supplied
 * @param {number} [options.sleepFor=750] optional amount of time to sleep
 * for on the first failure in missliseconds
 * @param {number} [options.maxAttempts=5] optional maximum number
 * of amounts to try
 * @param {boolean} [options.logAttempts=true] log re-attempts to Logger
 * @param {function} [options.checker] function to check whether error
 * is retryable
 * @param {function} [options.lookahead] function to check response
 * and force retry (passes response,attemprs)
 * @return {*} results of the callback
 */

const expBackoff = (callBack, options, attempts) => {
	// sleepFor = Math.abs(options.sleepFor ||

	// eslint-disable-next-line no-param-reassign
	options = options || {};
	const optionsDefault = {
		sleepFor: 750,
		maxAttempts: 5,
		checker: errorQualifies,
		logAttempts: true,
	};

	// mixin
	Object.keys(optionsDefault).forEach(function(k) {
		// eslint-disable-next-line no-prototype-builtins
		if (!options.hasOwnProperty(k)) {
			options[k] = optionsDefault[k];
		}
	});

	// for recursion
	// eslint-disable-next-line no-param-reassign
	attempts = attempts || 1;

	// make sure that the checker is really a function
	if (typeof options.checker !== 'function') {
		throw errorStack('if you specify a checker it must be a function');
	}

	// check properly constructed
	if (!callBack || typeof callBack !== 'function') {
		throw errorStack(
			'you need to specify a function for rateLimitBackoff to execute'
		);
	}

	function waitABit(theErr) {
		// give up?
		if (attempts > options.maxAttempts) {
			throw errorStack(
				`${theErr} (tried backing off ${attempts - 1} times`
			);
		} else {
			// wait for some amount of time based on how many times
			// we've tried plus a small random bit to avoid races
			Utilities.sleep(
				// eslint-disable-next-line no-restricted-properties
				Math.pow(2, attempts) * options.sleepFor +
					Math.round(Math.random() * options.sleepFor)
			);
		}
	}

	// try to execute it
	try {
		const response = callBack(options, attempts);

		// maybe not throw an error but is problem nevertheless
		if (options.lookahead && options.lookahead(response, attempts)) {
			if (options.logAttempts) {
				Logger.log(`backoff lookahead:${attempts}`);
			}
			waitABit('lookahead:');
			return expBackoff(callBack, options, attempts + 1);
		}
		return response;
	} catch (err) {
		// there was an error
		if (options.logAttempts) {
			Logger.log(`backoff ${attempts}:${err}`);
		}

		// failed due to rate limiting?
		if (options.checker(err)) {
			waitABit(err);
			return expBackoff(callBack, options, attempts + 1);
		}

		// some other error
		throw errorStack(err);
	}
};

export { expBackoff };
