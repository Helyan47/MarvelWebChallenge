import { characterList } from '@/mocks/data.mock';
import { CharacterDetail } from '../CharacterDetail';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import AppContextProvider from '@/contexts/AppContext';

describe('CharacterDetail', () => {
	it('renders character detail with name and image correctly', () => {
		const character = characterList[0];

		render(
			<AppContextProvider>
				<CharacterDetail character={character} index={0} />
			</AppContextProvider>,
		);

		const characterName = screen.getByText(character.name);
		expect(characterName).toBeInTheDocument();

		const characterImage = screen.getByAltText(character.name);
		expect(characterImage).toBeInTheDocument();
	});
});
