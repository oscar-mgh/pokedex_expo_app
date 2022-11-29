import {
	View,
	Text,
	FlatList,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';
import React from 'react';
import PokemonCard from './PokemonCard';

export default function PokemonList({pokemons, loadPokemons, thereAreNext}) {
	const loadMore = () => {
		loadPokemons();
	};

	return (
		<FlatList
			data={pokemons}
			numColumns={2}
			keyExtractor={(pokemon) => String(pokemon.id)}
			renderItem={({item}) => <PokemonCard pokemon={item} />}
			contentContainerStyle={styles.flatListContentContainer}
			onEndReached={thereAreNext && loadMore}
			onEndReachedThreshold={0.1}
			ListFooterComponent={
				thereAreNext && (
					<ActivityIndicator
						size='large'
						style={styles.spinner}
						color='#5bF'
					/>
				)
			}
		/>
	);
}

const styles = StyleSheet.create({
	flatListContentContainer: {
		paddingHorizontal: 5,
	},
	spinner: {
		marginTop: 20,
		marginBottom: 60,
	},
});
