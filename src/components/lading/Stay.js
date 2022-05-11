import React from 'react'
import { Link } from 'react-router-dom'

const Stay = () => {
    return (
        <>
            <div className="row tercero" id="somos">
                <div className="col-md-6">
                    <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1650955875/x4bk3tiwj5vhbesjrppl.png" width="100%"></img>

                </div>

                <div className="col-md-6 der">

                    <br></br>
                    <div className="stayTitulo">
                        <h3>BABYHELP fue creada para ayudarte a resolver éstas y muchas otras dudas acerca de la maternidad, a su vez te ayudará a hacer tu día a día más organizado.

                        </h3>
                    </div>
                    <br></br>

                    <div className="stayP">
                        <p>El objetivo de <strong>BabyHelp</strong> es ayudar a todas las madres primerizas
                            a adquirir las habilidades y conocimientos para los cuidados que
                            requieren sus bebés al nacer, sin dejar de lado la cotidianidad y
                            el estrés que pueda presentarse diariamente. <br></br><br></br>

                            Para ello <strong>BabyHelp</strong> posee componentes de <strong>Agendamiento de Actividades, Entretenimiento, Temas de Ayuda</strong> y
                            en cada uno de ellos contiene blogs de comentarios con testimonios y experiencias de
                            madres que ya han pasado por esta etapa, esto te ayudará a saber que no estas sola y que todo va a salir bien.
                        </p>

                        <p></p>
                        <br></br>


                        <div className="">
                            <Link to="/login" className="btnPrimero"> Ir a App</Link>                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Stay