import React from 'react';
import '../styles/Footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <p>Album and song details</p>
            </div>

            <div className="footer-center">
                <ShuffleIcon className="footer-green"></ShuffleIcon>
                <SkipPreviousIcon className="footer-icon"></SkipPreviousIcon>
                <PlayCircleOutlineIcon fontSize="large" className="footer-icon"></PlayCircleOutlineIcon>
                <SkipNextIcon className="footer-icon"></SkipNextIcon>
                <RepeatIcon className="footer-green"></RepeatIcon>
            </div>

            <div className="footer-right">
                <p>Volume controls</p>
            </div>
        </div>
    )
}

export default Footer;