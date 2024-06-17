import React from 'react';
import logo from "../resources/spotify.svg"
import '../styles/Login.css';
import {loginUrl} from "../spotify";

export default function Login() {

/*    const logout = () => {
        setToken("");
        window.localStorage.removeItem("token");
    }*/

    return (
        <div className="login">

            <img src={logo} alt=""/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>

        </div>
    )
}