import Timer from "./components/Timer";
import List from "./components/List";
import Login from "./components/Login";
import Player from "./components/Player";
import React, {useEffect} from "react";
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "./components/DataLayer"
import Footer from "./components/Footer";
import {Helmet} from "react-helmet";

//Will be master object for our interactions with our project and the API
const spotify = new SpotifyWebApi();

function App() {

    //We can grab whatever we want from the data layer from here! What we want is destructured already, no object returned
    const [{token}, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();

        /*sets the token*/
        window.location.hash = "";
        const _token = hash.access_token;

        //Use of the _ as a standard to refer to the temporary variable
        if (_token) {

            dispatch({
                type: "SET_TOKEN",
                token: _token,
            })

            spotify.setAccessToken(_token);
            //Gets the user account and returns a Promise
            //If everything goes well, returns a user
            spotify.getMe().then((user) => {
                dispatch({
                    type: 'SET_USER',
                    user: user,
                });
            });

            spotify.getMySavedTracks(_token).then(response =>
                dispatch({
                    type: "SET_LIKED_SONGS",
                    likedSongs: response,
                })
            );

        }
    }, []);

    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Tomato Groove</title>
            </Helmet>

            <div className="header">
                <h1>Tomato Groove</h1>
                {/*<button>Dark mode</button>*/}
            </div>

            <div className="row">

                <div className="col-3 col-s-3 listDiv">
                    <List/>
                </div>

                <div className="col-6 col-s-9 timerDiv">
                    <Timer/>
                </div>

                <div className="col-3 col-s-12">
                    {token ? (<Player spotify={spotify}/>) : (<Login/>)}
                </div>

            </div>

            {token ? (<Footer/>) : null}
        </div>
    );
}

export default App;
