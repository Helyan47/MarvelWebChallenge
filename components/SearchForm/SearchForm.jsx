'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import SearchInput from '../common/SearchInput/SearchInput';
import './search-form.css';

const SearchForm = ({ resultCount = 0 }) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const search = searchParams.get('search') || '';

	const createQueryString = useCallback(
		(name, value) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const search = formData.get('search');
		const queryString = createQueryString('search', search);
		router.replace(`/?${queryString}`);
	};

	return (
		<div className='search-wrapper'>
			<form href='#' onSubmit={handleSubmit}>
				<SearchInput name='search' aria-label='Search character' defaultValue={search} placeholder='SEARCH CHARACTER...' />
			</form>
			<p data-testid='result-number'>{`${resultCount} ${resultCount === 1 ? 'RESULT' : 'RESULTS'}`}</p>
		</div>
	);
};

export default SearchForm;
