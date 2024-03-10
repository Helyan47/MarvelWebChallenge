import { getBaseApiResponse, getBaseApiUrl } from '@/services/baseApiService';

export const getCharacterComics = async (id) => {
	const url = getBaseApiUrl(`/characters/${id}/comics`);
	url.searchParams.append('limit', 20);
	url.searchParams.append('orderBy', '-onsaleDate');
	const response = await getBaseApiResponse(url);

	if (!response || !response.data) return;

	return response.data.results;
};
