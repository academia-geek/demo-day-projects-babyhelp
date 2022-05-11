import React from 'react'
import { Card } from 'react-bootstrap'
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
        <>

            <br></br>
            <div className="contenedorComenatiros">
                <br></br>
                <br></br>
                <div className="row cardComentarios">

                    <div className="col-md-4">
                        <Card>
                            <Card.Body>

                                <Card.Text>
                                    Estoy muy agradecida soy madre primeriza y no tenía ni idea de cómo cuidar a mi bebé, <strong>BabyHelp</strong> tiene todos lo necesario para llevar el día a día de mi maternidad de forma calmada sin preocuparme de no poder lograrlo...<br></br><br></br>  <strong>ME ENCANTO</strong> la sección de <strong>ENTRETENIMIENTO</strong>, mi abuela dice que para amamantar debo estar relajada y aqui lo pude lograr
                                </Card.Text>

                                <div className="imgCard">

                                    <img className="img" src={perfil[0]?.foto} width="15%" />

                                    <p className="pComImg">Pepita Pérez</p>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card>
                            <Card.Body>

                                <Card.Text>
                                    No sabía nada de lactancia materna y <strong>Me encanta</strong> que en todas las secciones explicativas tienen <strong>videos</strong> yo poco entiendo leyendo y eso me pareció genial, <strong><br></br> Noooooo! y las tecnicas de suplementación,</strong> ya voy a ingresar a trabajar y no quiero dejar de lactar a mi bebé con las técnicas que nos indica <strong>BabyHelp</strong> no tendré que preocuparme. Felicidades me ayudaron mucho...

                                </Card.Text>

                                <div className="imgCard">

                                    <img className="img" src="https://yt3.ggpht.com/ytc/AKedOLRGjKHXFWfG136qrHpHm-4O77PZWz1BsEI0_uY-=s900-c-k-c0x00ffffff-no-rj" width="15%" />

                                    <p className="pComImg">Pati de las Casas</p>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card>
                            <Card.Body>

                                <Card.Text>
                                    Tengo mi cabeza super <strong>desorganizada</strong> por el nuevo cambio de vida tras la llegada de mi bebé a nuestras vidas <br></br><br></br>y la sección de <strong>TAREAS</strong> es super buena ya que la mayor parte del tiempo me la paso en el medios tecnológicos y que mejor manera de buscar las cosas que he realizado y las que me faltan por hacer sin necesidad de una agenda.... buenísimo!
                                </Card.Text>

                                <div className="imgCard">

                                    <img className="img" src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1649040437/landing%20Page/images/profile-3_bhtpde.jpg" width="15%" />

                                    <p className="pComImg">Maria Antonieta</p>

                                </div>

                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Comentarios