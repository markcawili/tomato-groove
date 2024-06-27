import React from 'react';
import logo from "../resources/spotify.svg"
import '../styles/Login.css';
import {loginUrl} from "../spotify";

export default function Login() {

    return (
        <div className="login">

            <a href={loginUrl}> <img src={logo} alt=""/> LOGIN WITH SPOTIFY</a>

        </div>
    )
}