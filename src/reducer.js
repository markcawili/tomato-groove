//Data layer initial state slice
export const initialState = {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    item: null,
    likedSongs: [],
    trackUri: [],
    playlistUri: [],
};

const reducer = (state, action) => {

    //We use this for debugging
    console.log(action);

    //Action -> type, [payload]
    //aka like 'SET_USER' 'user'
    switch (action.type) {
        case 'SET_USER':
            return {
                //keep what is current and update the rest
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_LIKED_SONGS':
            return {
                ...state,
                likedSongs: action.likedSongs
            };

        case 'SET_TRACK_URI':
            return {
                ...state,
                trackUri: action.trackUri
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };

        case 'SET_PLAYLIST_URI':
            return {
                ...state,
                playlistUri: action.playlistUri
            }

        default:
            return state;
    }
}

export default reducer;