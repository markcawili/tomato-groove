import React from "react";
import "../styles/Player.css"
import Body from "../components/Body";

function Player({spotify}) {

    /*Maybe can consolidate to just Body.js? Depends on App.js*/
    return (
        <div className="player">
            <Body />
        </div>
    );
}

export default Player;