import '../styles/Body.css'
import {useDataLayerValue} from "./DataLayer";
import SongRow from "./SongRow";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Body({spotify}) {

    const [{likedSongs}] = useDataLayerValue();

    // console.log(likedSongs);

    function close() {
        let div = document.getElementsByClassName("utility-body");

        div[0].classList.add("close-transition");
    }

    return (
        <div className="utility-body">
            <div className="utility-body-header">
                <h1>Liked songs</h1>
                <ArrowRightAltIcon className="close" fontSize="large" onClick={close}></ArrowRightAltIcon>
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