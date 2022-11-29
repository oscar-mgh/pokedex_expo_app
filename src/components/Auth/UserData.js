import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useCallback, useState} from 'react';
import UseAuth from '../../hooks/UseAuth';
import {useFocusEffect} from '@react-navigation/native';
import {size} from 'lodash';
import {getFavouritePokemons} from '../../api/favouriteApi';

export default function UserData() {
	const {auth, logout} = UseAuth();
	const [total, setTotal] = useState(0);

	useFocusEffect(
		useCallback(() => {
			(async () => {
				try {
					const response = await getFavouritePokemons();
					setTotal(size(response));
				} catch (error) {
					setTotal(0);
				}
			})();
		}, [])
	);

	return (
		<View style={styles.content}>
			<View style={styles.titleBlock}>
				<Text style={styles.title}>Bienvenido</Text>
				<Text
					style={styles.title}
				>{`${auth.firstName} ${auth.lastName}`}</Text>
			</View>
			<View style={styles.dataContent}>
				<ItemMenu
					title='Nombre'
					text={`${auth.firstName} ${auth.lastName}`}
				/>
				<ItemMenu
					title='Usuario'
					text={`${auth.username}`}
				/>
				<ItemMenu
					title='Email'
					text={`${auth.email}`}
				/>
				<ItemMenu
					title='Total Favoritos'
					text={`${total} pokemons `}
				/>
				<View style={styles.btnLogout}>
					<Button
						color='#345'
						title='Logout'
						onPress={logout}
					/>
				</View>
			</View>
		</View>
	);
}

function ItemMenu({title, text}) {
	return (
		<View style={styles.itemMenu}>
			<Text style={styles.itemMenuTitle}>{title}:</Text>
			<Text>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		marginHorizontal: 20,
		marginTop: 20,
	},
	titleBlock: {
		marginBottom: 30,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 22,
	},
	dataContent: {
		marginBottom: 14,
	},
	itemMenu: {
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 2,
		borderColor: '#ccc',
	},
	itemMenuTitle: {
		fontWeight: 'bold',
		paddingRight: 10,
		width: 125,
	},
	btnLogout: {
		marginTop: 25,
	},
});
