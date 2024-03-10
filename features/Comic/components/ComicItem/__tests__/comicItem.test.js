import { comicList } from '@/mocks/data.mock';
import { ComicItem } from '../ComicItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import AppContextProvider from '@/contexts/AppContext';

describe('ComicItem', () => {
	it('renders comic name and image correctly', () => {
		const comic = comicList[0];

		render(
			<AppContextProvider>
				<ComicItem comic={comic} />
			</AppContextProvider>,
		);

		const comicName = screen.getByText(comic.title);
		expect(comicName).toBeInTheDocument();

		const comicImage = screen.getByAltText(comic.title);
		expect(comicImage).toBeInTheDocument();
	});
});
