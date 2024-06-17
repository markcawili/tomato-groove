import Timer from "./components/Timer";
import List from "./components/List";
import Login from "./components/Login";
import React, {useEffect, useState} from "react";
import {getTokenFromUrl} from "./spotify";

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromUrl();

        /*sets the token*/
        window.location.hash = "";
        const _token = hash.access_token;

        //Use of the _ as a standard to refer to the temporary variable
        if (_token) {
            setToken(_token);
        }

        console.log("I have a token", token);
    }, []);

    return (
        <div className="App">
            <h1>Tomato Groove</h1>
            <Timer />
            <div className="utility">
                <List />
                {token ? (<h1>Logged in</h1>) : (<Login />)}
            </div>
        </div>
    );
}

export default App;
