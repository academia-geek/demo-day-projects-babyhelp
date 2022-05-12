import React from 'react'
import { useEffect } from 'react'
import { Button, Col, Row, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listEnfermedadesAsyn } from '../../redux/actions/actionEnfermedades'
import '../../styles/enferm.css'
import { useState } from 'react'
import AddComentariosEnfermedades from '../comentarios/AddComemtariosEnfermedades'

const Enfermedades = () => {


    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const dispatch = useDispatch()

    const { enfermedades } = useSelector(store => store.enfermedades)

    useEffect(() => {
        dispatch(listEnfermedadesAsyn())
    }, [])

    console.log(enfermedades);


    return (
        <>
            <br></br>
            <Link to="/" className="linkatrasenfer">
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
            </Link>

            <div className="container-fluid " style={{ margin: '0 auto', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                <div style={{ width: '98%', fontSize:'1.4rem', padding: '3% 6%', backgroundColor: 'rgb(221, 113, 113)', boxShadow: '4px 4px 10px rgb(0 0 0 / 80%), -4px -4px 10px rgb(255 255 255 / 40%), inset -4px -4px 10px rgb(0 0 0 / 40%), inset 4px 4px 10px rgb(255 255 255 / 40%)', margin: '0 auto', borderRadius: '8px', color: 'rgb(0, 0, 0)'}}>
                <h2>Enfermedades Comunes</h2>
                   <br></br>
                   <p> Algunas <strong>enfermedades son muy comunes</strong> durante las primeras semanas posteriores al nacimiento, esto es debido a que tu bebé no tiene sufientes defensas que ayuden a combatir los virus y bacterias que existen en el nuevo entorno que lo rodea. <br></br>
                    <br></br>
                    <strong>Presiona las imagenes aquí abajo</strong>, las cuales te brindarán información de algunas enfermedades comunes, sus causas, tratamientos y prevención que te ayudarán a guiarte en distintas situaciones.
                    </p>
                </div>


                <br></br>
                <br></br>
                <Row>
                    <Col sm={9}>
                        <Row style={{ display: 'flex', flexDirection: 'column' }}>
                            <Col sm={6} className="contenedor">
                                <Row style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <>
                                        <Col sm={4}>
                                            <Button className="btnenfer" onClick={() => setShow(true)}>
                                                <figure>
                                                    <img src="https://okdiario.com/img/2015/05/22/bronquiolitis-y-bronquitis-en-bebes-cuanto-dura-o-como-curarla-655x368.jpg" />
                                                    <div class="capa">
                                                        <h3>{enfermedades[0]?.nombre1}</h3>
                                                    </div>
                                                </figure>
                                            </Button>
                                        </Col>

                                        <Modal
                                            show={show}
                                            onHide={() => setShow(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton className="conteTitl">
                                                <Modal.Title id="example-custom-modal-styling-title" className="title">
                                                    {enfermedades[0]?.nombre1}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.dra-amalia-arce.com/wp-content/uploads/2016/11/Bronquiolitis.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="">
                                                        <p>{enfermedades[0]?.descripcion1}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[0]?.nombre2}: </strong>{enfermedades[0]?.causas}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[0]?.nombre3}: </strong>{enfermedades[0]?.parrafoSintomas}: </p>

                                                        <br></br>
                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.sintomas[index]}</li>
                                                            ))

                                                        }
                                                        </ul>

                                                        <br></br>

                                                        <p><strong>{enfermedades[0]?.nombre4}: </strong>{enfermedades[0]?.parrafoAtencion}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.atencion[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                        <br></br>

                                                        <p><strong>{enfermedades[0]?.nombre5}: </strong>{enfermedades[0]?.parrafo5}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[0]?.nombre6}: </strong>{enfermedades[0]?.parrafoHacer}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.hacer[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                        <br></br>
                                                        <p><strong>{enfermedades[0]?.nombre7}: </strong>{enfermedades[0]?.parrafoPrevencion}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.prevencion[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </>



                                    <Col sm={4}>

                                        <Button className="btnenfer" onClick={() => setShow1(true)}>
                                            <figure>
                                                <img src="https://s03.s3c.es/imag/_v0/770x420/b/2/f/bebe-tapado-frio-770.jpg" />
                                                <div class="capa">
                                                    <h3>Resfriado común"</h3>
                                                </div>
                                            </figure>
                                        </Button>


                                        <Modal
                                            show={show1}
                                            onHide={() => setShow1(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton className="conteTitl">
                                                <Modal.Title id="example-custom-modal-styling-title" className="title">
                                                    {enfermedades[1]?.nombre1}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://okdiario.com/img/2020/01/16/resfriado-en-un-bebe-de-3-meses-620x349.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="">
                                                        <p>{enfermedades[1]?.descripcion1}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[1]?.nombre2}: </strong>{enfermedades[1]?.parrafoCausas}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[1]?.nombre3}: </strong>{enfermedades[1]?.parrafoSintomas} </p>

                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.sintomas[index]}</li>
                                                            ))

                                                        }
                                                        </ul>
                                                        <br></br>

                                                        <p><strong>{enfermedades[1]?.nombre4}: </strong>{enfermedades[1]?.parrafoAtencion}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.atencion[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                        <br></br>

                                                        <p><strong>{enfermedades[1]?.nombre5}: </strong>{enfermedades[1]?.parrafo5}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[1]?.nombre6}: </strong>{enfermedades[1]?.parrafoHacer}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.hacer[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                        <br></br>
                                                        <p><strong>{enfermedades[1]?.nombre7}: </strong>{enfermedades[1]?.parrafoPrevencion}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.prevencion[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>

                                    <Col sm={4}>
                                        <Button className="btnenfer" onClick={() => setShow2(true)}>
                                            <figure>
                                                <img src="https://img.remediosdigitales.com/8cfe85/bebe_higiene_oidos/450_1000.jpg" />
                                                <div class="capa">
                                                    <h3>Infección de oído (Otitits)</h3>
                                                </div>
                                            </figure>
                                        </Button>

                                        <Modal
                                            show={show2}
                                            onHide={() => setShow2(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton className="conteTitl">
                                                <Modal.Title id="example-custom-modal-styling-title" className="title">
                                                    {enfermedades[2]?.nombre1}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.babyplaza.com.pe/blog/wp-content/uploads/2020/12/oido3.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="">
                                                        <p>{enfermedades[2]?.descripcion1}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[2]?.nombre2}: </strong>{enfermedades[2]?.parrafoCausas}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[2]?.nombre3}: </strong>{enfermedades[2]?.parrafoSintomas} </p>

                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.sintomas[index]}</li>
                                                            ))

                                                        }
                                                        </ul>

                                                        <br></br>

                                                        <p><strong>{enfermedades[2]?.nombre4}: </strong>{enfermedades[2]?.parrafoAtencion}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.atencion[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                        <br></br>

                                                        <p><strong>{enfermedades[2]?.nombre5}: </strong>{enfermedades[2]?.parrafo5}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[2]?.nombre6}: </strong>{enfermedades[2]?.parrafoHacer}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.hacer[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                        <br></br>
                                                        <p><strong>{enfermedades[2]?.nombre7}: </strong>{enfermedades[2]?.parrafoPrevencion}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.prevencion[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>



                                    <Col sm={4}>
                                        <Button className="btnenfer" onClick={() => setShow3(true)}>
                                            <figure>
                                                <img src="https://liomont.com.mx/wp-content/uploads/2019/10/influenza-cuidados-1-1024x717.jpeg" />
                                                <div class="capa">
                                                    <h3>Influenza</h3>
                                                </div>
                                            </figure>
                                        </Button>

                                        <Modal
                                            show={show3}
                                            onHide={() => setShow3(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton className="conteTitl">
                                                <Modal.Title id="example-custom-modal-styling-title" className="title">
                                                    {enfermedades[3]?.nombre1}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdP24v3k2ldhzuLXP1LK6ZtP_AWkeziUNgftu90Z392iEwYkWOmk8Ev_LnmCa--fDEtpU&usqp=CAU" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="">
                                                        <p>{enfermedades[3]?.descripcion1}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[3]?.nombre2}: </strong>{enfermedades[3]?.parrafoCausas}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[3]?.nombre3}: </strong>{enfermedades[3]?.parrafoSintomas}: </p>

                                                        <br></br>
                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.sintomas[index]}</li>
                                                            ))

                                                        }
                                                        </ul>

                                                        <br></br>

                                                        <p><strong>{enfermedades[3]?.nombre4}: </strong>{enfermedades[3]?.parrafoAtencion}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.atencion[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                        <br></br>

                                                        <p><strong>{enfermedades[3]?.nombre5}: </strong>{enfermedades[3]?.parrafo5}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[3]?.nombre6}: </strong>{enfermedades[3]?.parrafoHacer}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.hacer[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                        <br></br>
                                                        <p><strong>{enfermedades[3]?.nombre7}: </strong>{enfermedades[3]?.parrafoPrevencion}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.prevencion[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>

                                    </Col>


                                    <Col sm={4}>
                                        <Button className="btnenfer" onClick={() => setShow4(true)}>
                                            <figure>
                                                <img src="https://www.conmishijos.com/uploads/bebes/salud/bebe-dolor-art.jpg" />
                                                <div class="capa">
                                                    <h3>Gastroenteritis</h3>
                                                </div>
                                            </figure>
                                        </Button>


                                        <Modal
                                            show={show4}
                                            onHide={() => setShow4(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton className="conteTitl">
                                                <Modal.Title id="example-custom-modal-styling-title" className="title">
                                                    {enfermedades[4]?.nombre1}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.natursan.net/wp-content/sintomas-gastroenteritis-bebe.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="">
                                                        <p>{enfermedades[4]?.descripcion1}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[4]?.nombre2}: </strong>{enfermedades[4]?.parrafoCausas}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[4]?.nombre3}: </strong>{enfermedades[4]?.parrafoSintomas}: </p>

                                                        <br></br>
                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.sintomas[index]}</li>
                                                            ))

                                                        }
                                                        </ul>

                                                        <br></br>

                                                        <p><strong>{enfermedades[4]?.nombre4}: </strong>{enfermedades[4]?.parrafoAtencion}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.atencion[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                        <br></br>

                                                        <p><strong>{enfermedades[4]?.nombre5}: </strong>{enfermedades[4]?.parrafo5}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[4]?.nombre6}: </strong>{enfermedades[4]?.parrafoHacer}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.hacer[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                        <br></br>
                                                        <p><strong>{enfermedades[4]?.nombre7}: </strong>{enfermedades[4]?.parrafoPrevencion}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.prevencion[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>


                                    <Col sm={4}>
                                        <Button className="btnenfer" onClick={() => setShow5(true)}>
                                            <figure>
                                                <img src="https://www.parasubebe.com/wp-content/uploads/2020/01/difteria-infantil.jpg" />
                                                <div class="capa">
                                                    <h3>Dolor de garganta</h3>
                                                </div>
                                            </figure>
                                        </Button>

                                        <Modal
                                            show={show5}
                                            onHide={() => setShow5(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton className="conteTitl">
                                                <Modal.Title id="example-custom-modal-styling-title" className="title">
                                                    {enfermedades[5]?.nombre1}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="http://bebesyembarazos.com/wp-content/uploads/2015/10/laringitis-en-beb%C3%A9s-1.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="">
                                                        <p>{enfermedades[5]?.descripcion1}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[5]?.nombre2}: </strong>{enfermedades[5]?.parrafoCausas}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[5]?.nombre3}: </strong>{enfermedades[5]?.parrafoSintomas}: </p>

                                                        <br></br>
                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.sintomas[index]}</li>
                                                            ))

                                                        }
                                                        </ul>

                                                        <br></br>

                                                        <p><strong>{enfermedades[5]?.nombre4}: </strong>{enfermedades[5]?.parrafoAtencion}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.atencion[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                        <br></br>

                                                        <p><strong>{enfermedades[5]?.nombre5}: </strong>{enfermedades[5]?.parrafo5}</p>
                                                        <br></br>

                                                        <p><strong>{enfermedades[5]?.nombre6}: </strong>{enfermedades[5]?.parrafoHacer}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.hacer[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                        <br></br>
                                                        <p><strong>{enfermedades[5]?.nombre7}: </strong>{enfermedades[5]?.parrafoPrevencion}</p>
                                                        <br></br>

                                                        <ul>{
                                                            enfermedades?.map((en, index) => (
                                                                <li>{en?.prevencion[index]}</li>
                                                            ))
                                                        }
                                                        </ul>

                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <br></br>

                    <Col sm={3} className="divenfermecomen">
                        {/* <div style={{ width: '60%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}> */}
                        <div className="divH3ComentEnfer">
                            <h3>Comentarios</h3>
                        </div>
                        <AddComentariosEnfermedades />
                        {/* </div> */}
                    </Col>
                </Row>
            </div >







        </>

    )
}

export default Enfermedades