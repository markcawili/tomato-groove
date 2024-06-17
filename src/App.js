import Timer from "./components/Timer";
import List from "./components/List";
import Login from "./components/Login";
import Player from "./components/Player";
import React, {useEffect, useState} from "react";
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "./components/DataLayer"

//Will be master object for our interactions with our project and the API
const spotify = new SpotifyWebApi();

function App() {

    const [token, setToken] = useState(null);
    //We can grab whatever we want from the data layer from here! What we want is destructured already, no object returned
    const [{user}, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();

        /*sets the token*/
        window.location.hash = "";
        const _token = hash.access_token;

        //Use of the _ as a standard to refer to the temporary variable
        if (_token) {
            setToken(_token);

            spotify.setAccessToken(_token);
            //Gets the user account and returns a Promise
            //If everything goes well, returns a user
            spotify.getMe().then(user => {
                dispatch({
                    type: 'SET_USER',
                    user: user,
                })
            });
        }

        console.log("I have a token", token);
    }, []);


    console.log('I have a user', user);


    return (
        <div className="App">
            <h1>Tomato Groove</h1>
            <Timer />
            <div className="utility">
                <List />
                {token ? (<Player />) : (<Login />)}
            </div>
        </div>
    );
}

export default App;
