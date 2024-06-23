import React from 'react';
import '../styles/Body.css'
import {useDataLayerValue} from "./DataLayer";

function Body({spotify}) {

    const [{likedSongs}, dispatch] = useDataLayerValue();

    console.log(likedSongs);

    return (
        <div className="body">
            <h1>Liked songs</h1>
            <p>test</p>
        </div>
    )
}

export default Body;