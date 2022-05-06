import React, { useState, useEffect } from 'react'
// import BottomAppBar from './Blog'
import Player from './Player'
import { Col, Row } from 'react-bootstrap'

const dormir = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651873350/canciones%20dormir/p33scg8au4lewxyyrnti.mp3'
const dormir1 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651873350/canciones%20dormir/irxdpbc7mygnps7g4uvw.mp3'
const dormir2 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651873346/canciones%20dormir/fc5y0krdvx138odchagc.mp3'
const dormir3 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651873345/canciones%20dormir/ftrazgjagiz9cs467tbk.mp3'
const dormir4 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651873345/canciones%20dormir/crdo0qncuyhmtusccu7o.mp3'
const dormir5 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651873346/canciones%20dormir/c13ptwnqj1erpjdhatf5.mp3'
const dormir6 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651873345/canciones%20dormir/x9g8yxmcujrpcgkhhm4j.mp3'
const dormir7 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651873345/canciones%20dormir/n5yckempcyrnnnpw31yj.mp3'
const dormir8 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651873353/canciones%20dormir/s6px8dbvslobxdpuvikw.mp3'
const dormir9 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651873352/canciones%20dormir/ogeyz7lwjzctaakl64vw.mp3'
const dormir10 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651873352/canciones%20dormir/lwrigc1if7433z72mi5m.mp3'
const dormir11 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651873351/canciones%20dormir/wfe5e4yqna2w8jtqa9ef.mp3'


const Aprende = () => {

  const [songs] = useState([
    {
      title: "Angeles de Dios",
      img_src: "https://i.pinimg.com/originals/35/36/23/35362307021860b6b4fc067a26ff25df.jpg",
      src: dormir
    },
    {
      title: "A Dormir",
      img_src: "https://i.pinimg.com/originals/e6/98/e5/e698e5e0cd9950afe40850ede98eda71.jpg",
      src: dormir1
    },
    {
      title: "Este Niño Tiene Sueño",
      img_src: "https://i.pinimg.com/564x/d4/40/11/d440118cabd570ccaee94412e06dd4bf.jpg",
      src: dormir2
    },
    {
      title: "Duermete Mi Niño",
      img_src: "https://static.vecteezy.com/system/resources/previews/004/603/690/large_2x/cartoon-illustration-of-a-cute-baby-boy-sleeping-on-the-pillow-free-vector.jpg",
      src: dormir3
    },
    {
      title: "A la Nanita Nana",
      img_src: "https://i.musicaimg.com/letras/max/815944.jpg",
      src: dormir4
    },
    {
      title: "Duerme Ya",
      img_src: "https://www.todoinfantil.com/img/cd/Duermete%20mi%20nino.jpg",
      src: dormir5
    },
    {
      title: "La Lechuza",
      img_src: "https://i.ytimg.com/vi/ZsAzVckRB6Y/maxresdefault.jpg",
      src: dormir6
    },
    {
      title: "Arroro",
      img_src: "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-baby-cartoon-illustration-listening-to-music-image_1447382.jpg",
      src: dormir7
    },
    {
      title: "Instrumental",
      img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrv7e6PWlrN1o1pCvSyGesKLv4uVn8rDzn-sTvzi2TmBSHZuTRwZih26C_7X79OjCNxXU&usqp=CAU",
      src: dormir8
    },
    {
      title: "Estrellita",
      img_src: "https://i.ytimg.com/vi/OLf9qsuFXTs/maxresdefault.jpg",
      src: dormir9
    },
    {
      title: "Calla Pequeño",
      img_src: "https://www.todoinfantil.com/img/cd/Arrorro%20mi%20nino.jpg",
      src: dormir10
    },
    {
      title: "Duermete mi niño Dos",
      img_src: "https://cdn5.dibujos.net/dibujos/pintados/202101/hora-de-dormir-la-casa-12129918.jpg",
      src: dormir11
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);



  const SkipSong = (cancion, index) => {

    let algo = songs.find(c => c.title == cancion);

    if (algo != '' || algo != null || algo != undefined) {
      setCurrentSongIndex(index);
    }

  }

  return (
    <div className="container-fluid cont">

      <Row className="App">


        <Col sm={6} >
          {
            songs.map((list, index) => (
              <div className="divLista" onClick={() => SkipSong(songs.title, index)} key={index}>
                <img src={list.img_src} width="17%" height="75px" alt/>
                <p>{list.title}</p>
              </div>
            ))
          }

        </Col>

        <Col sm={6} >
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
          />
        </Col>
      </Row>


    </div>
  )
}

export default Aprende