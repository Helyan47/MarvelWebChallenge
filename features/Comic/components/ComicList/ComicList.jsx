import { NoData } from '@/components/NoData/NoData';
import { ComicItem } from '../ComicItem/ComicItem';
import './comic-list.css';

export const ComicList = ({ comics }) => {
	return (
		<section className='comic-section'>
			<h2>COMICS</h2>
			{comics?.length > 0 ? (
				<div className='comic-list' data-testid='comic-list-container'>
					{comics.map((comic, index) => (
						<ComicItem key={comic.id} comic={comic} index={index} />
					))}
				</div>
			) : (
				<NoData sectionName='comics' />
			)}
		</section>
	);
};
