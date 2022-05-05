import React, { useEffect, useState, useRef } from 'react'
import PlayerDetalles from './PlayerDetalles'
import PlaterControls from './PlaterControls'

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
            })
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            })

        }
    }

    return (
        <div className="Container-fluid conteplayer">
            <div className="player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
                <h4 className="textInicialAudio">Nuevo Audio</h4>
                <br></br>
                <PlayerDetalles song={props.songs[props.currentSongIndex]} />
                <br></br>
                <PlaterControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong}/>
                <br></br>

                <p><strong>Siguiente</strong>{props.songs[props.nextSongIndex].title} by  {props.songs[props.nextSongIndex].artist}</p>

            </div>
        </div>
    )
}

export default Player