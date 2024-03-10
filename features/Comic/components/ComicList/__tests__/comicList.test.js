import { comicList } from '@/mocks/data.mock';
import { ComicList } from '../ComicList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import AppContextProvider from '@/contexts/AppContext';

describe('ComicList', () => {
	it('renders comic list correctly', () => {
		render(
			<AppContextProvider>
				<ComicList comics={comicList} />
			</AppContextProvider>,
		);

		expect(screen.getByTestId('comic-list-container')).toBeInTheDocument();
		expect(screen.getAllByTestId(/comic-item-\d+/).length).toBe(comicList.length);
	});
	it('renders no-data correctly', () => {
		render(
			<AppContextProvider>
				<ComicList comics={[]} />
			</AppContextProvider>,
		);

		expect(screen.queryByTestId('comic-list-container')).toBeNull();
		expect(screen.getByTestId('no-data')).toBeInTheDocument();
		expect(screen.getByTestId('no-data')).toHaveTextContent('No comics found');
	});
});
