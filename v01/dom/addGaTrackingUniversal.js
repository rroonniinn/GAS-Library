/**
 * Dodaje event na kliknięcie wysyłający do GA info o evencie
 * @param {string} location Ścieżka 'strony' - np. 'budget_listing/budget'
 * @param {string} ssId Id skoroszytu - funkcjonuje jako id usera
 * @param {string} sysVer Wersja BudgetStudio
 */

export const addGaTrackingUniversal = (location, ssId, sysVer) => () => {
	const consts = {
		url: 'https://www.google-analytics.com/',
		type: 'collect?v=1',
	};

	const events = {
		tid: 'UA-221769883-2',
		cid: ssId,
		uid: ssId,
		cn: sysVer,
		cs: 'version',
		cm: sysVer,
		t: 'pageview',
		dp: location,
	};

	const strfds = Object.entries(events)
		.map(([opts, val]) => `${opts}=${val}`)
		.join('&');

	const url = `${consts.url}${consts.type}&${strfds}`;

	fetch(url)
		.then(res => {
			console.log('Res', res.status);
		})
		.catch(error => {
			console.log(error);
		});
};
