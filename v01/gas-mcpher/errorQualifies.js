// default checker
const errorQualifies = errorText =>
	[
		'Exception: Service invoked too many times',
		'Exception: Rate Limit Exceeded',
		'Exception: Quota Error: User Rate Limit Exceeded',
		'Service error:',
		'Exception: Service error:',
		'Exception: User rate limit exceeded',
		'Exception: Internal error. Please try again.',
		'Exception: Cannot execute AddColumn because another task',
		'Service invoked too many times in a short time:',
		'Exception: Internal error.',
		'User Rate Limit Exceeded',
		'Exception: ???????? ?????: DriveApp.',
		'Exception: Address unavailable',
		'Exception: Timeout',
		'GoogleJsonResponseException: Rate Limit Exceeded',
		// eslint-disable-next-line eqeqeq
	].some(e => errorText.toString().slice(0, e.length) == e);

export { errorQualifies };
