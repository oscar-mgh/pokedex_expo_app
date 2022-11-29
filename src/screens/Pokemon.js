import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {getPokemonDetailsByIdApi} from '../api/pokemon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Stats';
import AddFavourite from '../components/Pokemon/AddFavourite';
import UseAuth from '../hooks/UseAuth';

export default function Pokemon({route, navigation}) {
	const {params} = route;
	const [pokemon, setPokemon] = useState(null);
	const {auth} = UseAuth();

	useEffect(() => {
		navigation.setOptions({
			headerRight: () =>
				auth ? <AddFavourite id={pokemon?.id} /> : null,
			headerLeft: () => (
				<Icon
					name='arrow-left'
					color='#fff'
					size={30}
					style={{marginLeft: 15, marginBottom: 10}}
					onPress={navigation.goBack}
				/>
			),
		});
	}, [navigation, params, pokemon]);

	useEffect(() => {
		(async () => {
			try {
				const response = await getPokemonDetailsByIdApi(params.id);
				setPokemon(response);
			} catch (error) {
				navigation.goBack();
			}
		})();
	}, [params]);

	if (!pokemon) return null;

	return (
		<ScrollView>
			<Header
				name={pokemon.name}
				order={pokemon.order}
				img={pokemon.sprites.other['official-artwork'].front_default}
				type={pokemon.types[0].type.name}
			/>
			<Type types={pokemon.types} />
			<Stats stats={pokemon.stats} />
		</ScrollView>
	);
}
