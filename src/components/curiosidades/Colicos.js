import React from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddComemtariosColicos from '../comentarios/AddComemtariosColicos'
import '../../styles/colicos.css'

const Colicos = () => {
    return (
        <>
            <br></br>
            <Link to="/">
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
            </Link>
            <div className="container-fluid colicos">
                <Row>
                    <Col sm={8}>

                        <h2>¿Cuáles son los síntomas y cómo aliviar los cólicos en bebés?</h2>
                        <br></br>

                        <p>Si tu bebé sufre constantemente de cólicos, aquí te decimos qué puedes hacer para regresar la sonrisa a su carita.</p>

                        <center>
                            {/* <img src=" width="90%" /> */}
                            <Carousel>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.chicco.com.mx/content/dam/chicco/mx/imagenes-externas-2/chicco-blog-03.png"
                                        alt="First slide"
                                        width="90%"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://static.guiainfantil.com/media/26693/colicosG.jpg"
                                        alt="Second slide"
                                        width="90%"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://img.remediosdigitales.com/e41b65/1024_2000/1366_521.jpg"
                                        alt="Third slide"
                                        width="90%"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://cuidadoinfantil.com/wp-content/uploads/2017/11/ayudar-bebe-echar-gases.jpg"
                                        alt="Third slide"
                                        width="90%"
                                    />
                                </Carousel.Item>
                            </Carousel>

                        </center>
                        <br></br>

                        <p>Todos los recién nacidos lloran, sin embargo, si el tuyo comienza a llorar a todo pulmón sin razón o motivo aparente (como tener hambre, pañal sucio, frío o calor, etc.), lo más probable es que se trate de los llamados cólicos infantiles, también conocido como cólicos de lactante.
                            <br></br>
                            <br></br>
                            Para ayudarte a identificarlos lo más rápidamente posible, aquí te informamos cuáles son los síntomas más comunes y lo que puedes hacer al respecto para librar de esta terrible molestia a tu bebé. ¿Estás lista?
                        </p>

                        <br></br>
                        <br></br>
                        <h2>Síntomas básicos del cólico de lactante</h2>
                        <br></br>

                        <p>Un cólico de lactante es cuando tu bebé, sin estar enfermo o hambriento, comienza a llorar por horas seguidas sin razón aparente. Según especialistas, aproximadamente 40% de todos los bebés lactantes sufren de cólicos. Estos empiezan alrededor de las seis semanas de vida y suelen desaparecer a partir de la doceava. <br></br>
                            <br></br>
                            Podrás notar que cuando tu bebé tiene un cólico este...
                        </p>

                        <ul>
                            <li className=".li">Comienza a llorar sin razón (aún recién comido y bañado).</li>
                            <li className=".li">Su llanto es intenso, como si algo le lastimara.</li>
                            <li className=".li">Se pone muy rojo.</li>
                            <li className=".li">Cierra sus manos en puños, arquea sus piernas y su espalda, y endurece sus brazos.</li>
                        </ul>

                        <br></br>


                        <h2>Los cólicos de tu bebé no son una enfermedad</h2>

                        <br></br>

                        <p>Es importante considerar que los bebés que sufren de cólicos no están enfermos. De hecho, si tu bebé sufre de cólicos es muy probable que succione normalmente, tenga un sano apetito y produzca heces normales. Incluso, es completamente natural que regurgite su comida pues es señal de un sano movimiento gastrointestinal. </p>
                        <p>No obstante, es importante considerar que la succión debilitada, la pérdida del apetito, la pérdida de peso o el constante vómito son importantes signos de alerta de que tu bebé puede tener un problema de salud subyacente. </p>
                        <p>En estos casos, comunícate rápidamente con tu pediatra para realizar un chequeo completo de tu bebé y así descartar alergias, infecciones, bacterias, problemas estomacales, lesiones y demás.</p>

                        <br></br>
                        <br></br>

                        <h2>¿Por qué mi bebé tiene cólicos?</h2>
                        <br></br>

                        <p>Hoy en día, múltiples teorías abundan entre expertos sobre las causas reales del cólico de los bebés. Entre las teorías sugeridas se encuentran:</p>

                        <ul>
                            <li className=".li">Una posible intolerancia a la leche de vaca.</li>
                            <li className=".li">Intolerancia a algunos ingredientes de las fórmulas lácteas.</li>
                            <li className=".li">El consumo de alimentos que pueden causar cólicos como lácteos, soya, huevos o productos de trigo por parte de la madre durante la lactancia.</li>
                            <li className=".li">La acumulación de gases retenidos por movimientos gastrointestinales.</li>
                            <li className=".li">La acumulación de aire en el aparato gástrico del bebé (causado por tragar aire accidentalmente con alimentos líquidos o durante el llanto).</li>
                            <li className=".li">Hipersensibilidad cuando el sistema nervioso continúa desarrollándose.</li>
                            <li className=".li">El avance irregular de comida por el tracto digestivo del bebé.</li>
                            <li className=".li">El reflujo gastroesofágico no diagnosticado.</li>
                            <li className=".li">La diferencia en el temperamento y personalidad de los bebés, que aún no se adaptan al mundo fuera del vientre de sus madres.</li>
                            <li className=".li">Que el cólico es una forma precoz y no diagnosticada de migraña.</li>
                        </ul>

                        <br></br><br></br>
                        <h2>Cómo aliviar los cólicos del bebé</h2>
                        <br></br>

                        <p>Al no tener una causa definida, los cólicos de lactantes pueden ser tratados de distintas maneras. Entre las que nosotros te recomendamos se encuentran:</p>

                        <ul>
                            <li className=".li">Elimina la ingesta accidental de aire durante la comida de tu bebé con biberones anticolicos.</li>
                            <li className=".li">Si estás amamantando a tu bebé, pregunta a tu doctor sobre posibles medicamentos y alimentos que puedas retirar de tu rutina para descartar así cualquier alergia.</li>
                            <li className=".li">Identifica con tu pediatra si tu bebé sufre de alguna reacción alérgica a su fórmula y sustitúyela.</li>
                            <li className=".li">Cuando comience a llorar, cámbialo de posición. Siéntalo, páralo e incluso camina con él en brazos.</li>
                            <li className=".li">Arrulla a tu bebé en brazos y usa un chupón especial que aún le permita una correcta respiración.</li>
                        </ul>

                        <br></br><br></br>

                        <h2>¿Cómo cuido de mi misma si mi bebé sufre de cólicos?</h2>
                        <br></br>

                        <p>Los cólicos suelen ser situaciones muy incómodas para los padres. Si tu bebé sufre de cólicos es importante que recuerdes dos cosas muy importantes:</p>

                        <ol>
                            <li className=".li">Tener sentimientos negativos ante esta situación es muy natural y no te hacen mala madre o padre..</li>
                            <li className=".li">Recuerda que todo va a mejorar con el tiempo.</li>
                            <li className=".li">Está bien dejar a tu bebé en su cuna o su corral por unos 10 minutos para calmarte.</li>
                        </ol>

                        <br></br><br></br>

                        <p>Como siempre, recuerda hablar con tu pareja de manera asertiva y apóyate en él o ella, cuando necesites un descanso rápido. Tampoco temas preguntar por ayuda a familiares, amigos y cuidadoras o niñeras, en caso de emergencias.

                            Recuerda que una mamá relajada ayuda más a su bebé.</p>

                    </Col>

                    <Col sm={4}>

                        <div className="divH3ComentColi">
                            <h3>Comentarios</h3>
                        </div>


                        <br></br>
                        <AddComemtariosColicos />
                    </Col>
                </Row>



            </div>
        </>
    )
}

export default Colicos