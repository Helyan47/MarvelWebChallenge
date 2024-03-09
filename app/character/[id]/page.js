import { getCharacter } from '@/features/Character/services/characterServices';
import './page.css';
import { CharacterDetail } from '@/features/Character/components/CharacterDetail/CharacterDetail';
import { getCharacterCommics } from '@/features/Comic/services/comicService';
import { CommicList } from '@/features/Comic/components/ComicList/ComicList';

export default async function Page({ params }) {
	const { id } = params;
	const characterResult = await getCharacter(id);
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
