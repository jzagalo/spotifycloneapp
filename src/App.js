import React, { useEffect, useState } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from './StateProvider';
import Player from './Player';
import {  getTokenFromUrl } from "./spotify";
import "./App.css";
import Login from "./Login";
import { useDataLayerValue } from "./Datalayer";

const spotify = new SpotifyWebApi();


function App() {

  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();    
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token){
      setToken(_token);     
      spotify.setAccessToken(_token);      
      spotify.getMe().then(user => {
        console.log("UU", user);
        dispatch({
          type: 'SET_USER',
          user
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })
    }   
  
  }, []);

  return (
    <div className="App">   
      {
        token ? (
          <Player spotify={spotify} />
        ): 

        (<Login />)
      } 
      
    </div>
  );
}

export default App;
