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

            <h2>¿Eres madre primeriza y no te sientes preparada para esta nueva etapa que estas viviendo?</h2>
            <br></br>
            <p className="pPrimero">No tienes por qué preocuparte <strong>BABYHELP</strong> fue diseñada 
            para mujeres como tú, Dá el primer paso a conocer y aprender los conocimientos, cuidados, 
            innovación en maternidad y todo lo que requieres saber para sacar 
            adelante esta hermosa etapa de ser madre</p>
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