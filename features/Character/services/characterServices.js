import { getBaseApiResponse, getBaseApiUrl } from '@/services/baseApiService';

export async function searchCharacters(search) {
	const url = getBaseApiUrl('/characters');
	if (search) {
		url.searchParams.append('nameStartsWith', search);
	}
	url.searchParams.append('limit', process.env.API_CHARACTER_LIMIT || 50);

	return await getBaseApiResponse(url);
}

export async function getCharacter(characterId) {
	const url = getBaseApiUrl('/characters/' + characterId);

	const response = await getBaseApiResponse(url);

	if (!response || !response.data) return;

	return response.data.results.at(0);
}
