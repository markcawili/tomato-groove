import React from "react";
import "../styles/Player.css"
import Body from "../components/Body";

function Player({spotify}) {

    return (
        <div className="player">
            <div className="player_body">
                <Body />
            </div>
        </div>
    );
}

export default Player;