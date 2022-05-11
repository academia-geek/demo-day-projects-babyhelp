import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import '../styles/Capa.css'

const Entretenimiento = () => {
  return (
    <>
      <br></br>
      <Link to="/" className="linkEntrete">
        <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
      </Link>


      
      <div className="container-fluid" style={{ margin: '0 auto', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        
      <h4 className="divlactatext">
        El nacimiento de un bebé te pone a prueba de diferentes maneras:
        a nivel hormonal, físico, emocional, psicológico y químico, debido a ello,
        es posible que te sientas fatigada, emocionada, frustrada, preocupada y
        radiante al mismo tiempo.
        <br></br>
        <br></br>
        Es tan importante que distraigas tu mente y la de tu pequeño, puedes escuchar algo de mucsíca, hacerle ejercicios a
        tu bebé y/o ver algunos videos, esto mejorará tu estado de ánimo y hará
        tu día a día un poco mas divertido, échale un vistazo a las siguientes
        secciones:
      </h4>

      <br></br>
      <br></br>

        <Row style={{ display: 'flex', flexDirection: 'column' }}>
          <Col sm={6} className="contenedor">
            <Row>
              <Col sm={6}>
                <Link to="/entretenimientoBebeAudio">
                  <figure>
                    <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1141D/production/_119158607_a7b4e374-12ac-4adc-bb8d-ce4eb857fbc2.jpg" />
                    <div class="capa">
                      <h3>Dormir al Bebé</h3>
                    </div>
                  </figure>
                </Link>
              </Col>

              <Col sm={6}>
                {/* <p style={{ backgroundColor: 'violet', letterSpacing:'2px', paddin: '4%', marginBottom: 0, fontSize: '2rem' }}>Dormir al bebe</p> */}
                <Link to="/entretenimientoBebeVideo">
                  <figure>
                    <img src="https://img.europapress.es/fotoweb/fotonoticia_20160826073045_420.jpg" />
                    <div class="capa">
                      <h3>Distraer al Bebé</h3>
                    </div>
                  </figure>
                </Link>
              </Col>
            </Row>
          </Col>

        </Row>

        <br></br>
        <br></br>
        <Row style={{ display: 'flex', flexDirection: 'column' }}>
          <Col sm={6} className="contenedor">
            <Row>
              <Col sm={6}>
                <Link to="/entretenimientoMamaAudio">
                  <figure>
                    <img src="https://www.jcantopsicologo.com/wp-content/uploads/2019/07/C%C3%B3mo-relajarse-en-casa.jpg" />
                    <div class="capa">
                      <h3>Relajarte</h3>
                    </div>
                  </figure>
                </Link>
              </Col>

              <Col sm={6}>
                {/* <p style={{ backgroundColor: 'violet', letterSpacing:'2px', paddin: '4%', marginBottom: 0, fontSize: '2rem' }}>Dormir al bebe</p> */}
                <Link to="/entretenimientoMamaVideo">
                  <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShqz080znsT9tfg3pyyezleYGziO8z1nKyiPrDAi076MCO-E_YWof3afR6Cb8gJGJn8k&usqp=CAU" />
                    <div class="capa">
                      <h3>Ejercicios para Bebés</h3>
                    </div>
                  </figure>
                </Link>
              </Col>
            </Row>
          </Col>

        </Row>
      </div>
    </>
  )
}

export default Entretenimiento