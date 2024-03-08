'use client';
import { useAppContext } from '@/contexts/AppContext';
import SearchForm from '../_components/SearchForm';
import { CharacterList } from '@/features/Character/components/CharacterList/CharacterList';
import './page.css';

export default function Page() {
	const { favorites } = useAppContext();

	return (
		<main className={'main_favorites__container'}>
			<h2>FAVORITES</h2>
			<SearchForm resultCount={favorites?.length || 0} />
			<CharacterList characters={favorites || []} />
		</main>
	);
}
