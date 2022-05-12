import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Col, ListGroup, Row, Tab } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listVacunasAsyn } from '../../redux/actions/actionVacunas'
import '../../styles/aprende.css'
import AddComentariosVacunas from '../comentarios/AddComemtariosVacunas'

const Vacuna = () => {


    const { vacuna } = useSelector(store => store.vacuna)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listVacunasAsyn())
    }, [])


    console.log(vacuna);


    return (
        <>
            <br></br>
            <Link to="/" className="linkatrasvacu">
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
            </Link>

            <div className="container-fluid aprende">
                <div className="conteCarru">
                    <br></br>
                    <br></br>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#Vacunas poco después del nacimiento"  >
                        <Row>
                            <Col sm={4}>
                                <div className="divH3ComentCoVacuText">
                                    <h3>Vacunas</h3>
                                </div>
                                <ListGroup>
                                    {
                                        vacuna?.map(item => (
                                            <>
                                                <ListGroup.Item action href={`#${item?.nombre}`} className="linkAprende" key={item?.id}>
                                                    {item?.nombre}
                                                </ListGroup.Item>
                                            </>

                                        ))
                                    }
                                </ListGroup>
                            </Col>



                            <Col sm={8} className="divVacu">
                                <Tab.Content>
                                    {
                                        vacuna?.map((item, index) => (
                                            <Tab.Pane eventKey={`#${item?.nombre}`} key={item?.nombre}>
                                                <h2>{item?.nombre}</h2>
                                                <br></br>
                                                <div className="divimg">
                                                    <img src={item?.foto} width="100%" />
                                                </div >
                                                <br></br>

                                                <div className="">
                                                    <h3>{item?.nombre1}</h3>
                                                    <br></br>
                                                    <p>{item?.descripcion1}</p>

                                                    <ul>
                                                        {
                                                            (item?.vacunas).map((v, index) => (
                                                                <li key={index}>{v}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div >
                                                <br></br>
                                                <br></br>

                                                <div className="">
                                                    <h3>{item?.nombre2}</h3>
                                                    <br></br>
                                                    <p>{item?.parrafo2}</p>
                                                    <ul>
                                                        {
                                                            (item?.descricion2).map((d, index) => (
                                                                <li key={index}>{d}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div >

                                                <br></br>
                                                <br></br>

                                            </Tab.Pane>
                                        ))
                                    }

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>

                <div>
                    <Row>
                        <Col sm={4}>
                            <div className="divH3ComentCoVacu">
                                <h3>Comentarios</h3>
                            </div>
                            <AddComentariosVacunas />
                        </Col>
                        <Col sm={8}>
                        </Col>
                    </Row>
                </div>
            </div >
        </>
    )
}

export default Vacuna