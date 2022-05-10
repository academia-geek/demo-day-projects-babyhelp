import React from 'react'
import { FaPlay, FaPause } from 'react-icons/fa';
import { GiNextButton, GiPreviousButton } from 'react-icons/gi';
import '../../styles/player.css'

const PlayerContrRelajMama = (props) => {
    return (
        <div className="">
            <div>
                <br></br>
                <center>
                    <p className="detalles-title">{props.song.title}</p>
                </center>
            </div>



            <div className="player-controles">
                <button className="btnskip" onClick={() => props.SkipSong(false)}><GiPreviousButton /></button>
                <button className="btnplay" onClick={() => props.setIsPlaying(!props.isPlaying)}>{props.isPlaying ? <FaPause /> : <FaPlay />}</button>
                {/* <button className="btn skip-btn"><FaPause /></button> */}
                <button className="btnskip" onClick={() => props.SkipSong()}><GiNextButton /></button>
            </div>
        </div>
    )
}

export default PlayerContrRelajMama