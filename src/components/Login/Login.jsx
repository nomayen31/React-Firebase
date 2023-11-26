import '../../App.css'
import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';






const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const handleGoogleLogin= () => {
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            console.log(user);

        })
        .error(error => {
            console.log('error', error.message);
        })
    }
   

    let styles = {
        marginTop: '20px',
    };
    return (

        <div style={styles}>
            <button onClick={handleGoogleLogin}>Google Login 🦖</button>
        </div>
    );
};

export default Login;