import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
	AddFavouritePokemon,
	isFavouritePokemonApi,
	removeFavoriteApi,
} from '../../api/favouriteApi';

const iconStyles = {
	position: 'relative',
	right: 17,
	top: -8,
};

export default function AddFavourite({ id }) {
	const [isFavourite, setIsFavourite] = useState(null);
	const [reloadIcon, setReloadIcon] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await isFavouritePokemonApi(id);
				setIsFavourite(response);
			} catch (error) {
				setIsFavourite(false);
			}
		})();
	}, [id, reloadIcon]);

	const reloadFavIcon = () => {
		setReloadIcon((prev) => !prev);
	};
	const addToFavourites = async () => {
		try {
			await AddFavouritePokemon(id);
			reloadFavIcon();
		} catch (error) {
			console.error(error);
		}
	};
	const removefromFavourites = async () => {
		try {
			await removeFavoriteApi(id);
			reloadFavIcon();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<Icon
				solid={isFavourite}
				style={iconStyles}
				name="heart"
				color={`${isFavourite ? 'pink' : 'white'}`}
				size={30}
				onPress={isFavourite ? removefromFavourites : addToFavourites}
			/>
		</>
	);
}
