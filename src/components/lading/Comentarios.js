import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listperfilAsyn } from '../../redux/actions/actionPerfil'
import { listcomentariosAsyn } from '../../redux/actions/actionComentarios';

const Comentarios = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listperfilAsyn())
        dispatch(listcomentariosAsyn())


    }, [])

    const { perfil } = useSelector(store => store.perfil)
    const { comentarios } = useSelector(store => store.comentarios);
    return (

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'80%', margin: '0 auto' }}>
            <Row>
                <Col sm={4}>
                <Card className="cardscoment">
                        <Card.Body>
                            <Card.Text>
                                <p style={{ fontSize: '.8rem', textAlign: 'justify' }}>
                                    Tengo mi cabeza super <strong>desorganizada</strong> por el nuevo cambio de vida tras la llegada de mi bebé a nuestras vidas <br></br><br></br>y la sección de <strong>TAREAS</strong> es super buena ya que la mayor parte del tiempo me la paso en el medios tecnológicos y que mejor manera de buscar las cosas que he realizado y las que me faltan por hacer sin necesidad de una agenda.... buenísimo!
                                </p>
                            </Card.Text>
                        </Card.Body>

                        <Card.Body className="">
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col sm={4} >
                                    <div>
                                        <img className="img" src="https://www.clarin.com/img/2015/03/20/claima20150320-8312-thinkstock-photos-mujer___HkwKuZR7x_340x340.jpg" width="65%" />
                                    </div>
                                </Col>
                                <Col sm={8}>
                                    <p>Sofia Perez</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>


                <Col sm={4}>
                <Card  className="cardscoment">
                        <Card.Body>
                            <Card.Text>
                                <p style={{ fontSize: '.8rem', textAlign: 'justify' }}>No sabía nada de lactancia materna y <strong>Me encanta</strong> que en todas las secciones explicativas tienen <strong>videos</strong> yo poco entiendo leyendo y eso me pareció genial, <strong><br></br><br></br>Noooooo! y las tecnicas de suplementación,</strong> ya voy a ingresar a trabajar y no quiero dejar de lactar a mi bebé con las técnicas que nos indica <strong>BabyHelp</strong> no tendré que preocuparme. Felicidades me ayudaron mucho...
                                </p>
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col sm={4} >
                                    <div>
                                        <img className="img" src="https://yt3.ggpht.com/ytc/AKedOLRGjKHXFWfG136qrHpHm-4O77PZWz1BsEI0_uY-=s900-c-k-c0x00ffffff-no-rj" width="65%" />
                                    </div>
                                </Col>
                                <Col sm={8}>
                                    <p>Pati Suarez</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>


                <Col sm={4} >
                    <Card className="cardscoment">
                        <Card.Body>
                            <Card.Text>
                                <p style={{ fontSize: '.8rem', textAlign: 'justify' }}>
                                    Tengo mi cabeza super <strong>desorganizada</strong> por el nuevo cambio de vida tras la llegada de mi bebé a nuestras vidas <br></br><br></br>y la sección de <strong>TAREAS</strong> es super buena ya que la mayor parte del tiempo me la paso en el medios tecnológicos y que mejor manera de buscar las cosas que he realizado y las que me faltan por hacer sin necesidad de una agenda.... buenísimo!
                                </p>
                            </Card.Text>
                        </Card.Body>

                        <Card.Body className="">
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col sm={4} >
                                    <div>
                                        <img className="img"  src="https://www.quever.news/u/fotografias/m/2020/10/11/f638x638-1905_60072_5037.jpg" width="65%" />
                                    </div>
                                </Col>
                                <Col sm={8}>
                                    <p>Sofia Perez</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>

    )
}

export default Comentarios