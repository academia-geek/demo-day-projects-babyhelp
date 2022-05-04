import React from 'react'
import { useEffect } from 'react'
import { Col, ListGroup, Row, Tab } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listEnfermedadesAsyn } from '../../redux/actions/actionEnfermedades'
import AddComemtariosEnfermedades from '../comentarios/AddComemtariosEnfermedades'

const Enfermedades = () => {

    const dispatch = useDispatch()

    const { enfermedades } = useSelector(store => store.enfermedades)

    useEffect(() => {
        dispatch(listEnfermedadesAsyn())
    }, [])

    console.log(enfermedades);


    return (
        <>
            <br></br>
            <Link to="/">
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
            </Link>

            {/*<div className="container-fluid aprende">
                 <div className="conteCarru">
                    <br></br>
                    <br></br>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#uno"  >
                        <Row>
                            <Col sm={4}>
                                <ListGroup>

                                    <>
                                        <ListGroup.Item action href="#uno" className="linkAprende">
                                            algo
                                        </ListGroup.Item>

                                        <ListGroup.Item action href="#dos" className="linkAprende">
                                            algo
                                        </ListGroup.Item>
                                    </>
                                </ListGroup>
                            </Col>

                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#uno">
                                        <h2>{enfermedades[0].nombre1}</h2>

                                        
                                        <div className="divimg">
                                                    <img src={item.foto} width="100%" />
                                                </div >
                                        

                                        <div className="">
                                            <h3>{item.nombre1}</h3>
                                            <br></br>
                                            <p>{item.descripcion1}</p>

                                            <ul>
                                                <li>{item.vacunas[0]}</li>
                                                <li>{item.vacunas[1]}</li>
                                                <li>{item.vacunas[2]}</li>
                                                <li>{item.vacunas[3]}</li>
                                                <li>{item.vacunas[4]}</li>
                                            </ul>
                                        </div >
                                        <br></br>
                                        <br></br>

                                        <div className="">
                                            <h3>{item.nombre2}</h3>
                                            <br></br>
                                            <p>{item.parrafo2}</p>
                                            <ul>
                                                <li>{item.descricion2[0]}</li>
                                                <li>{item.descricion2[1]}</li>
                                                <li>{item.descricion2[2]}</li>
                                                <li>{item.descricion2[3]}</li>
                                            </ul>
                                        </div >

                                        <br></br>
                                        <br></br>

                                        <div className="">
                                            <h3>{item.nonbre3}</h3>
                                            <br></br>
                                            <p>{item.parrafo3}</p>
                                            <ul>
                                                <li>{item.descricion2[0]}</li>
                                                <li>{item.descricion3[1]}</li>
                                                <li>{item.descricion3[2]}</li>
                                                <li>{item.descricion3[3]}</li>
                                            </ul>
                                        </div >
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="#dos">
                                        <h2>holaaa</h2>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div > */}

            <div className="container-fluid">
                <AddComemtariosEnfermedades/>
            </div>
        </>
    )
}

export default Enfermedades