import React from 'react'
import { useEffect } from 'react'
import { Accordion, Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listAprendeAsyn } from '../redux/actions/actionAcciones';
import '../styles/AcordeonInterno.css'

const Curiosidades = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listAprendeAsyn())
    }, [])

    const { aprende } = useSelector(store => store.aprende);

    const handleMoreInfo = (id) => {
        localStorage.setItem('id', JSON.stringify(id));

    }

    return (
        <div className="">
            <Accordion >

                {
                    aprende.map(o => (

                        <Accordion.Item eventKey={o}>
                            <Accordion.Header>{o.nombre}</Accordion.Header>
                            <Accordion.Body>
                                <Row className="divInternoAcordeon">
                                    <Col sm={5}>
                                        <div className="imgAcordeon">
                                            <img src={o.foto1} />
                                        </div>

                                    </Col>

                                    <Col sm={7}>
                                        <div className="descripcionAcordeon">
                                            {o.descripcionGeneral}
                                        </div>

                                    </Col>

                                </Row>

                                <div className="divLinkMore">
                                    <Link to={o.link2} className="btnAcordeon">Más Información</Link>
                                </div>
                                <br></br>
                            </Accordion.Body>
                        </Accordion.Item>

                    ))
                }

            </Accordion >
        </div >

    )
}

export default Curiosidades