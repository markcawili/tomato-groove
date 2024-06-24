import React from 'react';
import '../styles/Footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import {Grid, Slider} from "@mui/material";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import {useDataLayerValue} from "./DataLayer";

function Footer() {

    const [{currentTrack}] = useDataLayerValue();

    /*CURRENT ISSUE IS THAT WHEN THE SONG CHANGES IT IS NOT UPDATED*/
    console.log(currentTrack);

    return (
        <div className="footer">
            <div className="footer-left">
                {/*<img src={currentTrack.item.album.images[0].url}*/}
                {/*     alt="" className="footer-albumLogo"/>*/}
                <div className="footer-songInfo">
                    {/*<h4>{currentTrack.item.name}</h4>*/}
                    {/*<p>{currentTrack.item.artists.map((artist) => artist.name).join(", ")}</p>*/}
                </div>
            </div>

            <div className="footer-center">
                <ShuffleIcon className="footer-green"></ShuffleIcon>
                <SkipPreviousIcon className="footer-icon"></SkipPreviousIcon>
                <PlayCircleOutlineIcon fontSize="large" className="footer-icon"></PlayCircleOutlineIcon>
                <SkipNextIcon className="footer-icon"></SkipNextIcon>
                <RepeatIcon className="footer-green"></RepeatIcon>
            </div>

            <div className="footer-right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;