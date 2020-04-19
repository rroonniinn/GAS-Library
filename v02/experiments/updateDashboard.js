import { getProp } from '../../v01/gas/properties';
import { getSheet } from '../gas/getSheet';

/**
 *
 *
 */

const getData = () => {
	Object.entries(getProp('script', 'PRINT_TO_PROPS')).map(
		([geo, id]) => {
			const results = getSheet('Wyniki', id);
			const data = {
				name: results.getRange('AG2').getValue(),
				times: results.getRange('G6:M14').getValues(),
				maxes: results.getRange('G21:M29').getValues(),
				summary: results.getRange('B7:D11').getValues(),
				days: results.getRange('A3:C').getValues(),
			};
			return [geo, data];
		}
	);

	const printData = () => {};
};

const updateDashboard = () => {
	getData();
};

export { updateDashboard };

// {"loc":"1ju4RHR8SFj3auXUMZpQwVLfH8i1TBHIrwL6qLEk9HIY","ext":"1CcXzG6e7fGCm0LUx1n7oQMeHbs7dJiZ9z-8vDaZU3Ec"}
