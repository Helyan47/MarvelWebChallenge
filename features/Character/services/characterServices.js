import md5 from 'md5';
import { ssrFetch } from '../../../services/ssrFetch';

export async function searchCharacters(search) {
	const url = new URL(process.env.API_URL + '/characters');
	if (search) {
		url.searchParams.append('nameStartsWith', search);
	}
	const ts = Number(new Date());
	const hash = md5(ts + process.env.API_PRIVATE_KEY + process.env.API_PUBLIC_KEY);
	url.searchParams.append('limit', process.env.API_CHARACTER_LIMIT);
	url.searchParams.append('hash', hash);
	url.searchParams.append('apikey', process.env.API_PUBLIC_KEY);
	url.searchParams.append('ts', ts);

	return await ssrFetch({
		url: url.toString(),
		otherProps: {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		},
	});
}
