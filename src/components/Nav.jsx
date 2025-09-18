import React, {useState, useEffect} from 'react'
import { auth } from "../firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";



const Nav = () => {


    const [user, setUser] = useState({});
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          setTimeout(() => {
            setLoading(false);
            console.log(user);
            if (user) {
              setUser(user);
            }
          }, 300);
        });
      }, []);
    
      function register() {
        console.log("register");
        createUserWithEmailAndPassword(auth, "email@email.com", "test123")
          .then((user) => {
            console.log(user);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      function login() {
        signInWithEmailAndPassword(auth, "email@email.com", "test123")
          .then(({ user }) => {
            console.log(user);
            setUser(user);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      function logout() {
        signOut(auth);
        setUser({});
      }

  return (
    <nav>
      <div className="nav__container">
        <div className="nav__options">
          <div className="nav__login"></div>
          <button onClick={register} className="btn login__btn">
            Login
          </button>
          <button onClick={login} className="btn register__btn">
            Register
          </button>
          <button onClick={logout} className="btn logout__btn"></button>
          <div className="nav__register"></div>
          <div className="nav__logout"></div>
        </div>
      </div>
    </nav>
  );
};



export default Nav;
