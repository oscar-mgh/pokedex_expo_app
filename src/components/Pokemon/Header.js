import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native';
import getColorByType from '../../utils/getColorByType';
import { capitalize } from 'lodash';

export default function Header({ name, order, img, type }) {
	const color = getColorByType(type);
	const typeStyles = [{ backgroundColor: color, ...styles.bg }];
	return (
		<>
			<View style={typeStyles} />
			<SafeAreaView style={styles.content}>
				<View style={styles.header}>
					<Text style={styles.name}>{capitalize(name)}</Text>
					<Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
				</View>
				<View style={styles.contentImg}>
					<Image source={{ uri: img }} style={styles.image} />
				</View>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	bg: {
		width: '100%',
		height: '60.5%',
		position: 'absolute',
	},
	content: {
		marginHorizontal: 20,
		marginTop: 30,
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 50,
	},
	name: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 29,
	},
	order: {
		color: 'white',
		fontWeight: 'bold',
	},
	contentImg: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		top: 30,
	},
	image: {
		width: 250,
		height: 300,
		resizeMode: 'contain',
	},
});
