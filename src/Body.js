import React from "react";
import "./Body.css";
import Header from './Header';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import { useDataLayerValue } from "./Datalayer";


function Body({ spotify}) { 
    const [ {discover_weekly} ] = useDataLayerValue();   
   
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                {}
                <img src={discover_weekly?.images ? discover_weekly?.images[0].url : '' } alt="" /> 
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>description...</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

            {/* List of songs */}¨
            {discover_weekly?.tracks?.items?.map((item, index) => <SongRow key={index} track={item.track} />) }
            </div>            
        </div>
    );
   
}

export default Body;