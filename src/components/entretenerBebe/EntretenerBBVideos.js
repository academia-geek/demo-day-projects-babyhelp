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