// Taken from: https://gist.github.com/azu/1392847

// original http://openerp.sistemasadhoc.com.ar/Modulos/6.1/openerp-web/addons/web/static/test/qunit-doc.js
// edit @azu_re
/**
 * QUnit is a powerful, easy-to-use, JavaScript test suite.
 */
const QUnit = {};
/**
 * Initialize the test runner (if the runner has already run it'll be re-initialized, effectively resetting it).
 * This method does not need to be called in the normal use of QUnit.
 */
QUnit.init = function() {};
/**
 * Automatically called by QUnit after each test. Can be called by test code,
 * though usually its better to seperate test code with multiple calls to test().
 */
QUnit.reset = function() {};
/**
 * Defines a module scope (which lasts until the next call to module).
 *
 * This module scopes implies setup and teardown callbacks running for each test.
 *
 * @function
 * @param {String} name the name of the module
 * @param {Object} [lifecycle] callbacks to run before and after each test of the module
 * @param {Function} lifecycle.setup function running before each test of this module
 * @param {Function} lifecycle.teardown function running after each test of this module
 */
function module(name, lifecycle) {}
/**
 * Defines a given test to run. Runs all the assertions present in the test
 *
 * @function
 * @param {String} name the name of the test
 * @param {Number|*} [expected] number of assertions expected to run in this test (useful for asynchronous tests)
 * @param {Function} test the testing code to run, holding a sequence of assertions (at least one)
 */
function test(name, expected, test) {}
/**
 * Defines an asynchronous test: equivalent to calling stop() at the start of
 * a normal test().
 *
 * The test code needs to restart the test runner via start()
 *
 * @function
 * @param {String} name the name of the test
 * @param {Number} [expected] number of assertions expected to run in this test (useful for asynchronous tests)
 * @param {Function} test the testing code to run, holding a sequence of assertions (at least one)
 */
function asyncTest(name, expected, test) {}
/**
 * Specify how many assertions are expected to run within a test.
 * @param amount {Number} The number of assertions you expect to run.
 */
function expect(amount) {}
/**
 * The most basic boolean assertion (~assertTrue or assert).
 *
 * Passes if its argument is truthy
 *
 * @function
 * @param {Boolean} state an arbitrary expression, evaluated in a boolean context
 * @param {String} [message] the message to output with the assertion result
 */
function ok(state, message) {}
/**
 * Equality assertion (~assertEqual)
 *
 * Passes if both arguments are equal (via <code>==</code>)
 *
 * @function
 * @param {Object} actual the object to check for correctness (processing result)
 * @param {Object} expected the object to check against
 * @param {String} [message] message output with the assertion result
 */
function equal(actual, expected, message) {}
/**
 * Inequality assertion (~assertNotEqual)
 *
 * Passes if the arguments are different (via <code>!=</code>)
 *
 * @function
 * @param {Object} actual the object to check for correctness (processing result)
 * @param {Object} expected the object to check against
 * @param {String} [message] message output with the assertion result
 */
function notEqual(actual, expected, message) {}
/**
 * Recursive equality assertion.
 *
 * Works on primitive types using <code>===</code> and traversing through
 * Objects and Arrays as well checking their components
 *
 * @function
 * @param {Object} actual the object to check for correctness (processing result)
 * @param {Object} expected the object to check against
 * @param {String} [message] message output with the assertion result
 */
function deepEqual(actual, expected, message) {}
/**
 * Recursive inequality assertion.
 *
 * Works on primitive types using <code>!==</code> and traversing through
 * Objects and Arrays as well checking their components
 *
 * @function
 * @param {Object} actual the object to check for correctness (processing result)
 * @param {Object} expected the object to check against
 * @param {String} [message] message output with the assertion result
 */
function notDeepEqual(actual, expected, message) {}
/**
 * Strict equality assertion (~assertEqual)
 *
 * Passes if both arguments are identical (via <code>===</code>)
 *
 * @function
 * @param {Object} actual the object to check for correctness (processing result)
 * @param {Object} expected the object to check against
 * @param {String} [message] message output with the assertion result
 */
function strictEqual(actual, expected, message) {}
/**
 * Strict inequality assertion (~assertNotEqual)
 *
 * Passes if both arguments are identical (via <code>!==</code>)
 *
 * @function
 * @param {Object} actual the object to check for correctness (processing result)
 * @param {Object} expected the object to check against
 * @param {String} [message] message output with the assertion result
 */
function notStrictEqual(actual, expected, message) {}
/**
 * Passes if the provided block raised an exception.
 *
 * The <code>expect</code> argument can be provided to perform further assertion checks on the exception itself:
 * * If it's a <code>RegExp</code> test the exception against the regexp (message?)
 * * If it's a constructor, check if the exception is an instance of it
 * * If it's an other type of function, call it with the exception as first parameter
 *   - If the function returns true, the assertion validates
 *   - Otherwise it fails
 *
 * @function
 * @param {Function} block function which should raise an exception when called
 * @param {Object} [expect] a RegExp, a constructor or a Function
 * @param {String} [message] message output with the assertion result
 */
function raises(block, expected, message) {}
/**
 * Starts running the test runner again from the point where it was
 * <code>stop</code>ped.
 *
 * Used to resume testing after a callback.
 *
 * @function
 */
function start(decrement) {}
/**
 * Stops the test runner in order to wait for an asynchronous test to run
 *
 * @function
 * @param {Number} [timeout] fails the test after the timeout triggers, only for debugging tests
 */
function stop(increment) {}
