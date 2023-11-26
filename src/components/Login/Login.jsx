import '../../App.css'
import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const notify = () => toast("User SignOut Successfully 🥳");
    const notifySignin = () => toast("User SignIn Successfully 🥳");
    const [user , setUser] = useState(null)
    const auth = getAuth(app)
    const GoogleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const handleGithubLogin = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser)
        })
        .catch(error=>{
            console.log('error', error.message);
        })
    }

    const handleGoogleLogin= () => {
        signInWithPopup(auth, GoogleProvider)
        .then(result =>{
            const LoggedInUser = result.user;
            setUser(LoggedInUser);
            notifySignin()

        })
        .error(error => {
            console.log('error', error.message);
        })
    }

    const handleSighOut = () =>{
        signOut(auth)
        .then(result => {
            setUser(null)
            console.log(result);
            notify()
        })
        .catch(error=>{
            console.log('error', error.message);
        })
    }
   

    let styles = {
        marginTop: '20px',
       
    };
    let styleLeft = {
        marginLeft: '50px'
    }
    return (

        <div style={styles}>
            <ToastContainer />


            {
             user ?
             <button style={styleLeft} onClick={handleSighOut}>Google SignOut 🦖</button>
             :
             <div>
                <button onClick={handleGoogleLogin}>Google Login 🦖</button> 
                <button onClick={handleGithubLogin}>GitHub Login</button>
             </div>
            }
            


            { user &&  <div>
                <h2>User Name: {user?.displayName}</h2>
                <p>Email: {user?.email}</p>
                <p>User Name: {user?.reloadUserInfo.screenName}</p>
                <img src={user?.photoURL} alt="" />
            </div>}

            
        </div>
    );
};

export default Login;