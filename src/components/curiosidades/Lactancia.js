import React from 'react'
import { Accordion } from 'react-bootstrap'

const Lactancia = () => {
    return (
        <div className="container-fluid">

            <div>
                <h2>Lactancia materna</h2>

                <p>Sabemos que la lactancia materna es el proceso por el que la madre alimenta a su hijo recién nacido a través de sus senos, que segregan leche inmediatamente después del parto, se dice que este debería ser el principal alimento del bebé al menos hasta los dos años.
                    <br></br>
                    Amamantar a un bebé es lo más natural, pero a su vez, la lactancia materna suele venir con su parte correspondiente de preguntas. He aquí lo que necesita saber sobre con qué frecuencia y durante cuánto tiempo debe amamantar a su bebé.</p>

            </div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>¿Con qué frecuencia debo amamantar a mi bebé?</Accordion.Header>
                    <Accordion.Body>

                        <img src="https://www.conmishijos.com/uploads/bebes/Alimentacin/8181-duracionfracuenciatomas-alimentacio-bebes.jpg" />
                        
                        <br></br>
                        <br></br>
                        
                        
                        <p>Durante el primer mes de vida, los recién nacidos deben alimentarse entre ocho y 12 veces al día. La leche materna se digiere fácilmente, por lo que los recién nacidos tienen hambre a menudo. Además, el hecho de amamantar frecuentemente a su bebé favorece su producción de leche durante las primeras semanas.</p>
                        <br></br>

                        <p>Cuando tienen entre 1-2 meses de vida, la mayoría de los bebés suelen hacer entre siete y nueve tomas al día.</p>
                        <br></br>

                        <p>Durante las primeras semanas de vida, usted deberá amamantar a su bebé "a demanda" (cuando tenga hambre), lo que suele ser cada hora y media a tres horas. Conforme los recién nacidos vayan creciendo, necesitarán mamar con menos frecuencia y desarrollarán un horario de lactancia más regular y predecible. Algunos maman cada 90 minutos, mientras que otros pueden aguantar dos o tres horas entre tomas consecutivas.</p>
                        <br></br>

                        <p>Los recién nacidos no deben pasar más de unas cuatro horas sin alimentarse, ni siquiera por la noche</p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>





            <h2></h2>
        </div>
    )
}

export default Lactancia