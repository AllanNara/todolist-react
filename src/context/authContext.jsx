import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { auth } from "../services/firebase";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const register = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);
	const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
	const logout = () => signOut(auth);

	const provider = new GoogleAuthProvider();
	const signUpWithGoogle = () => signInWithPopup(auth, provider);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider
			value={{ user, login, logout, register, loading, signUpWithGoogle }}
		>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
