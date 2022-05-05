import React from 'react'

const PlayerDetalles = (props) => {
  return (
    <div className="player-detalles">
        <div className="detalles-img">
            <img src={props.song.img_src} alt="" />
        </div>
        <br></br>
        <h3 className="detalles-title">{props.song.title}</h3>
        <h4 className="detalles-artist">{props.song.artist}</h4>
    </div>
  )
}

export default PlayerDetalles