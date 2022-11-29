import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import UseAuth from '../hooks/UseAuth';

export default function Account() {
	const {auth} = UseAuth();
	return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
