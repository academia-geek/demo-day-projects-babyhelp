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
                        <h2>BABY-HELP fue creada para resolver todas tus dudas, brindandote información clara de los cuidados que necesita tu bebé. </h2>
                    </div>
                    <br></br>

                    <div className="stayP">
                        <p>El objetivo de Baby-Help es ayudarte con las dudas que genera ser madre primeriza</p>

                        <p>Sabemos lo complejo que es no tener los conocimientos necesarios y el miedo que genera el pensar 'que no podras lograrlo', PERO NO TE ANGUSTIES! Baby-Help te ayudara en cada paso que des con tu bebé.</p>
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