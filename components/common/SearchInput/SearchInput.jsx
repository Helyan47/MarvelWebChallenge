'use client';
import SearchSVG from '@/assets/svg/SearchSVG';
import './search-input.css';

const SearchInput = (props) => {
	return (
		<label className='search-input'>
			<SearchSVG />
			<input type='search' {...props} />
		</label>
	);
};

export default SearchInput;
