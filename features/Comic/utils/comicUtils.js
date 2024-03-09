export function getComicOnSaleYear(comic) {
	const dateString = comic.dates.find((item) => item.type === 'onsaleDate')?.date;
	let date = '';
	if (dateString) {
		try {
			date = new Date(dateString).getFullYear();
		} catch (e) {
			// log error and continue
		}
	}
	return date;
}
