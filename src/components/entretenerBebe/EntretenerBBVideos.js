import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import '../../styles/videos.css'

const EntretenerBBVideos = () => {
    return (
        <>
            <br></br>
            <Link to="/entretenimiento">
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
            </Link>

            <div className="container-fluid conteVideos">

                <div className="divlactatext">
                    <center>
                        <h3><strong>IMPORTANTE</strong></h3>
                    </center>
                    <br></br>
                    <h4>
                        Los bebés <strong>NO DEBEN interactuar con el móvil ni con ninguna otra pantalla al menos hasta los dos años.</strong> Y a partir de esa edad y hasta los cinco, cuanto menos accedan a estos dispositivos mejor y, en todo caso, nunca más de una hora al día. Esto es debido a la forma en que se entrena el cerebro a estas edades tempranas ante una frustración, un esfuerzo o una recompensa condiciona su conducta futura y su posterior capacidad de atención y aprendizaje.
                        <br></br>
                        <br></br>
                        la Academia Americana de Pediatría (AAP) advertía a los padres de los peligros de usar la tecnología como “un chupete emocional”. “El móvil puede ser muy efectivo para mantener a los niños tranquilos y callados pero no debe ser la única forma en que aprendan a calmarse; los niños necesitan que se les enseñe cómo identificar y manejar las emociones fuertes”

                    </h4>
                </div>

                <br></br>
                <br></br>
                <Row>
                    <Col sm={4}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=t5EUFE9PYdI"
                            width="100%"
                            height="250px"
                            className="video"
                            controls

                        />
                    </Col>

                    <Col sm={4}>

                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=Y3TFpZedUxg"
                            width="100%"
                            height="250px"
                            className="video"
                            controls


                        />
                    </Col>


                    <Col sm={4}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=HHlyVrlheJk"
                            width="100%"
                            height="250px"
                            className="video"
                            controls

                        />
                    </Col>

                    <Col sm={4}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=oq5uxFtb1sQ"
                            width="100%"
                            height="250px"
                            className="video"
                            controls

                        />
                    </Col>

                    <Col sm={4}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=4ShOpJPHRxA"
                            width="100%"
                            height="250px"
                            className="video"
                            controls

                        />
                    </Col>
                    <Col sm={4}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=HRs7Dfxl2-c"
                            width="100%"
                            height="250px"
                            className="video"
                            controls

                        />
                    </Col>

                    <Col sm={4}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=EwZ3KhAh448"
                            width="100%"
                            height="250px"
                            className="video"
                            controls
                        />
                    </Col>

                    <Col sm={4}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=_A0HvQEBqR0"
                            width="100%"
                            height="250px"
                            className="video"
                            controls
                        />
                    </Col>

                    <Col sm={4}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=UJezG8dP4Nc"
                            width="100%"
                            height="250px"
                            className="video"
                            controls
                        />
                    </Col>

                    <Col sm={4}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=_MV1fFkx3As"
                            width="100%"
                            height="250px"
                            className="video"
                            controls
                        />
                    </Col>

                    <Col sm={4}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=aD7P77tftZQ"
                            width="100%"
                            height="250px"
                            className="video"
                            controls
                        />
                    </Col>

                    <Col sm={4}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=BMwzM4KI39o"
                            width="100%"
                            height="250px"
                            className="video"
                            controls
                        />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default EntretenerBBVideos