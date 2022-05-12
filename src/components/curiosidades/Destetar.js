import React from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import '../../styles/destetar.css'
import { Link } from 'react-router-dom';
import AddComemtariosDestete from '../comentarios/AddComemtariosDestete'


const Destetar = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    return (
        <>
            <br></br>
            <Link to="/">
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
            </Link>
            <br></br>
            <br></br>

            <div className="container-fluid destetear">

                <Row>
                    <Col sm={9} >
                        <div className="divTextDestet">

                            <h1>¿Cómo destetar a mi bebé?</h1>
                            <br></br>
                            <p className="pDeste">El destete es un proceso que requiere paciencia y comprensión, tanto de tu parte como de parte del bebé, una madre podría verse condicionada porque debe regresar a trabajar, por su salud o la del bebé, o simplemente considere que llegó el momento adecuado.
                                <br></br>
                                <br></br>
                                Algunas madres amamantan a sus hijos durante más de un año <strong>(esto recibe el 
                                    nombre de lactancia extendida),</strong> es una opción saludable 
                                    y razonable para las madres y los niños que no están preparados para el destete. Cuando decidas destetar, es mejor que hagas que tu hijo tenga otra cosa en mente. Algunos niños dejan de mamar por sí mismos antes de lo que la madre tenía planeado y otros se resisten al destete cuando la madre está lista.</p>

                            <div className="divContentButonModal">
                                <>
                                    <Button variant="primary" onClick={() => setShow(true)} className='btnDestete'>
                                        Señales de que el bebé está preparado para el destete
                                    </Button>

                                    <Modal
                                        show={show}
                                        onHide={() => setShow(false)}
                                        fullscreen={fullscreen}
                                        dialogClassName="modal- 90w"

                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title">
                                                Señales de que el bebé esta preparado para el destete
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="divmodal">
                                            <Row>
                                                <Col sm={6} className="colimg">
                                                    <img className="imgModal" src="https://okdiario.com/img/2019/11/22/destete-natural.jpg" width="70%" />
                                                </Col>

                                                <Col sm={6} className="cotexto">
                                                    <p>Algunos niños desean amamantarse indefinidamente.
                                                        Pero otros les dan señales a sus mamás para hacerles
                                                        saber que están preparados para comenzar con el proceso
                                                        de destete.
                                                        <br></br>
                                                        <br></br>

                                                        Estas señales pueden incluir las siguientes:
                                                        <br></br>
                                                        <br></br>

                                                        <ul>
                                                            <li> Parecer desinteresados o molestos cuando maman</li>
                                                            <li> Tardar menos tiempo que antes en alimentarse</li>
                                                            <li> Por ejemplo tironear constantemente del pezón o morderlo (si tu bebé muerde durante la lactancia, lo debes retirar inmediatamente del pecho y decirle con calma pero con firmeza: "No se muerde. Las mordidas lastiman")</li>
                                                            <li> Mamar para consolarse (succiona en el pecho pero no extrae leche)" </li>
                                                        </ul>
                                                    </p>
                                                </Col>
                                            </Row>

                                        </Modal.Body>
                                    </Modal>
                                </>

                                <>
                                    <Button variant="primary" onClick={() => setShow1(true)} className='btnDestete'>
                                        Maneras de destetar
                                    </Button>

                                    <Modal
                                        show={show1}
                                        onHide={() => setShow1(false)}
                                        fullscreen={fullscreen}
                                        dialogClassName="modal-90w"

                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title">
                                                Maneras de destetar
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Row>
                                                <Col sm={6} className="colimg">
                                                    <img className="imgModal" src="https://letsfamily.es/wp-content/uploads/2017/06/destete-1.jpg" width="90%" />
                                                </Col>

                                                <Col sm={6} className="cotexto">
                                                    <p>Para permitir que tanto la mamá como el bebé se adapten física y emocionalmente al cambio, el destete se debe hacer con tiemp, puedes probar estos tips, te pueden funcionar

                                                        <br></br>
                                                        <br></br>
                                                        <ul>
                                                            <li>Puedes comenzar por quitar la alimentación del mediodía, porque suele ser la menos abundante y la más incómoda, en especial para las madres que trabajan.</li>
                                                            <li>Muchas mamás continúan con la alimentación de la noche hasta el final del destete porque es una parte especial del vínculo con el bebé.</li>
                                                            <li>Algunas mamás dejan que sea el niño el que decida cuándo dejar de mamar. </li>
                                                            <li>A menudo, los niños que comen tres comidas con alimentos sólidos por día (además de refrigerios entre cada comida) se amamantan cada vez menos. En este caso, la producción de leche de la mamá se reducirá por la falta de demanda y será necesario extraer leche para continuar produciendo. </li>
                                                            <li>Si su hijo está mamando menos, asegúrese de que esté recibiendo suficiente leche o fórmula fortificada con hierro. Consulte con el médico qué cantidad debe recibir su hijo.</li>
                                                            <li>Si desteta a su hijo antes del año o si descubre que no está produciendo suficiente leche, tendrá que darle fórmula. </li>
                                                            <li>Consulte con su médico para saber cuál es la forma correcta para su pequeño.</li>
                                                        </ul>
                                                    </p>


                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                    </Modal>
                                </>

                                <>
                                    <Button variant="primary" onClick={() => setShow2(true)} className='btnDestete'>
                                        ¿Puedo seguir dando el pecho si vuelvo a quedar embarazada?
                                    </Button>

                                    <Modal
                                        show={show2}
                                        onHide={() => setShow2(false)}
                                        fullscreen={fullscreen}
                                        dialogClassName="modal-90w"

                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title">
                                                ¿Puedo seguir dando el pecho si vuelvo a quedar embarazada?
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>

                                            <Row>
                                                <Col sm={6} className="colimg">
                                                    <img className="imgModal" src="https://www.momdadschool.com/wp-content/uploads/2018/08/26.jpg" width="80%" />
                                                </Col>

                                                <Col sm={6} className="cotexto">
                                                    <p>En ocasiones, las madres lactantes embarazadas reciben consejos contradictorios sobre si deben destetar a su bebé.
                                                        <br></br>
                                                        <br></br>
                                                        Alimentar en tándem a dos niños de edades diferentes es posible, y cuando llegue el nuevo bebé, tu cuerpo producirá leche que se adaptará a las necesidades de cada uno de ellos.
                                                        <br></br>
                                                        <br></br>
                                                        Algunas madres observan que su hijo más mayor se desteta de forma natural durante el embarazo o que elimina algunas tomas. Esto puede deberse a cambios en la composición de la leche durante el embarazo, lo que significa que sabe diferente y es menos dulce.
                                                        <br></br>
                                                        <br></br>
                                                        Debes consultar a un profesional sanitario si deseas mantener la lactancia durante el embarazo y has tenido previamente un parto prematuro, un aborto o sufres algún tipo de hemorragia.
                                                        <br></br>
                                                        <br></br>
                                                        Si necesitas ayuda médica para quedar embarazada, es posible que los médicos no administren determinados fármacos o tratamientos de fertilidad si estás dando el pecho. Habla de todas las opciones que tienes a tu disposición con tu médico, antes de tomar una decisión acerca del destete.
                                                    </p>

                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                    </Modal>
                                </>

                                <>
                                    <Button variant="primary" onClick={() => setShow3(true)} className='btnDestete'>
                                        ¿Cómo puedo llegar a sentirme al destetar a mi bebé?
                                    </Button>

                                    <Modal
                                        show={show3}
                                        onHide={() => setShow3(false)}
                                        fullscreen={fullscreen}
                                        dialogClassName="modal-90w"

                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title">
                                                ¿Cómo puedo llegar a sentirme al destetar a mi bebé?
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>

                                            <Row>
                                                <Col sm={6} className="colimg">
                                                    <img className="imgModal" src="https://lamenteesmaravillosa.com/wp-content/uploads/2019/08/madre-triste-hijo-brazos.jpg" width="80%" />
                                                </Col>

                                                <Col sm={6} className="cotexto">
                                                    <p>
                                                        Muchas mamás toman la decisión de destetar a su bebé y enfrentan emociones encontradas.
                                                        <br></br>
                                                        <br></br>
                                                        Por un lado, el destete les da más libertad y flexibilidad, además del orgullo de saber que el niño está dando un paso importante.
                                                        <br></br>
                                                        <br></br>
                                                        Por el otro, la lactancia es una actividad íntima que fortalece el vínculo entre la madre y el bebé; por eso, a algunas mujeres les cuesta finalizar esta etapa.
                                                        <br></br>
                                                        <br></br>
                                                        Es normal tener una mezcla de emociones y debes comprender que a tu hijo probablemente le ocurra lo mismo y puede que emocionalmente sea complicado...
                                                        <br></br>
                                                        <br></br>
                                                        así que busca tiempo para mimos, caricias y momentos de cercanía. Recuerda también que tendrás infinidad de otras formas de nutrir a tu hijo en el tiempo que tienen por delante."

                                                    </p>

                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                    </Modal>
                                </>
                            </div>
                        </div>
                    </Col>

                    <Col sm={3}>
                        <div className="divH3ComentColi">
                            <h3>Comentarios</h3>
                        </div>
                        <AddComemtariosDestete />
                    </Col>
                </Row>




            </div >
        </>
    )
}

export default Destetar