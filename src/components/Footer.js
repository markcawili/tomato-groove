import React, {useState, useEffect} from 'react';
import '../styles/Footer.css';
import {useDataLayerValue} from "./DataLayer";
import SpotifyPlayer from "react-spotify-web-playback"

function Footer() {

    const [{token, trackUri, playlistUri}] = useDataLayerValue();
    const [play, setPlay] = useState(false);

    useEffect(() => setPlay(true), [playlistUri]);

    // /*CHECK THE URI*/
    // console.log(trackUri)
    // console.log(playlistUri)

    if (!token) return null;

    return (
        <div className="footer">

            <SpotifyPlayer className="footer-player"
                token={token}
                showSaveIcon
                // uris={trackUri}
                uris={playlistUri ? [playlistUri] : []}
                play={play}
                callback={state => {
                    if (!state.isPlaying) setPlay(false);
                }}
                hideAttribution
                layout={'responsive'}
                initialVolume={0.5}
                styles={{
                    bgColor: "#2a231f",
                    color: "#ecefee",
                    trackNameColor: "#ecefee",
                    sliderColor: "#cd2200",
                    sliderTrackColor: "#ecefee",
                    sliderHandleColor: "#cd2200",
                    trackArtistColor: "#ecefee",
                }}
            />
        </div>
    )
}

export default Footer;