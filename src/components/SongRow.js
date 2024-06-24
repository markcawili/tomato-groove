import React from 'react';
import "../styles/SongRow.css"

function SongRow({track}) {
    return (
        <div className='songRow'>
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