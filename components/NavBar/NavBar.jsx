'use client';

import { useAppContext } from '@/contexts/AppContext';
import Link from 'next/link';
import { HeartFilledSVG } from '@/assets/svg/HeartSVG';
import './navbar.css';
import Image from 'next/image';

const NavBar = () => {
	const { favorites } = useAppContext();

	return (
		<nav>
			<Link href='/' className='nav-logo' data-testid='main-logo'>
				<Image src={'/logo.png'} alt='Marvel Logo' width={130} height={52} priority />
			</Link>

			<Link href={'/favorites'} className={'nav-favorites'} data-testid='number-favorites'>
				<HeartFilledSVG />
				<span>{favorites.length || 0}</span>
			</Link>
		</nav>
	);
};

export default NavBar;
