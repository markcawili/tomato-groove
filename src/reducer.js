//Data layer initial state slice
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
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
            }
        default:
            return state;
    }
}

export default reducer;