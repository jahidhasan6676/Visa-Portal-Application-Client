import {  createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
   

    // google popup
    const googlePopup = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    
    // login user
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign up user
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // logOut user
    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //    update profile
    const updateUserProfile = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }


    const authInfo = {
        userRegister,
        userLogin,
        googlePopup,
        userLogOut,
        setUser,
        user,
        loading,
        updateUserProfile
        
    }


     // observation setup
     useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
                
            }
            else{
                setUser(null)
            }
            setLoading(false);
            return () => {
                unSubscriber();
            }
        })
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;