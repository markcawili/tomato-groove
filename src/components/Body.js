import '../styles/Body.css'
import {useDataLayerValue} from "./DataLayer";
import SongRow from "./SongRow";

function Body({spotify}) {

    const [{likedSongs}] = useDataLayerValue();

    return (
        <div className="utility-body">
            <div className="utility-body-header">
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