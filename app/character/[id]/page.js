import { getCharacter } from '@/features/Character/services/characterServices';
import './page.css';
import { CharacterDetail } from '@/features/Character/components/CharacterDetail/CharacterDetail';
import { getCharacterCommics } from '@/features/Comic/services/comicService';
import { CommicList } from '@/features/Comic/components/ComicList/ComicList';
import { cache } from 'react';

const getCharacterData = cache(async (id) => {
	const characterResult = await getCharacter(id);
	return characterResult;
});

export async function generateMetadata({ params: { id } }) {
	const character = await getCharacterData(id);
	return {
		title: character.name,
		description: `Detail Page for ${character.name} - ${character.description}`,
		openGraph: {
			images: [
				{
					url: `${character.thumbnail.path}.${character.thumbnail.extension}`,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: character.name,
			description: `Detail Page for ${character.name} - ${character.description}`,
			creator: '@ivanmuinas',
			images: [`${character.thumbnail.path}.${character.thumbnail.extension}`],
		},
	};
}

export default async function Page({ params }) {
	const { id } = params;
	const characterResult = await getCharacterData(id);
	const commics = await getCharacterCommics(id);

	if (!characterResult) {
		return <div>Character not found</div>;
	}

	return (
		<main className='character-main__container'>
			<CharacterDetail character={characterResult} />
			<CommicList comics={commics} />
		</main>
	);
}
