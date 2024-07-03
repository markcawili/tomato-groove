import '../styles/Body.css'
import {useDataLayerValue} from "./DataLayer";
import SongRow from "./SongRow";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useState} from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function Body({spotify}) {

    const [{likedSongs}] = useDataLayerValue();
    // const [isBodyOpen, setIsBodyOpen] = useState(true);
    //
    // const closeBody = () => {
    //     setIsBodyOpen(false);
    //
    //     let div = document.getElementsByClassName("utility-body");
    //
    //     div[0].classList.remove("open-transition-body");
    //     div[0].classList.add("close-transition-body");
    // }
    //
    // const openBody = () => {
    //     setIsBodyOpen(true);
    //
    //     let div = document.getElementsByClassName("utility-body");
    //
    //     div[0].classList.remove("close-transition-body");
    //     div[0].classList.add("open-transition-body");
    // }

    return (
        <div className="utility-body">
            <div className="utility-body-header">
                {/*{isBodyOpen ?*/}
                {/*(<KeyboardArrowRightIcon className="close-player" fontSize="large" onClick={closeBody} />)*/}
                {/*:*/}
                {/*(<KeyboardArrowLeftIcon className="close-player" fontSize="large" onClick={openBody} />)}*/}
                <h1>Liked songs</h1>
            </div>
            <div className="song">
                {likedSongs.items?.map((item) => (
                    <SongRow spotify={spotify} track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;