import { useState, useEffect } from "react";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	
	signOut,
} from "firebase/auth";

import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const provider = new GoogleAuthProvider();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState({});
	const auth = getAuth();
	const email = auth.email;
	const password = auth.password;
	console.log(auth);

	const signInWithGoogleAuth = () => {
		
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result.user.email);
				setUser(result.user);
			})
			.catch((error) => {
				setError(error);
			});
	};
	

	const logOut = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};
	// observe user
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				const uid = user.uid;
			}
		});
	}, []);

	return { signInWithGoogleAuth, user, error, logOut };
};
export default useFirebase;
