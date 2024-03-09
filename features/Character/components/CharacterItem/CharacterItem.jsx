'use client';
import { HeartFilledSVG, HeartSVG } from '@/assets/svg/HeartSVG';
import Button from '@/components/common/Button/Button';
import { useAppContext } from '@/contexts/AppContext';
import Image from 'next/image';
import Link from 'next/link';
import './character-item.css';

export const CharacterItem = ({ character }) => {
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
		<div className='character-item'>
			<Link className='image-container' href={`/character/${character.id}`}>
				<Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} sizes='100%' alt={character.name} fill />
			</Link>
			<div className='character-info-container'>
				<div className='character-rectangle' />
				<div className='character-info'>
					<span>{character.name}</span>
					<Button buttonType={isFavourite ? 'fav-icon-toggled' : 'fav-icon'} onClick={handleFavClick}>
						{isFavourite ? <HeartFilledSVG width={12} height={11} /> : <HeartSVG width={12} height={11} />}
					</Button>
				</div>
			</div>
		</div>
	);
};
