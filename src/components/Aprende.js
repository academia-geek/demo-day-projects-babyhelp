import React, { useState, useEffect } from 'react'
// import BottomAppBar from './Blog'
import Player from './Player'


const Aprende = () => {

  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "https://descargas.ams3.digitaloceanspaces.com/images/7632/reproductor-de-musica-app_icon_iphone.png",
      src: "../audio/y2mate.com - ESTRELLITA DÓNDE ESTÁS KARAOKE con letra en español CANCIONES INFANTILES  MUSICA INFANTIL.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "https://res.cloudinary.com/dhu8kck7f/image/upload/v1651729901/o948gnf3tjnevifutlqu.png",
      src: "../audio/y2mate.com - ESTRELLITA DÓNDE ESTÁS KARAOKE con letra en español CANCIONES INFANTILES  MUSICA INFANTIL.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "https://thumbs.dreamstime.com/z/c%C3%ADrculo-azul-logo-design-del-vector-de-la-m%C3%BAsica-122632006.jpg",
      src: "../audio/y2mate.com - ESTRELLITA DÓNDE ESTÁS KARAOKE con letra en español CANCIONES INFANTILES  MUSICA INFANTIL.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-baby-cartoon-illustration-listening-to-music-image_1447382.jpg",
      src: "https://res.cloudinary.com/dhu8kck7f/video/upload/v1651727192/uaodslauyxsfo3byttwa.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="container-fluid cont">
      <div className="App">
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
        
      </div>



      {/* <BottomAppBar /> */}
    </div>
  )
}

export default Aprende