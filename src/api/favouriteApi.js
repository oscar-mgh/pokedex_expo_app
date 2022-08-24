import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull } from 'lodash';
import { FAVOURITE_STORAGE } from '../utils/constants';

export async function getFavouritePokemons() {
	try {
		const response = await AsyncStorage.getItem(FAVOURITE_STORAGE);
		return response ? JSON.parse(response) : [];
	} catch (error) {
		console.error(error);
	}
}

export async function AddFavouritePokemon(id) {
	try {
		const favourites = await getFavouritePokemons();
		favourites.push(id);
		await AsyncStorage.setItem(FAVOURITE_STORAGE, JSON.stringify(favourites));
	} catch (error) {
		console.error(error);
	}
}

export async function isFavouritePokemonApi(id) {
	try {
		const response = await getFavouritePokemons();
		return includes(response, id);
	} catch (error) {
		console.error(error);
	}
}

export async function removeFavoriteApi(id) {
	try {
		const favourites = await getFavouritePokemons();
		const newFavs = pull(favourites, id);
		await AsyncStorage.setItem(FAVOURITE_STORAGE, JSON.stringify(newFavs));
	} catch (error) {
		console.error(error);
	}
}
