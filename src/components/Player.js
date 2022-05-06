import React, { useEffect, useState, useRef } from 'react'
import PlayerDetalles from './PlayerDetalles'
import PlaterControls from './PlaterControls'
import { Col, Row } from 'react-bootstrap';

const Player = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else if (forwards == false) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;

                return temp;

            });
        }
    }

    return (
        <div className="Container-fluid conteplayer">
            <div className="player">
                <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>

                <div className="conteDivImgControl">
                    <PlayerDetalles song={props.songs[props.currentSongIndex]} />
                    <PlaterControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} song={props.songs[props.currentSongIndex]} />
                </div>

                <br></br>
                <h5 className="detalles-title">Siguiente Canción: {props.songs[props.nextSongIndex].title}</h5>

            </div>
        </div>
    )
}

export default Player