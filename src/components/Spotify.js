import React from 'react';
import {useEffect, useState} from "react";

export default function Spotify() {
    const CLIENT_ID = "4086684ccd334080b7243a8eba2b507c";
    const REDIRECT_URI = "http://localhost:3000/";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const [token, setToken] = useState("")

    useEffect(() => {
        /*From url*/
        const hash = window.location.hash;
        /*Get token from local storage*/
        let token = window.localStorage.getItem("token");

        /*If there is no token and there is a hash, get the token from url*/
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

            /*sets the token*/
            window.location.hash = "";
            window.localStorage.setItem("token", token);
            setToken(token);
        }
    }, []);

    return (
        <button>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Log In to Spotify!</a>
        </button>
    )
}