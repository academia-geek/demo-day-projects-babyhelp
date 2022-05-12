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
import { Link } from 'react-router-dom';

const HomePrincipal = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listAprendeAsyn())
    }, [])


    return (
        <>

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


                        <p>
                            Aquí podrás encontrar consejos en diferentes áreas, como (enfermedades comunes, cólicos en bebes, baño, alimentación…) entre otra información que harán estos primeros meses un poco más fáciles, a su vez cuenta con una sección de ‘tareas’ la cual te puede servir de agenda virtual y te permitirá, crear, editar y eliminar tareas, con el fin de que tengas una buena organización en tu día a día.

                        </p>

                        <br></br>
                        <br></br>

                        <div className="contImgMeses" id="inicio">

                            <Link to="/aprendemas" className="aImgMeses">
                                <div>
                                    <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651809430/xwtlruqusuirbf0fftda.png" width="40%" />
                                </div>
                                <br></br>
                                <p>Consejos sobre bebés: recién <br></br>nacidos</p>
                            </Link>

                            <Link to="/aprendemas" className="aImgMeses">
                                <div>
                                    <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1652192593/relajacion/waqzzdhztweejep8qty1.png" width="40%" />
                                </div>
                                <br></br>
                                <p>Consejos sobre bebés: de 4-24 semanas</p>
                            </Link>

                            <Link to="/aprendemas" className="aImgMeses">
                                <div>
                                    <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1652192598/relajacion/hxnpfcizpzerglwj3q2d.png" width="40%" />
                                </div>
                                <br></br>
                                <p>Consejos sobre bebés: de 24- 36 semanas</p>
                            </Link>

                            <Link to="/aprendemas" className="aImgMeses">
                                <div>
                                    <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1652192617/relajacion/yvq0xttblushc3ulq2z5.png" width="40%" />
                                </div>
                                <br></br>
                                <p>Consejos sobre bebés: de 36-48 semanas (1 año) </p>
                            </Link>

                            <Link to="/aprendemas" className="aImgMeses">
                                <div>
                                    <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651810562/j9kzkeoesnxxpjuunhpm.png" width="40%" />
                                </div>
                                <br></br>
                                <p>Consejos sobre bebés: de 1-2 años</p>
                            </Link>

                            <Link to="/aprendemas" className="aImgMeses">
                                <div>
                                    <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651810565/mn2bjtiijjgqpr7helek.png" width="40%" />
                                </div>
                                <br></br>
                                <p>Consejos sobre bebés: de 2+ años</p>
                            </Link>

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
                <br></br>

                <Row id='aprende'>
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