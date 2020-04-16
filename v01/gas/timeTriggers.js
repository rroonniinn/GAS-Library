/**
 * Odpala wskazaną akcję co określoną liczbę minut
 *
 * @param {string} callback Nazwa funkcji do odpalenia
 * (musi być dostępna w obiekcie global)
 * @param {1|5|10|15|30} mins Interwał minutowy
 */

const setEveryMin = (callback, mins) => {
	ScriptApp.newTrigger(callback)
		.timeBased()
		.everyMinutes(mins)
		.create();
};
/**
 * Odpala wskazaną akcję co określoną liczbę godzin
 * @param {string} callback Nazwa funkcji do odpalenia
 * (musi być dostępna w obiekcie global)
 * @param {number} h Interwał godzinny
 */

const setEveryH = (callback, h) => {
	ScriptApp.newTrigger(callback)
		.timeBased()
		.everyHours(h)
		.create();
};

/**
 * Usuwa wszystki triggery czasowe
 */

const stopTimeTriggers = () => {
	const clock = ScriptApp.TriggerSource.CLOCK;
	const del = ScriptApp.deleteTrigger;
	const triggers = ScriptApp.getProjectTriggers();

	triggers.forEach(trig => {
		if (trig.getTriggerSource() === clock) del(trig);
	});
};

export { setEveryMin, setEveryH, stopTimeTriggers };
