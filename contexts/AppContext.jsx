'use client';
import { createContext, useContext, useEffect, useState } from 'react';

export const AppContext = createContext(null);

function AppContextProvider({ children }) {
	const [favorites, setFavorites] = useState([]);

	const addFavourite = (item) => {
		if (favorites.find((fav) => fav.id === item.id)) return;
		setFavorites((prev) => {
			const newFavorites = [...prev, item];
			localStorage.setItem('favorites', JSON.stringify(newFavorites));
			return newFavorites;
		});
	};

	const removeFavourite = (id) => {
		const newFavorites = [...favorites];
		const index = newFavorites.findIndex((fav) => fav.id === id);
		if (index === -1) return;
		newFavorites.splice(index, 1);
		localStorage.setItem('favorites', JSON.stringify(newFavorites));
		setFavorites(newFavorites);
	};

	useEffect(() => {
		const items = localStorage.getItem('favorites');
		if (items && favorites.length === 0) {
			const storedFavorites = JSON.parse(items);
			setFavorites(storedFavorites);
		}
	}, [favorites]);

	return (
		<AppContext.Provider
			value={{
				favorites,
				addFavourite,
				removeFavourite,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export const useAppContext = () => {
	return useContext(AppContext);
};

export default AppContextProvider;
