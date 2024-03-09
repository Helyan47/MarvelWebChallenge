import { characterList } from '@/mocks/data.mock';
import { CharacterList } from '../CharacterList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import AppContextProvider from '@/contexts/AppContext';

describe('CharacterList', () => {
	it('renders character list correctly', () => {
		render(
			<AppContextProvider>
				<CharacterList characters={characterList} />
			</AppContextProvider>,
		);

		expect(screen.getByTestId('character-list-container')).toBeInTheDocument();
		expect(screen.getAllByTestId(/character-item-\d+/).length).toBe(characterList.length);
	});

	it('renders no entities', () => {
		render(
			<AppContextProvider>
				<CharacterList characters={[]} />
			</AppContextProvider>,
		);

		expect(screen.queryByTestId('character-list-container')).toBeNull();
		expect(screen.getByTestId('no-data')).toBeInTheDocument();
		expect(screen.getByTestId('no-data')).toHaveTextContent('No characters found');
	});
});
