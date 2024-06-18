import React from "react";
import "../styles/Player.css"
import Body from "../components/Body";
import Footer from "../components/Footer";

function Player({spotify}) {

    return (
        <div className="player">
            <div className="player_body">
                <Body />
            </div>

            <Footer />
        </div>
    );
}

export default Player;