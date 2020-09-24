import React, { useEffect, useState } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import {  getTokenFromUrl } from "./spotify";
import "./App.css";
import Login from "./Login";
import { useDataLayerValue } from "./Datalayer";

const spotify = new SpotifyWebApi();


function App() {

  const [_token, setToken] = useState(null);
  const dispatch = useDataLayerValue()[1];

  useEffect(() => {
    const hash = getTokenFromUrl();    
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token){
      setToken(_token);     
      spotify.setAccessToken(_token);      
      spotify.getMe().then(username => {
        
        dispatch({
          type: 'SET_USER',
          user: username,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })
     
     //"https://api.spotify.com/v1/playlists/19vcPJLjZDSoGotpdkETgv"
     spotify.getPlaylist('19vcPJLjZDSoGotpdkETgv').then(response => {
          console.log(response);
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
     });
    }   
  
  }, []);

  return (
    <div className="App">   
      {
        _token ? (
          <Player spotify={spotify} />
        ): 

        (<Login />)
      } 
      
    </div>
  );
}

export default App;
