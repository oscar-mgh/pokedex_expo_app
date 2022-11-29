import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {map, capitalize, upperCase} from 'lodash';
import getColorByType from '../../utils/getColorByType';

export default function Type({types}) {
	return (
		<View style={styles.content}>
			{map(types, (item, index) => (
				<View
					key={index}
					style={{
						...styles.bg,
						backgroundColor: getColorByType(item.type.name),
					}}
				>
					<Text
						style={{
							fontSize: 17,
							color: '#fff',
							fontWeight: 'bold',
						}}
					>
						{capitalize(item.type.name)}
					</Text>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		margin: 30,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	bg: {
		padding: 9,
		paddingLeft: 14,
		paddingRight: 14,
		borderRadius: 7,
		borderWidth: 3,
		borderColor: '#20232a',
	},
});
