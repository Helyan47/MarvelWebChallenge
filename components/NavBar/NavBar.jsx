'use client';

import { useAppContext } from '@/contexts/AppContext';
import Link from 'next/link';
import { HeartFilledSVG } from '@/assets/svg/HeartSVG';
import MarvelSVG from '@/assets/svg/MarvelSVG';
import './navbar.css';

const NavBar = () => {
	const { favorites } = useAppContext();

	return (
		<nav>
			<Link href='/' className='nav-logo'>
				<MarvelSVG />
			</Link>

			<Link href={'/favorites'} className={'nav-favorites'}>
				<HeartFilledSVG />
				<span>{favorites.length || 0}</span>
			</Link>
		</nav>
	);
};

export default NavBar;
