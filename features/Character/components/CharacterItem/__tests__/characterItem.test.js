import { characterList } from '@/mocks/data.mock';
import { CharacterItem } from '../CharacterItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import AppContextProvider from '@/contexts/AppContext';

describe('CharacterItem', () => {
	it('renders character name and image correctly', () => {
		const character = characterList[0];

		render(
			<AppContextProvider>
				<CharacterItem character={character} index={0} />
			</AppContextProvider>,
		);

		const characterName = screen.getByText(character.name);
		expect(characterName).toBeInTheDocument();

		const characterImage = screen.getByAltText(character.name);
		expect(characterImage).toBeInTheDocument();
	});
});
