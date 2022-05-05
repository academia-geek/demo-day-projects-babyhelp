import React, { useEffect } from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import Curiosidades from './Curiosidades';
import Comentarios from './lading/Comentarios';
import Email from './lading/Email';
import '../styles/Home.css'
import { listAprendeAsyn } from '../redux/actions/actionAcciones';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import FallbackAvatars from './FallbackAvatars';

const HomePrincipal = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listAprendeAsyn())
    }, [])


    // console.log(aprende);

    return (
        <>
            {/* <div className="imgHome">
                
            </div> */}

            <div className="banner">
            <p> Vive La etapa de ser Madre, de la mejor manera con BABYHELP </p>
            </div>
            

            <div className="container-fluid homePrincipal">


                <Row>
                    <Col sm={9}>
                        <h2>¿Eres madre primeriza y no sabes como actuar ante ciertas situaciones?</h2>
                        <br></br>
                        <p>
                            Sabemos que el nacimiento del primer bebé en la familia suele traer consigo alegría, ilusión y entusiasmo, es un nuevo integrante y una vida de la cual nos tenemos que hacer cargo de la mejor manera posible, tenemos expectativas que no siempre se ven cumplidas ya que se atraviesa por una etapa desconocida y de la cual no se tiene conocimientos y/o habilidades para realizar un buen trabajo, esto conlleva a un cambio importante en ritmos y estilo de vida, especialmente para la mujer.
                        </p>

                        <br></br>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 imgCarousel"
                                    src="http://www.embarazoymas.net/wp-content/uploads/2012/04/dreamstime_s_22648765-1200x900.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>uno</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 imgCarousel"
                                    src="https://www.conmishijos.com/assets/posts/11000/11455-nombres-felices.jpg"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 imgCarousel"
                                    src="https://bbmundo.com/wp-content/uploads/2021/12/las-primeras-enfermedades-de-los-bebes.jpeg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Tres</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 imgCarousel"
                                    src=" https://imagenes.elpais.com/resizer/J7dWdkZy7sKaVZl0kih14_fyaWw=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/VYV6NISAMG6CXPCOEYXKQY7L7E.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>4</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 imgCarousel"
                                    src="https://empresa.nestle.es/sites/g/files/pydnoa431/files/asset-library/publishingimages/sobre-nestle/te-interesa-saber/lactancia1.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>5</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 imgCarousel"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsx0R80jgyFlZdPTeW2VwptPHs0I4TPdAQ8w&usqp=CAU"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>6</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        <br></br>

                        <div className="textoHome">
                            <p>
                                <br></br>
                                Aquí podrás encontrar consejos en diferentes áreas, como (enfermedades comunes, cólicos en bebes, baño, alimentación…) entre otra información que harán estos primeros meses un poco más fáciles, a su vez cuenta con una sección de ‘tareas’ la cual te puede servir de agenda virtual y te permitirá, crear, editar y eliminar tareas, con el fin de que tengas una buena organización en tu día a día.

                            </p>
                        </div>
                    </Col>

                    <Col sm={3} className="col3">
                        <h4>Te puede interesar</h4>
                        <hr></hr>


                        <iframe width="100%" height="30%"
                            src="https://www.youtube.com/embed/aD0_htbYSLc"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                        <iframe width="100%" height="30%"
                            src="https://www.youtube.com/embed/fpfsBaiUouU"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <iframe width="100%" height="30%"
                            src="https://www.youtube.com/embed/g8hF-goSwmU"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                    </Col>
                </Row>

                <br></br>
                <br></br>
                <br></br>
                <br></br>


                {/* <center>
                    <div className="divBarraRel">
                        <h2>Curiosidades</h2>
                    </div>
                </center> */}

                <br></br>
                <br></br>
                <br></br>

                <Row>
                    <Col sm={9}>

                        <h2>Echale un vistazo a estos temas importantes que te pueden ayudar</h2>

                        <br></br>
                        <Curiosidades />
                    </Col>

                    <Col sm={3}>

                        <div className="divH3ComentHome">
                            <h3>Comentarios</h3>
                        </div>
                        <FallbackAvatars />
                    </Col>
                </Row>



                {/* <br></br>
                <br></br>
                <br></br>
                <br></br>

                <center>
                    <div className="divBarraRel">
                        <h2>Comentarios</h2>
                    </div>
                </center>

                <br></br>
                <br></br>
                <br></br>

                <FallbackAvatars /> */}

                <br></br>
                <br></br>
                <Email />
            </div>

        </>

    )
}

export default HomePrincipal