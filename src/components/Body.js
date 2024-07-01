import '../styles/Body.css'
import {useDataLayerValue} from "./DataLayer";
import SongRow from "./SongRow";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';function Body({spotify}) {

    const [{likedSongs}] = useDataLayerValue();

    // console.log(likedSongs);

    function close() {
        let div = document.getElementsByClassName("utility-body");

        div[0].classList.remove("open-transition-body");
        div[0].classList.add("close-transition-body");

        /* TODO: need to add an open button on close */
    }

    function open() {
        let div = document.getElementsByClassName("utility-body");

        div[0].classList.remove("close-transition-body");
        div[0].classList.add("open-transition-body");
    }

    return (
        <div className="utility-body">
            <div className="utility-body-header">
                <h1>Liked songs</h1>
                <KeyboardArrowRightIcon className="close-player" fontSize="large" onClick={close} />
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