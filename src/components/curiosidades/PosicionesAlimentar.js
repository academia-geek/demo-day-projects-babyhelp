import React from 'react'
import { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddComentariosPosiciones from '../comentarios/AddComemtariosPosiciones'

const PosicionesAlimentar = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    return (
        <>
            <br></br>
            <Link to="/" className="linkEntrete">
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
            </Link>


        <br></br>
        <br></br>
            <div className="container-fluid" style={{ margin: '0 auto', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', flexDirection: 'column' }}>

            <div style={{ width: '98%', fontSize:'1.4rem', padding: '3% 6%', backgroundColor: 'rgb(221, 113, 113)', boxShadow: '4px 4px 10px rgb(0 0 0 / 80%), -4px -4px 10px rgb(255 255 255 / 40%), inset -4px -4px 10px rgb(0 0 0 / 40%), inset 4px 4px 10px rgb(255 255 255 / 40%)', margin: '0 auto', borderRadius: '8px', color: 'rgb(0, 0, 0)'}}>

                    <h2><strong>Posiciones para alimentar a mi bebé</strong></h2>
                    <br></br>
                    <h3>Tal vez necesites probar varias posiciones antes de encontrar la que les vaya mejor tanto a ti como a tu bebé. Echa un vistazo <strong>presionando cada imágenen</strong> en busca de inspiración.
                    </h3>
                </div>

                <br></br>
                <br></br>
                <Row>
                    <Col sm={9}>
                        <Row style={{ display: 'flex', flexDirection: 'column' }}>
                            <Col sm={6} className="contenedor">
                                <Row>
                                    <Col sm={4}>
                                        <button onClick={() => setShow(true)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <figure>
                                                <img src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_1.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_1.jpg" />
                                                <div class="capa">
                                                    <h3>Recostada o Reclinada</h3>
                                                </div>
                                            </figure>
                                        </button>

                                        <Modal
                                            show={show}
                                            onHide={() => setShow(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    <strong>Recostada o Reclinada</strong>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_1.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_1.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="cotexto">
                                                        <p>La posición de lactancia acostada, también conocida como lactancia biológica,
                                                            a menudo es la primera opción elegida por las madres.

                                                            <br></br>
                                                            <br></br>

                                                            Si colocas a tu bebé sobre
                                                            tu pecho o tripa justo tras el parto, si todo va bien, buscará de forma instintiva su camino hacia uno de tus pechos e intentará agarrarse, lo que se conoce como «gatear hasta el pecho». El contacto piel con piel ayuda a estimular sus instintos de alimentación, al tiempo que la gravedad le permite agarrarse bien y mantenerse en esa posición.
                                                            <br></br>
                                                            <br></br>

                                                            No obstante, dar el pecho en posición acostada no es solo para los recién nacidos, sino que se puede llevar a cabo con bebés de cualquier edad. Puede resultar especialmente útil si tu bebé tiene problemas para agarrarse en otras posiciones, si no le gusta que le toquen la cabeza mientras se alimenta, si tienes una bajada de la leche enérgica o si tus pechos son grandes, como descubrió Isabel, un hijo, Reino Unido:
                                                            <br></br>
                                                            <br></br>
                                                            <h3><strong>Testimonio:</strong></h3>
                                                            «Al principio, la colocación resultó bastante difícil, debido al gran tamaño de mis pechos y que mi bebé era muy pequeño (2,7 kg). Necesité varias semanas para darme cuenta de que no había ninguna posición en la que "debía" estar. Finalmente, acabé dándole el pecho en posición acostada, con el bebé bien equilibrado sobre mí».
                                                            <br></br>
                                                            <br></br>

                                                            Lo más probable es que estés más cómoda si te reclinas ligeramente, en lugar de tumbarte totalmente sobre tu espalda. Utiliza almohadas o cojines para apoyarte y poder ver a tu bebé.
                                                        </p>
                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>

                                    </Col>

                                    <Col sm={4}>
                                        <button onClick={() => setShow1(true)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <figure>
                                                <img src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_2.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_2.jpg" />
                                                <div class="capa">
                                                    <h3>Posición de cuna</h3>
                                                </div>
                                            </figure>
                                        </button>

                                        <Modal
                                            show={show1}
                                            onHide={() => setShow1(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    <strong>Posición de cuna</strong>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_2.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_2.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="cotexto">
                                                        <p>Esta es la posición clásica que la mayoría de nosotras imaginamos
                                                            cuando pensamos en dar el pecho. Supone sentarte en vertical, con
                                                            tu bebé colocado de lado, su cabeza y cuello apoyados en tu
                                                            antebrazo y su cuerpo sobre tu estómago.
                                                            <br></br>
                                                            <br></br>
                                                            Aunque se trata de una posición muy popular, no siempre resulta fácil
                                                            con un recién nacido, ya que no proporciona tanta sujeción al bebé
                                                            como el resto de posiciones.
                                                            <br></br>
                                                            <br></br>
                                                            Una almohada o cojín detrás de ti y una almohada de lactancia
                                                            en tu regazo, sujetando a tu bebé o tus propios brazos, puede
                                                            ofrecerte un mayor apoyo, además de evitar tensión en los hombros
                                                            o espalda.
                                                            <br></br>
                                                            <br></br>
                                                            Si utilizas una almohada de lactancia, asegúrate
                                                            de que no deje a tu bebé demasiado alto; tus pechos deben
                                                            permanecer en su altura de reposo natural para evitar
                                                            pezones doloridos y un agarre con tensión.
                                                            <br></br>
                                                            <br></br>

                                                            <h3><strong>Testimonio:</strong></h3>
                                                            «Utilicé la posición de cuna porque funcionaba. Me sentía cómoda y me gustaba sentarme allí, tranquilamente, mirando a mi bebé», señala Rachael, dos hijos, Italia.
                                                        </p>
                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>

                                    <Col sm={4}>
                                        <button onClick={() => setShow2(true)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <figure>
                                                <img src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_3.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_3.jpg" />
                                                <div class="capa">
                                                    <h3>Posición de cuna cruzada</h3>
                                                </div>
                                            </figure>
                                        </button>

                                        <Modal
                                            show={show2}
                                            onHide={() => setShow2(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    <strong>Posición de cuna cruzada</strong>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_3.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_3.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="cotexto">
                                                        <p> Es bastante parecida a la posición de cuna, pero los brazos
                                                            se utilizan de manera diferente, ya que el cuerpo del bebé
                                                            descansa sobre tu antebrazo contrario.
                                                            <br></br>
                                                            <br></br>
                                                            El objetivo es sujetar
                                                            al bebé a la altura de su cuello y hombros para permitirle inclinar
                                                            la cabeza antes del agarre.
                                                            <br></br>
                                                            <br></br>
                                                            Esta es una gran posición para amamantar a los recién nacidos
                                                            y también para bebés pequeños o con dificultades para el agarre.
                                                            <br></br>
                                                            <br></br>
                                                            Como tu bebé se mantiene totalmente apoyado en tu brazo contrario, tienes más control sobre su colocación y puedes utilizar la mano libre para dar forma al pecho.
                                                            <br></br>
                                                            <br></br>
                                                            Durante los primeros días, no sujetes al bebé por la cabeza,
                                                            ya que esto podría hacer que su mentón se inclinase contra su pecho,
                                                            lo que puede dar como resultado un agarre superficial
                                                            <strong> (que se da cuando tu pezón alcanza la base de su lengua en lugar
                                                                del paladar) y pezones doloridos.</strong>
                                                            <br></br>
                                                            <br></br>
                                                            Cuando el bebé sea más grande, esta técnica resultará mucho
                                                            más sencilla y te permitirá apoyar la cabeza del bebé en tu mano
                                                            <strong> (como se muestra en la imagen).</strong>
                                                            <br></br>
                                                            <br></br>

                                                            <h3><strong>Testimonio:</strong></h3>

                                                            A Julie, dos hijos, Reino Unido, le gusta la flexibilidad que aporta esta posición: «Normalmente utilizo la posición de cuna cruzada con mi recién nacido. Me permite tener una mano libre para cuidar de él al mismo tiempo que se alimenta».

                                                        </p>
                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>

                        <br></br>
                        <br></br>
                        <Row style={{ display: 'flex', flexDirection: 'column' }}>
                            <Col sm={4} className="contenedor">
                                <Row>
                                    <Col sm={4}>
                                        <button onClick={() => setShow3(true)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <figure>
                                                <img src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_4.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_4.jpg" />
                                                <div class="capa">
                                                    <h3>Posición de balón de rugby</h3>
                                                </div>
                                            </figure>
                                        </button>

                                        <Modal
                                            show={show3}
                                            onHide={() => setShow3(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    <strong>Posición de balón de rugby</strong>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_4.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_4.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="cotexto">
                                                        <p>En esta posición <strong>(también conocida como posición axilar o de
                                                            acoplamiento),</strong> te sientas con tu bebé apoyado en tu antebrazo.
                                                            Su cuerpo queda ligeramente curvado sobre tu costado,
                                                            con los pies mirando hacia el respaldo de la silla o el
                                                            mueble en el que estés sentada.
                                                            <br></br>
                                                            <br></br>
                                                            Esta es otra posición de lactancia útil durante los primeros
                                                            días, ya que ofrece una buena sujeción al bebé, al mismo
                                                            tiempo que ofrece todo el control que necesitas y una visión
                                                            perfecta de su rostro. Al estar acurrucado a lo largo de tu
                                                            cuerpo, tu bebé también se sentirá más seguro.
                                                            <br></br>
                                                            <br></br>
                                                            Es posible que esta posición sea una de las preferidas de las madres que hayan tenido una cesárea, un parto de gemelos o un bebé prematuro, y también para las madres que tengan pechos muy grandes.
                                                            <br></br>
                                                            <br></br>

                                                            <h3><strong>Testimonio:</strong></h3>

                                                            «Con mi primera hija, mis pechos llegaron a tener una talla K, que era el doble del tamaño de su cabeza», recuerda Amy, dos hijos, Australia. «Así que colocaba una toalla enrollada debajo de cada pecho para elevarlos, ya que pesaban mucho, y le daba el pecho utilizando la posición de balón de rugby, pero algo más en vertical, para que no se agobiase con su tamaño. Esta posición también me ayudó, ya que había tenido una cesárea y no podía colocarla sobre mi cuerpo».
                                                        </p>
                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>

                                    <Col sm={4}>
                                        <button onClick={() => setShow4(true)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <figure>
                                                <img src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_5.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_5.jpg" />
                                                <div class="capa">
                                                    <h3>Posición acostada de lado</h3>
                                                </div>
                                            </figure>
                                        </button>

                                        <Modal
                                            show={show4}
                                            onHide={() => setShow4(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    <strong>Posición acostada de lado</strong>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_5.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_5.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="cotexto">
                                                        <p>Esta posición acostada de lado es ideal para las tranquilas tomas nocturnas
                                                            y para dar el pecho en la cama o en el sofá.
                                                            <br></br>
                                                            <br></br>
                                                            También puede ser más cómoda
                                                            que la posición sentada si has tenido una cesárea o puntos de sutura. Tú y
                                                            tu bebé deben colocarse acostados uno junto al otro, tripa contra tripa.
                                                            <br></br>
                                                            <br></br>

                                                            <h3><strong>Testimonio:</strong></h3>
                                                            <br></br>
                                                            <br></br>

                                                            «Me costaba mucho sentarme en la cama para darle el pecho por la noche, en parte porque había tenido una cesárea y en parte porque estaba agotada», señala Francesca, un hijo, Reino Unido. «Entonces descubrí que podía alimentar a mi bebé acostada de lado y relajarme al mismo tiempo».
                                                            <br></br>
                                                            <br></br>
                                                            «Maisie no podría agarrarse de ningún otro modo más que con la posición acostada de lado debido a su anquiloglosia. Una consultora de lactancia me mostró cómo hacerlo. Con esta posición, parecía que podía aprovechar la fuerza de mi flujo y sujetarse mejor. Cuando su boca se hizo más grande, aprendió a agarrarse mucho mejor de un modo normal», nos cuenta Sarah, dos hijos, Australia.
                                                        </p>
                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>

                                    <Col sm={4}>
                                        <button onClick={() => setShow5(true)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <figure>
                                                <img src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_6.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_6.jpg" />
                                                <div class="capa">
                                                    <h3>Posición acostada tras cesárea</h3>
                                                </div>
                                            </figure>
                                        </button>

                                        <Modal
                                            show={show5}
                                            onHide={() => setShow5(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    <strong>Posición acostada tras cesárea</strong>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_6.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_6.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="cotexto">
                                                        <p>Si has tenido un parto por cesárea y no eres capaz de encontrar una posición
                                                            de lactancia cómoda, esta posición podría ayudarte.

                                                            <br></br>
                                                            <br></br>
                                                            Al tumbarte con el cuerpo de tu bebé sobre tu hombro podrás darle
                                                            el pecho de forma cómoda sin soportar ningún peso ni presión sobre la herida.
                                                            <br></br>
                                                            <br></br>
                                                            O también puedes probar la posición acostada de lado.

                                                        </p>
                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>


                        <br></br>
                        <br></br>
                        <Row style={{ display: 'flex', flexDirection: 'column' }}>
                            <Col sm={4} className="contenedor">
                                <Row>
                                    <Col sm={4}>
                                        <button onClick={() => setShow6(true)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <figure>
                                                <img src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_7.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_7.jpg" />
                                                <div class="capa">
                                                    <h3>De pie o en la posición de koala</h3>
                                                </div>
                                            </figure>
                                        </button>

                                        <Modal
                                            show={show6}
                                            onHide={() => setShow6(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    <strong>De pie o en la posición de koala</strong>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_7.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_7.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="cotexto">
                                                        <p>De pie o en la posición de koala, tu bebé está sentado a horcajadas en tu muslo,
                                                            o en tu cadera, y tanto su columna como su cabeza se mantienen en posición
                                                            vertical mientras se alimenta.
                                                            <br></br>
                                                            <br></br>
                                                            Puedes utilizar esta posición con un recién
                                                            nacido si le proporcionas toda la sujeción necesaria, y también es un modo
                                                            cómodo de alimentar a un bebé más mayor y capaz de mantenerse sentado sin ayuda.

                                                            <br></br>
                                                            <br></br>
                                                            La posición de pie o de koala a menudo es la posición de lactancia más cómoda para
                                                            <strong> los bebés que sufren reflujo o infecciones de oído (y que suelen preferir
                                                                estar en posición vertical)</strong>, y también puede irles bien a los bebés
                                                            con <strong>anquiloglosia o un tono muscular bajo.</strong>
                                                            <br></br>
                                                            <br></br>

                                                            <h3><strong>Testimonio:</strong></h3>
                                                            <br></br>

                                                            «Cuando mi bebé se hizo más mayor, a menudo utilizaba la posición de pie porque era cómoda para los dos y porque podía seguir sintiendo su cuerpo cerca del mío», indica Peggy, un hijo, Suiza. «También era una posición discreta para darle el pecho en público».
                                                        </p>
                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>

                                    <Col sm={4}>
                                        <button onClick={() => setShow7(true)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <figure>
                                                <img src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_8.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_8.jpg" />
                                                <div class="capa">
                                                    <h3>Posición a cuatro patas</h3>
                                                </div>
                                            </figure>
                                        </button>

                                        <Modal
                                            show={show7}
                                            onHide={() => setShow7(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    <strong>Posición a cuatro patas</strong>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_8.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_8.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="cotexto">
                                                        <p>Esta posición de lactancia hace que tu bebé quede tumbado sobre su espalda,
                                                            mientras tú te colocas en cuclillas sobre él y dejas suspendido el pezón
                                                            en su boca.
                                                            <br></br>
                                                            <br></br>
                                                            <strong>Algunas madres afirman que</strong> utilizar esta posición durante
                                                            periodos de tiempo cortos ayuda cuando tienen problemas como <strong>
                                                                mastitis</strong> y
                                                            no quieren que aplasten o toquen sus pechos; otras señalan que <strong>la gravedad
                                                                ayuda a desbloquear los conductos galactóforos obstruidos,</strong> aunque todavía
                                                            no hay ninguna evidencia científica que respalde esta idea.
                                                            <br></br>
                                                            <br></br>
                                                            También puedes
                                                            utilizar la posición a cuatro patas mientras estás sentada, arrodillada sobre
                                                            tu bebé en una cama o en un sofá, o casi tumbada boca abajo, pero apoyada en
                                                            tus brazos. Puede que necesites utilizar almohadas y cojines para apoyarte y
                                                            evitar así tensiones en la espalda o los hombros.
                                                            <br></br>
                                                            <br></br>

                                                            <h3><strong>Testimonio:</strong></h3>


                                                            «Utilicé la posición a cuatro patas varias veces cuando tenía los conductos bloqueados y el resto de métodos para eliminar los bultos de los pechos no había funcionado. Esta posición me fue bien. Creo que fue por el efecto de la gravedad y porque el ángulo y la posición de mi bebé eran muy diferentes a nuestras tomas normales, por lo que mi pecho se vaciaba de un modo diferente», señala Ellie, dos hijos, Reino Unido.
                                                            <br></br>
                                                            <br></br>
                                                            «Utilicé la posición a cuatro patas cuando mi bebé tuvo problemas para agarrarse», nos cuenta Lorna, dos hijos, Reino Unido. «No era la posición más cómoda, pero en aquel momento hubiese hecho cualquier cosa para conseguir que se agarrase. ¡Funcionó! Y seguimos con la lactancia ocho meses después».

                                                        </p>
                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>

                                    <Col sm={4}>
                                        <button onClick={() => setShow8(true)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <figure>
                                                <img src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_9.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_9.jpg" />
                                                <div class="capa">
                                                    <h3>Lactancia con portabebés</h3>
                                                </div>
                                            </figure>
                                        </button>

                                        <Modal
                                            show={show8}
                                            onHide={() => setShow8(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    <strong>Lactancia con portabebés</strong>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_9.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_9.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="cotexto">
                                                        <p>Puede que requiera un poco de práctica, pero dar el pecho a tu bebé en un portabebés puede ser práctico cuando estás fuera de casa, con bebés un poco más mayores o incluso mientras haces otras tareas.

                                                            <br></br>
                                                            <br></br>
                                                            Este método suele funcionar mejor si el bebé es un lactante
                                                            experimentado y puede sujetar la cabeza por sí mismo. Puedes
                                                            dar el pecho con todo tipo de arneses, incluyendo chales elásticos,
                                                            cabestrillos y portabebés delanteros.
                                                            <br></br>
                                                            <br></br>
                                                            Sea cual sea el sistema que elijas, asegúrate de poder ver siempre el rostro de tu bebé y de que su barbilla no quede presionada contra su pecho.

                                                            <br></br>
                                                            <br></br>
                                                            <h3><strong>Testimonio:</strong></h3>
                                                            <br></br>

                                                            También resulta útil si a tu bebé no le gusta que lo tumben o si se alimenta con frecuencia, como es el caso de Lindsay, dos hijos, EE. UU.: «Con frecuencia, utilicé un portabebés delantero con mis dos bebés. Cuando estábamos fuera de casa, me colocaba un pareo alrededor del cuello y envolvía con él el portabebés a modo de funda. De este modo, se alimentaban hasta que se quedaban dormidos».

                                                        </p>
                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>

                        <br></br>
                        <br></br>
                        <Row style={{ display: 'flex', flexDirection: 'column' }}>
                            <Col sm={4} className="contenedor">
                                <Row>
                                    <Col sm={6}>
                                        <button onClick={() => setShow9(true)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <figure>
                                                <img src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_10.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_10.jpg" />
                                                <div class="capa">
                                                    <h3>Posición de balón de rugby doble</h3>
                                                </div>
                                            </figure>
                                        </button>

                                        <Modal
                                            show={show9}
                                            onHide={() => setShow9(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    <strong>Posición de balón de rugby doble</strong>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_10.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_10.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="cotexto">
                                                        <p>La posición de balón de rugby doble <strong>(también conocida como
                                                            posición de doble acoplamiento)</strong> es una posición de lactancia
                                                            fantástica para gemelos, ya que puedes darles el pecho a la vez
                                                            mientras mantienes las manos relativamente libres.
                                                            <br></br>
                                                            <br></br>
                                                            Es probable que necesites utilizar una <strong>almohada de lactancia </strong>
                                                            doble de diseño especial para esta posición,
                                                            sobre todo durante los primeros días.
                                                            <br></br>
                                                            <br></br>
                                                            Esta almohada te proporcionará una sujeción extra para mantener a
                                                            los dos bebés bien colocados, y también reducirá la presión sobre tu
                                                            tripa si el parto ha sido por cesárea. Además, tendrás la manos más libres, por lo que podrás cuidar a un bebé sin molestar al otro mientras se alimenta.
                                                            <br></br>
                                                            <br></br>

                                                            <strong>Si tienes gemelos,</strong> también puedes probar otras posiciones, como <strong>la posición de cuna cruzada doble</strong>, uno de los bebés en posición de <strong>balón de rugby y otro en posición de cuna</strong>, y las posiciones acostada doble o de pie doble.

                                                            <br></br>
                                                            <br></br>
                                                            <h3><strong>Testimonio:</strong></h3>
                                                            <br></br>

                                                            «Cuando nacieron mis gemelos, eran muy pequeños y tenían que tomar el pecho cada dos horas, tanto de día como de noche. Pronto me di cuenta de que para poder hacer más cosas aparte de alimentarlos, tenía que darles el pecho a la vez», afirma Emma, dos hijos, Reino Unido. «Utilicé la posición de balón de rugby doble con una almohada de lactancia».
                                                            <br></br>
                                                            <br></br>


                                                        </p>
                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>

                                    <Col sm={6}>
                                        <button onClick={() => setShow10(true)} style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <figure>
                                                <img src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_11.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_11.jpg" />
                                                <div class="capa">
                                                    <h3>Posición de mano de bailarina</h3>
                                                </div>
                                            </figure>
                                        </button>

                                        <Modal
                                            show={show10}
                                            onHide={() => setShow10(false)}
                                            fullscreen={fullscreen}
                                            dialogClassName="modal- 90w"

                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    <strong>Posición de mano de bailarina</strong>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="bodymod mod">
                                                <Row>
                                                    <Col sm={6} className="colimg foto">
                                                        <img className="imgModal" src="https://www.medela.es/.imaging/mte/medela-2018/content/dam/medela-com/breastfeeding-consumer/pictures/general/breastfeeding-journey/Articles/Ev_1_4_Breastfeeding_positions_gallery/Ev1_4_Breastfeeding_positions_gallery_11.jpg/jcr:content/Ev1_4_Breastfeeding_positions_gallery_11.jpg" width="70%" />
                                                    </Col>

                                                    <Col sm={6} className="cotexto">
                                                        <p>

                                                            <strong>Si tu bebé tiene problemas para mantenerse agarrado</strong> o tiene un <strong>tono
                                                                muscular bajo,</strong> tal vez porque nació de forma prematura, tiene síndrome
                                                            de Down o una enfermedad o incapacidad, prueba con esta posición para
                                                            <strong> sujetar tanto su cabeza como tu pecho.</strong>
                                                            <br></br>
                                                            <br></br>
                                                            Empieza sujetando el pecho con
                                                            tu mano por debajo, con el pulgar en un lado y el resto de los dedos en
                                                            el otro.
                                                            <br></br>
                                                            <br></br>
                                                            A continuación, desliza la mano hacia delante de forma que el
                                                            pulgar y el índice adopten una forma de U justo en la parte delantera
                                                            del pecho. Los otros tres dedos deben seguir sujetando el pecho por
                                                            debajo.
                                                            <br></br>
                                                            <br></br>
                                                            Coloca la mandíbula del bebé sobre el pulgar y el índice
                                                            mientras se alimenta, con el mentón situado en la parte inferior
                                                            de la U, el pulgar sujetando con cuidado una de las mejillas y el
                                                            dedo índice sujetando la otra.
                                                            <br></br>
                                                            <br></br>
                                                            Esta posición le ofrece una gran
                                                            sujeción al bebé, te permite controlar su postura y también ofrece
                                                            una visión perfecta de su agarre.
                                                        </p>
                                                    </Col>
                                                </Row>

                                            </Modal.Body>
                                        </Modal>
                                    </Col>

                                </Row>
                            </Col>

                        </Row>

                    </Col>

                    <Col sm={3}>
                        <div className="divH3ComentColi">
                            <h3>Comentarios</h3>
                        </div>
                        <AddComentariosPosiciones />

                    </Col>
                </Row>


            </div >


        </>
    )
}

export default PosicionesAlimentar