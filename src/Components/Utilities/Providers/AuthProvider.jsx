import { createContext, useState, useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // google Provider
    const googleProvider = new GoogleAuthProvider();

    // create new user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user login
    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // 
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    // google sign in
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // user signOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // onAuthStateChanged function
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            // get and set the web jwt token
            if (currentUser) {
                axios.post('https://art-summer-camp-server.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data.token);
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        googleSignIn,
        userLogIn,
        auth,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;