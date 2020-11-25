// Taken from: https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date
const isDate = date =>
	date && Object.prototype.toString.call(date) === '[object Date]';

export { isDate };
