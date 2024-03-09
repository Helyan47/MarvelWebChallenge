import Image from 'next/image';
import './comic-item.css';
import { getComicOnSaleYear } from '../../utils/comicUtils';

export const CommicItem = ({ comic }) => {
	const date = getComicOnSaleYear(comic);
	return (
		<div className='comic-item'>
			<div className='comic-image'>
				<Image src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt={comic.title} sizes='100%' fill />
			</div>
			<div className='comic-info'>
				<p className='comic-title'>{comic.title}</p>
				<span className='comic-year'>{date}</span>
			</div>
		</div>
	);
};
