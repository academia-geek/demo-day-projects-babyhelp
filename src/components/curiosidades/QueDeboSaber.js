import React from 'react'
import { Col, ListGroup, Row, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Semana1 from './semanas/Semana1'
import Semana2 from './semanas/Semana2'
import Semana3 from './semanas/Semana3'
import Semana4 from './semanas/Semana4'
import Semana5 from './semanas/Semana5'
import Semana6 from './semanas/Semana6'
import Semana7 from './semanas/Semana7'
import '../../styles/semanas.css'


const QueDeboSaber = () => {

    return (
        <>
            <br></br>
            <Link to="/">
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
            </Link>

            <div className="container-fluid">
                <div className="conteCarru">
                    <br></br>
                    <br></br>



                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#1">
                        <Row>
                            <Col sm={4}>
                                <div className="divSemanasList">
                                    <h3>Recién Nacidos</h3>
                                </div>
                                <ListGroup>

                                    <ListGroup.Item className="lis" action href='#1'>
                                        Primera Semana
                                    </ListGroup.Item>

                                    <ListGroup.Item className="lis" action href='#2'>
                                        Segunda Semana
                                    </ListGroup.Item>

                                    <ListGroup.Item className="lis" action href='#3'>
                                        Tercera Semana
                                    </ListGroup.Item>

                                    <ListGroup.Item className="lis" action href='#4'>
                                        Cuarta Semana
                                    </ListGroup.Item>

                                    <ListGroup.Item className="lis" action href='#5'>
                                        Quinta Semana
                                    </ListGroup.Item>

                                    <ListGroup.Item className="lis" action href='#6'>
                                        Sexta Semana
                                    </ListGroup.Item>

                                    <ListGroup.Item className="lis" action href='#7'>
                                        Septima Semana
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>



                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#1">
                                        <Semana1 />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="#2">
                                        <Semana2 />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="#3">
                                        <Semana3 />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="#4">
                                        <Semana4 />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="#5">
                                        <Semana5 />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="#6">
                                        <Semana6 />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="#7">
                                        <Semana7 />
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div >
        </>
    )
}

export default QueDeboSaber