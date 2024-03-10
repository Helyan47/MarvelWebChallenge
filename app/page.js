import { searchCharacters } from '@/features/Character/services/characterServices';
import SearchForm from '../components/SearchForm/SearchForm';
import './page.css';
import { CharacterList } from '@/features/Character/components/CharacterList/CharacterList';

export const metadata = {
	metadataBase: new URL(process.env.VERCEL_ENV === 'production' ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
	title: 'Marvel Characters',
	description: 'A list of Marvel characters.',
	openGraph: {
		images: [
			{
				url: '/logo.png',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Marvel Characters',
		description: 'A list of Marvel characters.',
		creator: '@ivanmuinas',
		images: ['/logo.png'],
	},
};

export default async function Home({ params, searchParams }) {
	const { data: characterResult } = await searchCharacters(searchParams.search);
	return (
		<main className={'main_characters__container'} data-testid='character-list-main'>
			<SearchForm resultCount={characterResult?.count || 0} />
			<CharacterList characters={characterResult?.results || []} />
		</main>
	);
}
