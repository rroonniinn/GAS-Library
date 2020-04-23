import { errorStack } from './errorStack';
import { errorQualifies } from './errorQualifies';

/* eslint-disable complexity */
/* eslint-disable max-params */
/* eslint-disable max-lines-per-function */

/**
 * @typedef {Object} OPTIONS
 * @property {number} [sleepFor=750] optional amount of time to sleep for on the first failure in missliseconds
 * @property {number} [maxAttempts=5] optional maximum number of amounts to try
 * @property {boolean} [logAttempts=true] log re-attempts to Logger
 * @property {function} [checker] function to check whether error is retryable
 * @property {function} [lookahead] function to check response and force retry (passes response, attemprs)
 */

/**
 * recursive rateLimitExpBackoff()
 * @param {function} callBack some function to call that might return rate limit exception
 * @param {OPTIONS} [options] properties as below
 * @param {number} [attempts = 1] optional the attempt number of this instance - usually only used recursively and not user supplied
 * @return {*} results of the callback
 */

const expBackoff = (callBack, options, attempts = 1) => {
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

	// make sure that the checker is really a function
	if (typeof options.checker !== 'function') {
		// @ts-ignore
		throw errorStack('if you specify a checker it must be a function');
	}

	// check properly constructed
	if (!callBack || typeof callBack !== 'function') {
		throw errorStack(
			// @ts-ignore
			'you need to specify a function for rateLimitBackoff to execute'
		);
	}

	function waitABit(theErr) {
		// give up?
		if (attempts > options.maxAttempts) {
			throw errorStack(
				// @ts-ignore
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
