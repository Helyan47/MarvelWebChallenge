import { searchCharacters } from '@/features/Character/services/characterServices';
import SearchForm from './_components/SearchForm';
import './page.css';
import { CharacterList } from '@/features/Character/components/CharacterList/CharacterList';

export default async function Home({ params, searchParams }) {
	const { data: characterResult } = await searchCharacters(searchParams.search);
	return (
		<main className={'main_characters__container'}>
			<SearchForm resultCount={characterResult?.count || 0} />
			<CharacterList characters={characterResult?.results || []} />
		</main>
	);
}
