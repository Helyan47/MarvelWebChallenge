export async function ssrFetch({ url, otherProps }) {
	try {
		const response = await fetch(url, otherProps);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('useSSRFetch', error);
	}
	return undefined;
}
