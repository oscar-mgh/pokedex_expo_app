import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FavouriteNavigation from './FavouriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

const nav = {
	fontWeight: 'bold',
	fontSize: 14,
};

export default function Navigation() {
	return (
		<Tab.Navigator
			initialRouteName='Pokedex'
			tabBarOptions={{
				activeTintColor: '#0965BF',
				inactiveTintColor: 'black',
				labelStyle: nav,
			}}
		>
			<Tab.Screen
				name='Favourite'
				component={FavouriteNavigation}
				options={{
					tabBarLabel: 'Favoritos',
					tabBarIcon: () => (
						<Icon
							name='heart'
							size={24}
							fill
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Pokedex'
				component={PokedexNavigation}
				options={{
					tabBarLabel: '',
					tabBarIcon: () => renderPokeball(),
				}}
			/>
			<Tab.Screen
				name='Account'
				component={AccountNavigation}
				options={{
					tabBarLabel: 'Mi Cuenta',
					tabBarIcon: () => (
						<Icon
							name='account-circle'
							size={24}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

function renderPokeball() {
	return (
		<Image
			source={require('../assets/pokeball.png')}
			style={{width: 73, height: 73, top: -19}}
		/>
	);
}
