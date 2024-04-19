const servers = [
	{
		instanceType: 'medium',
		name: 'Production',
		status: 'stable',
		started: new Date(15, 1, 2017),
	},
	{
		instanceType: 'large',
		name: 'User Database',
		status: 'stable',
		started: new Date(15, 1, 2017),
	},
	{
		instanceType: 'small',
		name: 'Development Server',
		status: 'offline',
		started: new Date(15, 1, 2017),
	},
	{
		instanceType: 'small',
		name: 'Testing Environment Server',
		status: 'stable',
		started: new Date(15, 1, 2017),
	},
];

function sortArray(array, order, propName) {
	array.sort((a, b) => {
		const sortingFactor = a[propName] > b[propName];
		if (order === 'ASCE') {
			return sortingFactor ? 1 : -1;
		} else if (order === 'DESC') {
			return sortingFactor ? -1 : 1;
		}
	});
	console.log(array);
	return array;
}

sortArray(servers, 'name');
