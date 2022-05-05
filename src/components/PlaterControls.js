import React from 'react'
import { FaPlay, FaPause } from 'react-icons/fa';
import { GiNextButton, GiPreviousButton } from 'react-icons/gi';
import '../../src/styles/player.css'

const PlaterControls = (props) => {
    return (
        <div className="player-controles">

            <button className="btnskip"onClick={() => props.SkipSong(false)}><GiPreviousButton /></button>
            <button className="btnplay" onClick={()=> props.setIsPlaying(!props.isPlaying)}><FaPlay /></button>
            {/* <button className="btn skip-btn"><FaPause /></button> */}
            <button className="btnskip" onClick={() => props.SkipSong()}><GiNextButton /></button>
        </div>
    )
}

export default PlaterControls