export const comicList = [
	{
		id: 1,
		title: 'Iron Man Comic 1',
		thumbnail: {
			path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
			extension: 'jpg',
		},
		dates: [
			{
				type: 'onsaleDate',
				date: '2021-07-01T00:00:00-0400',
			},
		],
	},
	{
		id: 2,
		title: 'Iron Man Comic 2',
		thumbnail: {
			path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
			extension: 'jpg',
		},
		dates: [
			{
				type: 'onsaleDate',
				date: '2020-07-01T00:00:00-0400',
			},
		],
	},
	{
		id: 3,
		title: 'Thor Comic 1',
		thumbnail: {
			path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
			extension: 'jpg',
		},
		dates: [
			{
				type: 'onsaleDate',
				date: '2023-07-01T00:00:00-0400',
			},
		],
	},
	{
		id: 4,
		title: 'Thor Comic 2',
		thumbnail: {
			path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
			extension: 'jpg',
		},
		dates: [
			{
				type: 'onsaleDate',
				date: '2022-07-01T00:00:00-0400',
			},
		],
	},
];

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
			items: [comicList[0], comicList[1]],
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
			items: [comicList[2], comicList[3]],
		},
	},
];
