import { getBaseApiResponse, getBaseApiUrl } from '@/services/baseApiService';

export const getCharacterCommics = async (id) => {
	const url = getBaseApiUrl(`/characters/${id}/comics`);
	url.searchParams.append('limit', 20);
	url.searchParams.append('orderBy', '-onsaleDate');
	const response = await getBaseApiResponse(url);

	console.log(response);

	if (!response || !response.data) return;

	return response.data.results;
};
