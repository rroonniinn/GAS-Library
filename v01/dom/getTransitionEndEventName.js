/**
 * Zwraca używaną przez przeglądarkę nazwę eventu odpalanego na koniec
 * tranzycji elementu. Lekko przerobiłem aby nie używać for in.
 * Wzięte z https://betterprogramming.pub/detecting-the-end-of-css-transition-events-in-javascript-8653ae230dc7
 */
const getTransitionEndEventName = () => {
	const transitions = {
		transition: 'transitionend',
		OTransition: 'oTransitionEnd',
		MozTransition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd',
	};

	const bodyStyle = document.body.style;

	return Object.entries(transitions)
		.map(([key, eventName]) =>
			bodyStyle[key] === '' ? eventName : false
		)
		.filter(evName => evName)
		.slice(0, 1)
		.join();
};

export { getTransitionEndEventName };
