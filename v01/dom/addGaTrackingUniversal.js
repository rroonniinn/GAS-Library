/**
 * Dodaje event na kliknięcie wysyłający do GA info o evencie
 * @param {string} location Ścieżka 'strony' - np. 'budget_listing/budget'
 * @param {string} userId Id usera
 * @param {string} sysVer Wersja BudgetStudio
 * @param {string} ssId Id skoroszytu - funkcjonuje jako id usera
 * @param {string} dbType Typ bazy np. "Baza_Demo"
 */

export const addGaTrackingUniversal = (
	location,
	userId,
	sysVer,
	ssId,
	dbType
) => () => {
	const consts = {
		url: 'https://www.google-analytics.com/',
		type: 'collect?v=1',
	};

	const dtString = `v:${sysVer} ss:${ssId} db:${dbType}`;

	const events = {
		tid: 'UA-221769883-2',
		cid: userId,
		uid: userId,
		fl: sysVer,
		// cn: sysVer,
		dt: dtString,
		cs: 'version',
		// cm: sysVer,
		// av: sysVer,
		t: 'pageview',
		dp: location,
	};

	// console.log('events', events);

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
