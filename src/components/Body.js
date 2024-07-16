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
                <h1>Liked songs</h1>
            </div>
            {/*<div className="song">*/}
            {/*    {likedSongs.items?.map((item) => (*/}
            {/*        <SongRow spotify={spotify} track={item.track} />*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div className="song">
                {playlists.items?.map((item) => (
                    // FROM HERE YOU FIND OUT HOW TO DISPLAY THE ALBUM/PLAYLIST possibly just use uri?
                    <SongRow spotify={spotify} track={item.track}/>
                ))}
            </div>
        </div>
    )
}

export default Body;