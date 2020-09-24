import React from 'react';
import "./Footer.css";
import { Grid, Slider } from '@material-ui/core';
import { PlayCircleOutline, SkipPrevious, SkipNext,Shuffle, Repeat, PlaylistPlay, VolumeDown } from "@material-ui/icons";

function Footer() {    
    return (
        <div className="footer">
            <div className="footer__left">
                <div className="footer__songInfo">
                    <h4>Glory</h4>
                    <p>Paul Baloche</p>
                </div>
            </div>
            <div className="footer__center">
                <Shuffle className="footer__green" />
                <SkipPrevious className="footer__icon" />
                <PlayCircleOutline className="footer__icon" fontSize="large" />
                <SkipNext className="footer__icon" />
                <Repeat className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2} >
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid  item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );   
}

export default Footer;
