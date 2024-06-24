import React from 'react';
import '../styles/Body.css'
import {useDataLayerValue} from "./DataLayer";
import SongRow from "./SongRow";

function Body({spotify}) {

    const [{likedSongs}] = useDataLayerValue();

    console.log(likedSongs);

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