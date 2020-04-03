/**
 * Odpala wskazaną akcję co określoną liczbę minut
 *
 * @param {string} callback Nazwa funkcji do odpalenia
 * (musi być dostępna w obiekcie global)
 * @param {1|5|10|15|30} mins Interwał minutowy
 */

const startMinuteTrigger = (callback, mins) => {
	ScriptApp.newTrigger(callback)
		.timeBased()
		.everyMinutes(mins)
		.create();
};

/**
 * Usuwa wszystki triggery czasowe
 *
 */

const cancelTimeTriggers = () => {
	const clock = ScriptApp.TriggerSource.CLOCK;
	const del = ScriptApp.deleteTrigger;
	const triggers = ScriptApp.getProjectTriggers();

	triggers.forEach(trig => {
		if (trig.getTriggerSource() === clock) del(trig);
	});
};

export { startMinuteTrigger, cancelTimeTriggers };
