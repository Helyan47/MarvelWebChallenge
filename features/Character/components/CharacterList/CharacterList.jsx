import { CharacterItem } from '../CharacterItem/CharacterItem';
import './character-list.css';

export const CharacterList = ({ characters = [] }) => {
	return (
		<div className='character-list'>
			{characters.map((character) => {
				return <CharacterItem key={character.id} character={character} />;
			})}
		</div>
	);
};
