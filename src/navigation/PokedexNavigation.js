import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pokedex } from '../screens';
import Pokemon from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Pokedex"
				component={Pokedex}
				options={{
					headerTitle: 'Pokedex',
					headerTitleAlign: 'center',
				}}
			/>
			<Stack.Screen
				name="Pokemon"
				component={Pokemon}
				options={{
					headerTitle: '',
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
}
