import Image from 'next/image';
import './comic-item.css';

export const CommicItem = ({ comic }) => {
	const dateString = comic.dates.find((item) => item.type === 'onsaleDate')?.date;
	let date;
	if (dateString) {
		try {
			date = new Date(dateString).getFullYear();
		} catch (e) {
			// log error and continue
		}
	}
	return (
		<div className='comic-item'>
			<div className='comic-image'>
				<Image src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt={comic.title} sizes='100%' fill />
			</div>
			<div className='comic-info'>
				<p className='comic-title'>{comic.title}</p>
				<span className='comic-year'>{date || ''}</span>
			</div>
		</div>
	);
};
