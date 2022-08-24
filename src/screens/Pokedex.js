import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { getPokemonDetailsByUrlApi, getPokemonsApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
	const [pokemons, setPokemons] = useState([]);
	const [nextUrl, setNextUrl] = useState(null);

	useEffect(() => {
		(async () => {
			await loadPokemons();
		})();
	}, []);

	const loadPokemons = async () => {
		try {
			const response = await getPokemonsApi(nextUrl);
			setNextUrl(response.next);
			const pokemonsArray = [];
			for await (const pokemon of response.results) {
				const { id, name, types, order, sprites } =
					await getPokemonDetailsByUrlApi(pokemon.url);
				pokemonsArray.push({
					id: id,
					name: name,
					type: types[0].type.name,
					order,
					image: sprites.other['official-artwork'].front_default,
				});
			}
			setPokemons([...pokemons, ...pokemonsArray]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<SafeAreaView>
			<PokemonList
				pokemons={pokemons}
				loadPokemons={loadPokemons}
				thereAreNext={nextUrl}
			/>
		</SafeAreaView>
	);
}
