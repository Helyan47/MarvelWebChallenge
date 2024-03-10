'use client';
import { useAppContext } from '@/contexts/AppContext';
import SearchForm from '../../components/SearchForm/SearchForm';
import { CharacterList } from '@/features/Character/components/CharacterList/CharacterList';
import { Suspense } from 'react';
import './page.css';

export default function Page() {
	const { favorites } = useAppContext();

	return (
		<main className={'main_favorites__container'}>
			<h3>FAVORITES</h3>
			<Suspense>
				<SearchForm resultCount={favorites?.length || 0} />
			</Suspense>
			<CharacterList characters={favorites || []} />
		</main>
	);
}
