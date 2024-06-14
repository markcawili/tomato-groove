import React from 'react';

export default function Spotify() {
    const CLIENT_ID = "4086684ccd334080b7243a8eba2b507c";
    const REDIRECT_URI = "http://localhost:3000/";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    return (
        <button>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Log In to Spotify!</a>
        </button>
    )
}