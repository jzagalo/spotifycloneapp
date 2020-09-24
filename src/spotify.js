export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/callback";
const clientId = "fa4da9f227f643f78c62ac42820d18ae";
//const secret = "339282900afe497c9be17843205b2a5b";

const scopes = "user-read-private user-read-email";

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;

        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scopes)}&response_type=token&show_dialog=true`;