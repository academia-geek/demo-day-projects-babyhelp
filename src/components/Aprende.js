import React from 'react'
import { useEffect } from 'react'
import { Button, Card, Col, ListGroup, Row, Tab } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listAprendeAsyn } from '../redux/actions/actionAcciones'
import '../styles/aprende.css'

const Aprende = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listAprendeAsyn())
  }, [])

  const { aprende } = useSelector(store => store.aprende);

  console.log(aprende);


  const handleClick = () => {
    console.log('hola');
  }

  return (
    <div className="container-fluid cont">

      <br></br>
      <br></br>
      <br></br>

      <div className="container-fluid divTab">

        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#Alimentar a su hijo de 4 a 7 meses de edad"  >
          <Row>
            <Col sm={4}>
              <ListGroup>
                {
                  aprende.map(item => (
                    <>
                      <ListGroup.Item action href={`#${item.nombre}`}>
                        {item.nombre}
                      </ListGroup.Item>
                    </>
                  ))
                }
              </ListGroup>
            </Col>

            <Col sm={8}>
              <Tab.Content>
                {
                  aprende.map((item, index) => (
                    <Tab.Pane eventKey={`#${item.nombre}`}>
                      <p>{item.descripcionGeneral}</p>
                      <br></br>


                      <div className="divCards">
                        <Card>
                          <Card.Img variant="top" src={item.foto1} />
                          <Card.Body>
                            <Card.Title>{item.nombre1}</Card.Title>
                            <Card.Text>
                              {item.descripcion1}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>

                        <Card>
                          <Card.Img variant="top" src={item.foto2} />
                          <Card.Body>
                            <Card.Title>{item.nombre2}</Card.Title>
                            <Card.Text>
                              {item.descripcion2}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>

                        <Card>
                          <Card.Img variant="top" src={item.foto3} />
                          <Card.Body>
                            <Card.Title>{item.nombre3}</Card.Title>
                            <Card.Text>
                              {item.descripcion3}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>

                        <Card>
                          <Card.Img variant="top" src={item.foto4} />
                          <Card.Body>
                            <Card.Title>{item.nombre4}</Card.Title>
                            <Card.Text>
                              {item.descripcion4}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                      </div>

                      <div><a href={item.link} target="_blank">Si deseas más información click aquí</a></div>

                    </Tab.Pane>

                  ))
                }

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

      </div>


      <div className="divBtnAddAgregar">
        <Link to="/addItemAprende" className="btnAgregarAprende">Agregar Items</Link>
      </div>

    </div>
  )
}

export default Aprende