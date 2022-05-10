import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PlayerMama from './relajarMama/PlayerMama'

const dormir = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651902435/relajacion/niq9msf9kb0wjcwub0vj.mp3'
const dormir1 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651902435/relajacion/y7hphkvln0x9fbtsq8ky.mp3'
const dormir2 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651902436/relajacion/smwgkmarceqgp5tnvkog.mp3'
const dormir3 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651902438/relajacion/mylg6lctsx5ljfueacr0.mp3'
const dormir4 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651902439/relajacion/arsrel1b33acgggayxxf.mp3'
const dormir5 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651902444/relajacion/zu1twwuxparmkmn7cjyu.mp3'
const dormir6 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651902445/relajacion/frfuh6v77hdczziuefsp.mp3'
const dormir7 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651903798/relajacion/iegmnpwsa89qvfommhvs.mp3'
const dormir8 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651902449/relajacion/narlisshxsefqaoarnie.mp3'
const dormir9 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651902449/relajacion/qbyzzhnddf9aznufw243.mp3'
const dormir10 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651902453/relajacion/eyeyfr7qclw79xeynjuj.mp3'
const dormir11 = 'https://res.cloudinary.com/dhu8kck7f/video/upload/v1651902456/relajacion/qjwymzdrk5rn82g55iup.mp3'


const EntretenimientoMamaAudio = () => {
  const [songs] = useState([
    {
      title: "Instrumentales y Clasicas 1",
      img_src: "https://images.ecestaticos.com/yyr4f5tZeazODjUxlr1aiX0-d4k=/0x0:2020x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F1c1%2F77c%2F61d%2F1c177c61dc71d853f246dea4d4989d0a.jpg",
      src: dormir
    },
    {
      title: "Instrumentales y Clasicas 2",
      img_src: "https://objetivobienestar.top/wp-content/uploads/2019/01/ser-feliz.jpg",
      src: dormir1
    },
    {
      title: "Instrumentales y Clasicas 3",
      img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinNNjCYhacQMqHVQ0QfVJHBkr29uWjO5Yn0P_cyu0N3FxMWVnQBj6pEqzXXM1pRZ6KyE&usqp=CAU",
      src: dormir2
    },
    {
      title: "Instrumentales y Clasicas 4",
      img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyviVsEiByz5SqNBjGSFVcCT5D4iAHPljJGAInJYADHUbwA9BLT5MLamHMBog528CGHIU&usqp=CAU",
      src: dormir3
    },
    {
      title: "Instrumentales y Clasicas 5",
      img_src: "https://trabajarporelmundo.org/wp-content/uploads/2017/02/Mejores-pai%CC%81ses-para-vivir-y-trabajar-en-el-extranjero.jpg",
      src: dormir4
    },
    {
      title: "Instrumentales y Clasicas 6",
      img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7NogFcTbiBY5uCOi4mvdLVnF-_iuSQSxwAw&usqp=CAU",
      src: dormir5
    },
    {
      title: "Instrumentales y Clasicas 7",
      img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG55tg7TLSZ_4GvLMjtwUsdkrT7g5T-pTwhfsPg8zMxr-usRHcOt2LT5RKdd74z9SShfQ&usqp=CAU",
      src: dormir6
    },
    {
      title: "Instrumentales y Clasicas 8",
      img_src: "https://espaciohumano.com/wp-content/uploads/2019/07/26-vivir-en-el-no.jpg",
      src: dormir7
    },
    {
      title: "Instrumentales y Clasicas 9",
      img_src: "https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/mujer-yoga.jpg.webp?itok=8cZX7sTO",
      src: dormir8
    },
    {
      title: "Instrumentales y Clasicas 10",
      img_src: "https://elsol-compress.s3-accelerate.amazonaws.com/files/1578307458090Vivir%20mejor.jpg",
      src: dormir9
    },
    {
      title: "Instrumentales y Clasicas 11",
      img_src: "https://frasesdelavida.com/wp-content/uploads/2019/09/Frases-de-vivir-la-vida.jpg",
      src: dormir10
    },
    {
      title: "Instrumentales y Clasicas 12",
      img_src: "https://mejorconsalud.as.com/wp-content/uploads/2019/12/vivir-serenidad-posible-playa.jpg",
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
    <>
      <br></br>
      <Link to="/entretenimiento">
        <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
      </Link>
      <div className="container-fluid">
        <Row className="App">
          <Col sm={6} >
            {
              songs.map((list, index) => (
                <div className="divLista" onClick={() => SkipSong(songs.title, index)} key={index}>
                  <img src={list.img_src} width="17%" height="75px" alt />
                  <p>{list.title}</p>
                </div>
              ))
            }

          </Col>

          <Col sm={6} >
            <PlayerMama
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              songs={songs}
            />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default EntretenimientoMamaAudio