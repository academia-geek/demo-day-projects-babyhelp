import React from 'react'
import { Link } from 'react-router-dom'

const Stay = () => {
    return (
        <>
            <div className="row tercero">
                <div className="col-md-6">
                    <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1650955875/x4bk3tiwj5vhbesjrppl.png" width="100%"></img>

                </div>

                <div className="col-md-6 der">

                    <br></br>
                    <div className="stayTitulo">
                        <h2>BABY-HELP resuelve todas tus dudas brindandote informacion acerca de todod los cuidados que necesita tu bebé. </h2>
                    </div>
                    <br></br>

                    <div className="stayP">
                        <p>El objetivo de Baby-Help es ayudarte con las dudas que genera ser madre primeriza</p>

                        <p>Sabemos lo complejo que es no tener los conocimientos necesarios y el miedo que genera el pensar 'que no podras lograrlo', PERO NO TE ANGUSTIES! Baby-Help te ayudara en cada paso que des con tu bebé.</p>
                        <br></br>


                        <div className="">
                        <button className="btnPrimero">Ir a App</button>
                            {/* <Link className="link" to="/">See how Fylo works</Link><img className="iconSig" src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1649040436/landing%20Page/images/icon-arrow_euoekp.svg" width="10%"></img> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Stay