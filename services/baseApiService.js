import md5 from 'md5';
import { ssrFetch } from './ssrFetch';

export const getBaseApiUrl = (baseUrl) => {
	const url = new URL(process.env.API_URL + baseUrl);
	const ts = Number(new Date());
	const hash = md5(ts + process.env.API_PRIVATE_KEY + process.env.API_PUBLIC_KEY);
	url.searchParams.append('ts', ts);
	url.searchParams.append('apikey', process.env.API_PUBLIC_KEY);
	url.searchParams.append('hash', hash);
	return url;
};

export const getBaseApiResponse = async (url) => {
	return await ssrFetch({
		url: url.toString(),
		otherProps: {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		},
	});
};
