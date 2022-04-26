import React from 'react'
import Comentarios from './Comentarios'
import Cuatro from './Cuatro'
import Email from './Email'
import Footer from './Footer'
import Stay from './Stay'

const Home = () => {
  return (
    <>
      <div className="container-fluid">

        <div className="row primero">


          <div className="col-md-6 izq">

            <h3>¿Eres madre primeriza y no te sientes preparada para esta nueva etapa que estas viviendo?</h3>
            <br></br>
            <p className="pPrimero">No tienes porque preocuparte BABY-HELP fue diseñada para mujeres como tú, Da el primer paso al conocimientos de los cuidados de tu bebé</p>
            <br></br>

            <button className="btnPrimero"> Ir a App</button>
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