import '../styles/Body.css'
import {useDataLayerValue} from "./DataLayer";
import SongRow from "./SongRow";

function Body({spotify}) {

    const [{likedSongs}] = useDataLayerValue();

    console.log(likedSongs);

    return (
        <div className="utility-body">
            <h1>Liked songs</h1>
            <div className="song">
                {likedSongs.items?.map((item) => (
                    <SongRow spotify={spotify} track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;