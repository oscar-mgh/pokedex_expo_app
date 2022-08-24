import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { getFavouritePokemons } from '../api/favouriteApi';
import { getPokemonDetailsByIdApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import NoLogged from '../components/NoLogged';
import PokemonList from '../components/PokemonList';
import UseAuth from '../hooks/UseAuth';

export default function Favourite() {
	const [pokemons, setPokemons] = useState([]);
	const { auth } = UseAuth();

	useFocusEffect(
		useCallback(() => {
			if (auth) {
				(async () => {
					const response = await getFavouritePokemons();
					const pokemonsArray = [];

					for await (const id of response) {
						const pokemonDetails = await getPokemonDetailsByIdApi(id);
						pokemonsArray.push({
							id: pokemonDetails.id,
							name: pokemonDetails.name,
							type: pokemonDetails.types[0].type.name,
							order: pokemonDetails.order,
							image: pokemonDetails.sprites.other['official-artwork']
								.front_default,
						});
					}

					setPokemons(pokemonsArray);
				})();
			}
		}, [auth])
	);

	return !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />;
}
