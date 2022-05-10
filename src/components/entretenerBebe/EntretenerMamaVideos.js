import React from 'react'
import { Col, ListGroup, Row, Tab } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import '../../styles/videos.css'
const EntretenerMamaVideos = () => {


    return (
        <>
            <div className="container-fluid conteVideos">
            <Link to="/entretenimiento" className="linkEntreAtras">
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
            </Link>

            <br></br>
            <br></br>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#1mes" responsive>
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#1mes" className="listmes">
                                    Ejercicios para estimular a un bebe de 1 mes de nacido
                                </ListGroup.Item>
                                <ListGroup.Item action href="#1-3meses" className="listmes">
                                    Ejercicios para estimular a un bebe de 1-3 meses
                                </ListGroup.Item>
                                <ListGroup.Item action href="#5mes" className="listmes">
                                    Ejercicios para estimular a un bebe de 5 meses
                                </ListGroup.Item> 
                                <ListGroup.Item action href="#6mes" className="listmes">
                                    Ejercicios para estimular a un bebe de 6 meses
                                </ListGroup.Item>
                                <ListGroup.Item action href="#6-9meses" className="listmes">
                                    Ejercicios para estimular a un bebe de 6-9 meses
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8} className="contevideo">
                            <Tab.Content className="tab">
                                <Tab.Pane eventKey="#1mes">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=TaC1Iw6nrGs"
                                        width="95%"
                                        className="video"
                                        controls
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#1-3meses">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=VaLxGl-oxF8&t=2s"
                                        width="95%"
                                        className="video"
                                        controls
                                    />
                                </Tab.Pane>

                                <Tab.Pane eventKey="#5mes">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=TaC1Iw6nrGs"
                                        width="95%"
                                        className="video"
                                        controls
                                    />
                                </Tab.Pane>

                                <Tab.Pane eventKey="#6mes">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=IRdHxNg-wu4"
                                        width="95%"
                                        className="video"
                                        controls
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#6-9meses">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=kQdXRYgfNk8"
                                        width="95%"
                                        className="video"
                                        controls

                                    />
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    )
}

export default EntretenerMamaVideos