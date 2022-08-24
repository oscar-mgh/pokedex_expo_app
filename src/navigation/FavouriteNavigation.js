import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Favourite } from '../screens';
import Pokemon from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function FavouriteNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Favourite"
				component={Favourite}
				options={{
					title: 'Favoritos',
					headerTitleAlign: 'center',
				}}
			/>
			<Stack.Screen
				name="Pokemon"
				component={Pokemon}
				options={{
					title: '',
					headerTitleAlign: 'center',
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
}
