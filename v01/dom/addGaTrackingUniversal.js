/**
 * Dodaje event na kliknięcie wysyłający do GA info o evencie
 * @param {string} location Ścieżka 'strony' - np. 'budget_listing/budget'
 * @param {*} [events] Obiekt z eventami do przekazania
 */

export const addGaTrackingUniversal = (location, events) => () => {
	// W przyszłości na poziomie usera / urządzenia
	// const randomId = Math.floor(Math.random() * 1000000);
	const randomId = 1234567;

	// const pathUri = encodeURIComponent(location);
	const pathUri = location;

	const consts = {
		url: 'https://www.google-analytics.com/',
		type: 'collect?v=1',
	};

	const eventsV = {
		tid: 'UA-221769883-2',
		cid: randomId, // na poziomie urządzenia / usera
		t: 'pageview',
		dp: pathUri,
	};

	const strfds = Object.entries(eventsV)
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
