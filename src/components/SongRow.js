import React, {useState} from 'react';
import "../styles/SongRow.css"
import {useDataLayerValue} from "./DataLayer";

function SongRow({playlist, spotify}) {

    const [playingTrack, setPlayingTrack] = useState(null);
    const [{}, dispatch] = useDataLayerValue();

    function handlePlay() {
        setPlayingTrack(playlist);

        // dispatch({
        //     type: "SET_TRACK_URI",
        //     trackUri: playingTrack?.uri,
        // })

        dispatch({
            type: "SET_PLAYLIST_URI",
            playlistUri: playingTrack?.uri,
        })

    }

    return (
        <div className='songRow' onClick={handlePlay}>
            <img className="songRow-album" src={playlist.images[0].url} alt='' />
            <div className='songRow-info'>
                <h2>{playlist.name}</h2>
                <p>
                    {/*/!*Joins all artists and then at the last one set a - *!/*/}
                    {/*{track.artists.map((artist) => artist.name).join(", ")} -{" "}*/}
                    {playlist.description}
                    {/*{track.album.name}*/}
                </p>
            </div>
        </div>
    );
}

export default SongRow;