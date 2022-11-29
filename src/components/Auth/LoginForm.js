import React, {useState} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	Keyboard,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {user, userDetails} from '../../utils/userDB';
import UseAuth from '../../hooks/UseAuth';

export default function LoginForm() {
	const [error, setError] = useState('');
	const {login, logout} = UseAuth();
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		validateOnChange: false,
		onSubmit: (formData) => {
			const {username, password} = formData;
			if (username !== user.username || password !== user.password) {
				setError('El usuario o la contraseña no son correctos');
			} else {
				login(userDetails);
			}
		},
	});
	return (
		<View>
			<Text style={styles.title}>Iniciar Sesion</Text>
			<TextInput
				placeholder='Nombre de usuario'
				style={styles.input}
				autoCapitalize='none'
				selectionColor='#3485FD'
				value={formik.values.username}
				onChangeText={(text) => formik.setFieldValue('username', text)}
			/>
			<TextInput
				placeholder='Contraseña'
				style={styles.input}
				secureTextEntry={true}
				autoCapitalize='none'
				selectionColor='#3485FD'
				value={formik.values.password}
				onChangeText={(text) => formik.setFieldValue('password', text)}
			/>
			<View style={styles.button}>
				<Button
					color='#0965BF'
					title='Entrar'
					onPress={formik.handleSubmit}
				/>
				<Text style={styles.error}>{error}</Text>
				<Text style={styles.error}>{formik.errors.username}</Text>
				<Text style={styles.error}>{formik.errors.password}</Text>
			</View>
		</View>
	);
}

function initialValues() {
	return {
		username: '',
		password: '',
	};
}

function validationSchema() {
	return {
		username: Yup.string().required('El usuario es obligatorio'),
		password: Yup.string().required('La contraseña es obligatoria'),
	};
}

const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		fontSize: 28,
		fontWeight: 'bold',
		marginTop: 25,
		marginBottom: 15,
	},
	input: {
		width: '90%',
		height: 50,
		margin: 11,
		borderWidth: 2,
		borderColor: '#444',
		padding: 10,
		borderRadius: 6,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	error: {
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#DF1100',
		marginTop: 20,
	},
	button: {
		width: '90%',
		marginTop: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});
