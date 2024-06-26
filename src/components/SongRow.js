import React, {useState} from 'react';
import "../styles/SongRow.css"
import {useDataLayerValue} from "./DataLayer";

function SongRow({track, spotify}) {

    const [playingTrack, setPlayingTrack] = useState(null);
    const [{}, dispatch] = useDataLayerValue();

    function handlePlay() {
        setPlayingTrack(track);

        dispatch({
            type: "SET_TRACK_URI",
            trackUri: playingTrack?.uri,
        })

    }

    /*Maybe it is bugging because the position has not been clicked on yet??*/
    return (
        <div className='songRow' onClick={handlePlay}>
            <img className="songRow-album" src={track.album.images[0].url} alt='' />
            <div className='songRow-info'>
                <h2>{track.name}</h2>
                <p>
                    {/*Joins all artists and then at the last one set a - */}
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
}

export default SongRow;