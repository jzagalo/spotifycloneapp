export const initialState = {
    user: null,
    playlists: [],
    discover_weekly: [],
    playing: false,
    item: null,     
    token: "BQDkmaW1CSZcrRSIRuOUgAk1Bv9soBbs9y5xWJHsQUWmTVgw-LhonBCOId5I3TLkwwjRO5T_m49zju9z-lKPQcpvxo4-7FzqQ2roFoTSGEKIJVVEEl2TOggdym_litv55ZghDFECgtE3yMtMpEHivyjsMq4",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };            
        default:
            return state;
    }
}

export default reducer;