//Note capitalized since it is not a component

/**
 * https://developer.spotify.com/documentation/web-api/tutorials/code-flow
 */

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://tomato-groove.web.app/";
/*
const redirectUri = "http://localhost:3000/";
*/
const clientId = "4086684ccd334080b7243a8eba2b507c";
const scopes = [
    "user-library-read",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-library-modify",
    "playlist-read-private",
    "playlist-read-collaborative"
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')

        //#accessToken=mysecretkey&name=myname&...

        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}

console.log(redirectUri);

//Exported so it is allowed to be used outside
//%20 for ASCII space separation
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=True`;