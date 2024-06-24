import React, {useState} from 'react';
import '../styles/Body.css'
import {useDataLayerValue} from "./DataLayer";
import SongRow from "./SongRow";

function Body({spotify}) {

    const [{likedSongs}] = useDataLayerValue();

    return (
        <div className="body">
            <h1>Liked songs</h1>
            <div className="song">
                {likedSongs.items?.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;