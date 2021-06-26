import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import { Link } from 'react-router-dom';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const [imageURL, setImageURL] = useState(null);

    // const onSubmit = data => {
    //     console.log(data)
    // }




    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history =useHistory();
    const location =useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(true);

    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
    })


    const handelSubmit = (event) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);

                    // ..
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log(res.user.displayName);
                    const { displayName, email } = res.user;
                    const signedInUser = { name: displayName, email };
                    setLoggedInUser(signedInUser);
                    history.replace(from);
                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }


        event.preventDefault();
    };

    const handelChange = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);


        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;

        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(function () {
            console.log('User name updated successfully')
        }).catch(function (error) {
            // console.log(error)
        });
    }

    var provider = new firebase.auth.GoogleAuthProvider();

    const handelGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                history.replace(from);

                setUser(user);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                // console.log(errorMessage)
            });
    }

    return (
        <div className="login-content">
            {/* <form>
                <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..." />
                <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                    Sign up
                </button>
            </form> */}

            <div className="login">
           
           <h3>{newUser ? "Create an account" : "Log In"}</h3>
           <form onSubmit={handelSubmit}>
               {newUser && <input type="text" onBlur={handelChange} placeholder="Name"
                   name="name" />}
               <br />
               <input type="email" onBlur={handelChange} placeholder="Email" name="email" required />
               <br />
               <input type="password" onBlur={handelChange} name="password" placeholder="Password" required />
               <br />
               <input className="submit-btn" type="submit" value={newUser ? "Sign Up" : "Sign In"} />
           </form>
           <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
           <label htmlFor="newUser"> Already have an account?</label>
           <p style={{ color: 'red' }}>{user.error}</p>
           {
               user.success && <p style={{ color: 'green' }}>User {newUser ? "creat" : "logged in"} successfully</p>
           }

           <button class="login-google-btn" onClick={handelGoogleSignIn}>Sign In using Google</button>
           <p>{user.displayName}</p>
           <p>{newUser.displayName}</p>

       </div>



            {/* <div className="logIn-center pb-6">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div  >
                        <div className="txt-field">
                            <input  {...register("email")} />
                            <label htmlFor=""> Username</label>
                        </div>
                           
                        <div className="txt-field">
                            <input type="password" {...register("password", { required: true })} />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="pass">Forgot Password?</div>
                       

                        <input className="input-btn" type="submit" value="Login"/>
                        
                    </div>
                    <p className="my-6">or</p>
                    <button className="input-btn ">Google</button>
                </form>
            </div> */}
        </div>
    );
};

export default Login;