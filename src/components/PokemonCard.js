import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {capitalize} from 'lodash';
import getColorByType from '../utils/getColorByType';

export default function PokemonCard({pokemon}) {
	const navigation = useNavigation();

	const goToPokemon = () => {
		navigation.navigate('Pokemon', {id: pokemon.id});
	};

	const pokemonColor = getColorByType(pokemon.type);
	const bgStyles = {
		backgroundColor: pokemonColor,
	};

	return (
		<TouchableWithoutFeedback onPress={goToPokemon}>
			<View style={{...styles.card, ...bgStyles}}>
				<Text style={styles.number}>
					#{`${pokemon.order}`.padStart(3, 0)}
				</Text>
				<Text style={styles.name}>{capitalize(pokemon.name)}</Text>
				<Image
					source={{uri: pokemon.image}}
					style={styles.image}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		margin: 7,
		borderRadius: 8,
	},
	image: {
		width: 110,
		height: 110,
	},
	name: {
		position: 'relative',
		fontSize: 15,
		fontWeight: 'bold',
		left: 7,
	},
	number: {
		position: 'absolute',
		right: 7,
		color: 'black',
		fontStyle: 'italic',
		fontSize: 16,
	},
});
