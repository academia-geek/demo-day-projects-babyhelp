import React from 'react'
import { Link } from 'react-router-dom'
import Comentarios from './Comentarios'
import Cuatro from './Cuatro'
import Email from './Email'
import Footer from './Footer'
import NavBar from './NavBar'
import Stay from './Stay'

const Home = () => {
  return (
    <>
    <NavBar/>
      <div className="container-fluid">

        <div className="row primero" id="home">


          <div className="col-md-6 izq">

            <h3>¿Eres madre primeriza y no te sientes preparada para esta nueva etapa que estas viviendo?</h3>
            <br></br>
            <p className="pPrimero">No tienes porque preocuparte BABY-HELP fue diseñada para mujeres como tú, Dá el primer paso a conocer y aprender los conocmientos y atenciones que requiere tu bebé</p>
            <br></br>

            <Link to="/login" className="btnPrimero"> Ir a App</Link>
          </div>

          <div className="col-md-6">
            <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1650955006/krc6gibmweged9a1wags.png" width="100%"></img>
          </div>
        </div>

        <Cuatro />

        <Stay />

        <br></br>
        <br></br>
        <Comentarios />

        <br></br>

        <Email />
      </div>

      <Footer />
    </>
  )
}

export default Home