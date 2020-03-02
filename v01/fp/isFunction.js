/**
 * From
 * https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type
 *
 */

const isFunction = functionToCheck => functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

export { isFunction };
