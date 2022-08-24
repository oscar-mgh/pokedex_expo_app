import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function NoLogged() {
	const navigation = useNavigation();
	return (
		<View style={styles.content}>
			<Text style={styles.text}>
				Para ver tus favoritos accede a tu cuenta
			</Text>
			<Button
				color="#0965BF"
				title="Iniciar Sesion"
				onPress={() => navigation.navigate('Account')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		marginVertical: 35,
		paddingHorizontal: 35,
	},
	text: {
		textAlign: 'center',
		marginBottom: 30,
	},
});
