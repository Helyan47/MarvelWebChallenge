import { NoData } from '@/components/NoData/NoData';
import { CharacterItem } from '../CharacterItem/CharacterItem';
import './character-list.css';

export const CharacterList = ({ characters = [] }) => {
	return (
		<>
			{characters.length === 0 ? (
				<NoData sectionName='characters' />
			) : (
				<div className='character-list' data-testid='character-list-container'>
					{characters.map((character, index) => {
						return <CharacterItem key={character.id} character={character} index={index} />;
					})}
				</div>
			)}
		</>
	);
};
