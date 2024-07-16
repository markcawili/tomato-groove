import '../styles/Body.css'
import {useDataLayerValue} from "./DataLayer";
import SongRow from "./SongRow";

function Body({spotify}) {

    const [{likedSongs, playlists}] = useDataLayerValue();

    console.log(playlists);
    console.log(likedSongs);

    return (
        <div className="utility-body">
            <div className="utility-body-header">
                <h1>Playlists</h1>
            </div>

            {/*For Liked Songs*/}
            {/*<div className="song">*/}
            {/*    {likedSongs.items?.map((item) => (*/}
            {/*        <SongRow spotify={spotify} track={item.track} />*/}
            {/*    ))}*/}
            {/*</div>*/}

            <div className="song">
                {playlists.items?.map((item) => (
                    <SongRow spotify={spotify} playlist={item}/>
                ))}
            </div>
        </div>
    )
}

export default Body;