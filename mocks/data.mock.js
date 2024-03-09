export const comicList = [];

export const characterList = [
	{
		id: 1011334,
		name: 'Iron Man',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		thumbnail: {
			path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
			extension: 'jpg',
		},
		comics: {
			available: 1,
			items: [
				{
					id: 1,
					name: 'Iron Man Comic 1',
					dates: {
						type: 'onsaleDate',
						date: '2021-07-01T00:00:00-0400',
					},
				},
				{
					id: 2,
					name: 'Iron Man Comic 2',
					dates: {
						type: 'onsaleDate',
						date: '2020-07-01T00:00:00-0400',
					},
				},
			],
		},
	},
	{
		id: 1011335,
		name: 'Thor',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		thumbnail: {
			path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
			extension: 'jpg',
		},
		comics: {
			available: 1,
			items: [
				{
					id: 1,
					name: 'Thor Comic 1',
					dates: {
						type: 'onsaleDate',
						date: '2023-07-01T00:00:00-0400',
					},
				},
				{
					id: 2,
					name: 'Thor Comic 2',
					dates: {
						type: 'onsaleDate',
						date: '2022-07-01T00:00:00-0400',
					},
				},
			],
		},
	},
];
