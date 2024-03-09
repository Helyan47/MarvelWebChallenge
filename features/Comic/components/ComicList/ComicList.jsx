import { NoData } from '@/components/NoData/NoData';
import { CommicItem } from '../ComicItem/ComicItem';
import './comic-list.css';

export const CommicList = ({ comics }) => {
	return (
		<section className='comic-section'>
			<h2>COMICS</h2>
			<div className='comic-list'>
				{comics?.length > 0 ? comics.map((comic) => <CommicItem key={comic.id} comic={comic} />) : <NoData sectionName='comics' />}
			</div>
		</section>
	);
};
