'use client';
import { HeartFilledSVG, HeartSVG } from '@/assets/svg/HeartSVG';
import Button from '@/components/common/Button/Button';
import { useAppContext } from '@/contexts/AppContext';
import Image from 'next/image';
import './character-detail.css';

export const CharacterDetail = ({ character }) => {
	const { favorites, addFavourite, removeFavourite } = useAppContext();
	const isFavourite = favorites.some((item) => item.id === character.id);

	const handleFavClick = (e) => {
		e.preventDefault();
		if (isFavourite) {
			removeFavourite(character.id);
		} else {
			addFavourite(character);
		}
	};

	return (
		<header className='character-header'>
			<div className='info-container'>
				<div className='character-image'>
					<Image src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} sizes='100%' priority fill />
				</div>
				<div className='character-info'>
					<header>
						<h1>{character.name}</h1>
						<Button buttonType={isFavourite ? 'fav-icon-toggled' : 'fav-icon'} onClick={handleFavClick}>
							{isFavourite ? <HeartFilledSVG /> : <HeartSVG />}
						</Button>
					</header>
					<section>
						<p>{character.description || 'No description yet.'}</p>
					</section>
				</div>
			</div>
		</header>
	);
};
