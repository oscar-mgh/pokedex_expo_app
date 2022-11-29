import React, {useState, createContext} from 'react';

export const AuthContext = createContext({
	auth: null,
});

export function AuthProvider({children}) {
	const [auth, setAuth] = useState(null);

	const login = (userData) => {
		setAuth(userData);
	};

	const logout = () => {
		setAuth(null);
	};

	const contextValue = {
		auth,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
}
