import React from 'react'
import { Accordion, Row, Col } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import '../../styles/lactar.css'
import AddComentariosLactancia from '../comentarios/AddComemtariosLactancia'

const Lactancia = () => {
    return (
        <>
            <br></br>
            <br></br>
            <Link to="/" className="linkLactar">
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
            </Link>
            <br></br>
            <div className="container-fluid contelacta">

                <div className="divlactatext">
                    <h2>Lactancia materna</h2>
                    <br></br>

                    <p>Sabemos que la lactancia materna es el proceso por el que la madre alimenta a su hijo recién nacido a través de sus senos, que segregan leche inmediatamente después del parto, se dice que este debería ser el principal alimento del bebé al menos hasta los dos años.
                        <br></br>
                        <br></br>
                        Amamantar a un bebé es lo más natural, pero a su vez, la lactancia materna suele venir con su parte correspondiente de preguntas. He aquí lo que necesita saber sobre con qué frecuencia y durante cuánto tiempo debe amamantar a su bebé.</p>

                </div>

                <Row>
                    <Col sm={9}>

                        <Accordion defaultActiveKey="0" style={{ width: '90%', margin: '0 auto', marginTop: '5%' }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><strong>¿Con qué frecuencia debo AMAMANTAR a mi bebé?</strong></Accordion.Header>
                                <Accordion.Body className="bodyAcor">
                                    <center>
                                        <ReactPlayer
                                            url="https://res.cloudinary.com/dhu8kck7f/video/upload/v1652158875/relajacion/ctuuxztxnruvzayudvxe.mp4"
                                            width="80%"
                                            height="auto"
                                            controls
                                        />
                                    </center>
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
                                <Accordion.Header><strong>¿PROBLEMAS PARA LACTAR, TE DUELE, NO TE SALE LECHE?</strong></Accordion.Header>
                                <Accordion.Body className="bodyAcor">
                                    <center>
                                        <ReactPlayer
                                            url="https://res.cloudinary.com/dhu8kck7f/video/upload/v1652165335/relajacion/v1nauwz0x9ffk0fjrgoa.mp4"
                                            width="80%"
                                            height="auto"
                                            controls
                                        />
                                    </center>
                                    <br></br>
                                    <p>La lactancia no siempre es sencilla. En cualquier caso, si estás teniendo problemas, no estás sola. De hecho, un estudio realizado en los EE. UU. con más de 500 madres concluyó que el 92 % de ellas tuvieron dificultades con la lactancia antes del tercer día 1. Afortunadamente, muchas de estas dificultades son fáciles de resolver. </p>
                                    <br></br>

                                    <p><strong>Problema 1: ME DUELE AL DAR PECHO: </strong>
                                        <br></br>
                                        <br></br>
                                        El dolor durante la lactancia suele reducirse a pezones doloridos o sensibles, especialmente tras la «subida de la leche», que se produce entre el segundo y el cuarto día tras el parto 2. Tu bebé se alimentará cada dos horas, lo que significa que este problema puede empeorar de forma rápida, y muchas madres ven cómo sus pezones se agrietan, sangran o tienen ampollas. ¡Qué dolor!

                                        <br></br>
                                        <br></br>
                                        <strong>Soluciones:</strong>
                                        <br></br>
                                        <br></br>

                                        <ul>
                                            <li><strong>Comprueba el agarre de tu bebé:</strong> La causa más probable del dolor durante la lactancia es un agarre deficiente del bebé. Tu recién nacido debe tener una porción importante de la parte inferior de la areola (la piel oscura que rodea el pezón) dentro de la boca cuando se alimenta, con el pezón presionado contra el paladar y agarrado suavemente por debajo con su lengua.</li>
                                            <br></br>
                                            <li><strong>Prueba diferentes posiciones para dar el pecho: </strong>Una posición tumbada, de cuna cruzada, bajo el brazo («balón de rugby») o acostada puede eliminar la presión de las zonas del pecho en las que tengas más dolor.</li>
                                            <br></br>
                                            <li><strong>Limpia los pezones dañados</strong> suavemente con varios algodones humedecidos en agua después de las tomas para eliminar cualquier suciedad que pueda provocar una infección.</li>
                                            <br></br>
                                            <li><strong>Seca los pezones al aire</strong>  o frótalos suavemente con una muselina o toallita muy limpia y suave, ya que se pueden producir infecciones en condiciones de humedad. Utiliza discos absorbentes desechables o lavables para absorber cualquier pérdida de leche y recuerda que debes cambiarlos de forma regular. </li>
                                            <br></br>
                                            <li><strong>Calma el dolor de los pezones.</strong> Alivia el dolor y la piel reseca con lanolina en crema ultrapura, o aplica con suavidad unas gotas de tu propia leche. No es necesario quitar ninguna de las dos antes de la siguiente toma. También puedes usar parches de hidrogel directamente de la nevera. Estos apósitos para los pezones enfrían y proporcionan un alivio instantáneo para el dolor, además de crear las condiciones ideales para su curación.</li>
                                            <br></br>
                                            <li><strong>Protege tus pezones.</strong> Los protectores de pezones evitan que la ropa te roce las áreas doloridas.</li>
                                            <br></br>
                                            <li><strong>Sé paciente.</strong> El dolor suele remitir después de unos días, cuando tu cuerpo ya se ha acostumbrado a dar el pecho y la succión del bebé se hace más eficiente.</li>
                                            <br></br>
                                            <li><strong>Consulta a un profesional sanitario</strong> un especialista o una consultora de lactancia si el dolor mientras das el pecho no remite en unos pocos días. Un dolor continuo en los pezones puede indicar la presencia de una infección que puede requerir medicación.</li>
                                        </ul>

                                    </p>

                                    <br></br>
                                    <br></br>

                                    <p><strong>Problema 2: MI BEBÉ NO SE AGARRA CORRECTAMENTE</strong>
                                        <br></br>
                                        <br></br>

                                        Algunos recién nacidos parece que tienen problemas para conseguir un buen agarre. Tal vez sea porque los dos necesitáis algo de tiempo para coordinar vuestros esfuerzos, o porque han nacido de forma prematura, no se sienten bien después de un parto complicado, o porque sus madres tienen pezones planos o invertidos.

                                        <br></br>
                                        <br></br>
                                        <strong>Soluciones:</strong>
                                        <br></br>
                                        <br></br>

                                        <ul>
                                            <li><strong>Utiliza pezoneras para alimentar a tu bebé. </strong>Si tu bebé no se agarra, un especialista o consultora de lactancia puede recomendarte el uso de pezoneras para ofrecerle un objetivo más grande y firme donde agarrarse. En general, las pezoneras deben considerarse una solución a corto plazo.</li>
                                            <br></br>
                                            <li><strong>Saca hacia fuera los pezones invertidos o planos.</strong>Los formadores de pezones se pueden colocar perfectamente en el interior del sujetador y aplican una ligera presión que ayuda a sacar hacia fuera los pezones para permitir la lactancia.</li>
                                            <br></br>
                                            <li><strong>Adopta diferentes posiciones</strong>para facilitar el trabajo a tu recién nacido. Necesita sentirse sujeto, cómodo y capaz de respirar para poder alimentarse de forma adecuada. Asegúrate de no sujetar ni presionar su cabeza. Una posición tumbada, en la que el bebé se encarga de agarrarse, le ayuda a utilizar sus reflejos innatos y le facilita la tarea de llegar al pecho y agarrarse</li>
                                            <br></br>
                                            <li><strong>Realiza pequeños ajustes mientras alimentas a tu bebé.</strong> En lugar de colocarlo y retirarlo del pecho, lo que puede frustraros a los dos, simplemente asegúrate de que está bien colocado y cómodo. Mantén su cuerpo cerca de ti, sujetándolo bien del hombro para que se sienta seguro.  Deja que su cabeza descanse sobre tu muñeca para que pueda inclinarse ligeramente hacia atrás y tenga más espacio en la nariz para respirar. Su barbilla debe quedar cerca de tu pecho. Si realizar pequeños ajustes no parece mejorar la comodidad de tu bebé, solicita la ayuda de un especialista o consultora de lactancia.</li>
                                        </ul>
                                        <br></br>
                                    </p>

                                    <br></br>
                                    <br></br>
                                    <p><strong>Problema 3: NO TENGO SUFICIENTE LECHE MATERNA</strong>
                                        <br></br>
                                        <br></br>

                                        En un principio, generarás una pequeña cantidad de leche materna porque los cambios hormonales que activan la producción de leche se producen lentamente, y no finalizan hasta llegar al segundo o cuarto día 2. Esto puede hacer que te preocupes por si tu bebé no está recibiendo suficiente alimentación, pero dado que su estómago es diminuto durante los primeros días y se alimenta con frecuencia, esto no supone un problema. Durante estos primeros días solo tienes que preocuparte si tu bebé pierde más peso de lo esperado y produce muy pocos pañales húmedos y sucios, o si muestra signos de deshidratación. Para obtener una explicación completa acerca de con qué frecuencia tu recién nacido debe mojar o manchar sus pañales, lee Dar el pecho a un recién nacido: qué puedes esperar durante la primera semana.
                                        <br></br>
                                        <br></br>
                                        <strong>Soluciones:</strong>
                                        <br></br>
                                        <br></br>

                                        <ul>
                                            <li><strong>Alimenta a demanda y no sigas un horario. </strong>Durante la primera semana después del parto, tu recién nacido querrá alimentarse al menos cada dos o tres horas (¡puede que más!) tanto durante el día como durante la noche. Esta frecuencia ayuda a establecer tu producción de leche.</li>
                                            <br></br>
                                            <li><strong>Cuídate.</strong>
                                                No siempre es fácil con un recién nacido, pero intenta descansar cuando puedas, come bien y busca toda la ayuda posible con las tareas domésticas y con cualquier otro niño mayor para que puedas centrarte en la lactancia.</li>
                                            <br></br>
                                            <li><strong>Extractor de leche</strong>El extractor de leche se puede convertir en una herramienta sumamente útil para ayudarte en el proceso de sacar leche si no produces, Si tu bebé se alimenta a menudo y a pesar de ello no gana peso, un especialista o consultora de lactancia puede recomendarte la extracción para establecer tu suministro de leche. </li>
                                            <br></br>
                                            <li><strong>Busca la ayuda de un profesional sanitario, un especialista o una consultora de lactancia </strong>que pueda valorar si tienes un problema de suministro de leche. Cuanto antes recibas ayuda, mejor.</li>
                                        </ul>

                                    </p>

                                    <br></br>
                                    <br></br>
                                    <p><strong>Problema 4: MIS PECHOS ESTÁN MUY LLENOS Y DUROS</strong>
                                        <br></br>
                                        <br></br>
                                        Cuando se produzca la subida de la leche, notarás que tus pechos están más llenos y firmes. Si tu bebé se alimenta bien y con frecuencia, esta situación debería superarse sin problemas.
                                        <br></br>
                                        <br></br>
                                        No obstante, los pechos de algunas mujeres se endurecen en exceso, y pueden estar más sensibles,
                                        incómodas e incluso sentir dolor: un problema que recibe el nombre de congestión mamaria.
                                        <br></br>
                                        <br></br>
                                        Los pechos congestionados también pueden notarse muy calientes debido a la actividad que se
                                        produce en su interior: ¡es como un atasco de tráfico! Aunque se trata de una situación temporal,
                                        que a menudo dura de 24 a 48 horas, la congestión también puede dificultar a tu bebé el agarre,
                                        ya que tus pezones se aplanan.
                                        <br></br>
                                        <br></br>

                                        <strong>Soluciones:</strong>
                                        <br></br>
                                        <br></br>

                                        <ul>
                                            <li><strong>Alimenta a tu bebé con frecuencia.</strong>Intenta darle el pecho al menos de 8 a 12 veces cada 24 horas. Este es el tratamiento principal para este problema.</li>
                                            <br></br>
                                            <li><strong>Acude a un profesional sanitario,</strong> especialista o consultora de lactancia si los síntomas duran más de 48 horas, si tienes fiebre o si tu bebé no puede tomar el pecho debido a la congestión. </li>

                                        </ul>

                                    </p>


                                    <br></br>
                                    <br></br>
                                    <p><strong>Problema 5: MIS PECHOS PIERDEN LECHE</strong>
                                        <br></br>
                                        <br></br>

                                        Los pechos con pérdidas de leche son muy habituales durante los primeros días de lactancia, tras la subida de la leche. Puede que pierdas leche de un pecho cuando alimentes a tu bebé con el otro, cuando te tumbes boca abajo para dormir o cuando algo estimule tu reflejo de salida de leche de forma accidental, como la presencia de otro bebé llorando en el supermercado. Las pérdidas suelen remitir después de unas seis semanas.                            <br></br>
                                        <br></br>
                                        <br></br>
                                        <strong>Soluciones:</strong>
                                        <br></br>
                                        <br></br>

                                        <ul>
                                            <li><strong>Protege tu ropa </strong>mediante el uso de discos absorbentes desechables o lavables en el interior del sujetador, tanto por el día como por la noche.</li>
                                            <br></br>
                                            <li><strong>¡No pierdas ni una gota! </strong>
                                                Las copas para recoger la leche se colocan dentro del sujetador y recogen
                                                cualquier pérdida leche. Resultan útiles cuando la pérdida es excesiva para
                                                los discos absorbentes, o si un pezón tiende a gotear mientras alimentas a tu
                                                bebé con el otro.
                                                <br></br><br></br> Si quieres guardar la leche recogida, puedes hacerlo, pero
                                                utiliza solamente la leche recogida durante una toma. Guarda la leche en un
                                                contenedor estéril y, si no vas a dársela a tu bebé justo después de recogerla,
                                                colócala en el frigorífico inmediatamente y utilízala antes de que pasen 24 horas.
                                                <br></br><br></br>
                                                No utilices copas para recoger leche durante más de dos o tres horas cada vez.</li>
                                        </ul>
                                    </p>



                                    <br></br>
                                    <br></br>
                                    <p><strong>Problema 6: PRODUZCO DEMASIADA LECHE</strong>
                                        <br></br>
                                        <br></br>

                                        ¡En ocasiones, cuando la leche sube, sube de verdad! Puede que tengas un suministro
                                        excesivo de leche, de carácter temporal, durante las primeras semanas, pero esta situación
                                        remitirá pronto 7. <br></br><br></br>Hasta entonces, puede que sientas dolor en los pechos y que estén duros
                                        la mayor parte del tiempo, incluso después de una toma, y es posible que pierdas una gran
                                        cantidad de leche. Tu bebé puede toser y chisporrotear con la fuerza de la salida de la leche,
                                        vomitar al moverlo tras las tomas y sentir incomodidad en la tripa, con heces explosivas,
                                        espumosas y verdosas. <br></br><br></br>Todo esto sugiere que tienes demasiada leche, pero este problema se
                                        solucionará por sí solo en cuanto tus pechos se adapten a su nuevo trabajo.
                                        <br></br><br></br>


                                        <strong>Soluciones:</strong>
                                        <br></br>
                                        <br></br>

                                        <ul>
                                            <li><strong>Extrae algo de leche manualmente </strong>al iniciar cada toma para reducir la fuerza de la salida de la leche.</li>
                                            <br></br>
                                            <li><strong>Prueba la posición de lactancia tumbada</strong>
                                                para que tu bebé pueda controlar mejor el flujo de leche. O utiliza la posición de cuna: sujeta al bebé por los hombros, asegurándote de que su cabeza quede ligeramente inclinada hacia atrás, descansando sobre tu muñeca. Su cuerpo reposará sobre el tuyo, inclinado hacia abajo en diagonal. </li>                                <li><strong>Extractor de leche</strong>El extractor de leche se puede convertir en una herramienta sumamente útil para ayudarte en el proceso de sacar leche si no produces, Si tu bebé se alimenta a menudo y a pesar de ello no gana peso, un especialista o consultora de lactancia puede recomendarte la extracción para establecer tu suministro de leche. </li>
                                            <br></br>
                                            <li><strong>Sé delicada y paciente. </strong>Deja que tu bebé descanse y digiera la leche, tanto durante como después de una toma. Si lo mueves demasiado o muy rápido, podría sentir náuseas. A medida que vaya creciendo, irá acostumbrándose al flujo, que en cualquier caso se ralentizará.</li>
                                            <br></br>
                                            <li><strong>Utiliza una toallita o un paño de muselina</strong>para limpiar la salida brusca de leche si tu bebé se agobia cuando la leche empieza a salir, y coloca una copa para recoger la leche en el otro pecho para recoger cualquier pérdida de leche.</li>
                                            <br></br>
                                            <li><strong>Solicita el consejo de un especialista o consultora de lactancia</strong> si sigues teniendo dificultades después de varias semanas. Ellos valorarán la situación y te podrán aconsejar dar solo un pecho o restringir la alimentación si necesitas reducir tu suministro de leche.</li>
                                        </ul>
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header><strong>¿Cuánto TIEMPO duran las TOMAS?</strong></Accordion.Header>
                                <Accordion.Body className="bodyAcor">

                                    <p>Los recién nacidos pueden alargar las tomas hasta 20 minutos o más, mamando de uno o de ambos pechos. Conforme van creciendo, los bebés van siendo más eficaces al mamar, de modo que pueden tardar solo entre cinco y 10 minutos en vaciar cada pecho.
                                    </p>

                                    <br></br>
                                    <br></br>
                                    <center>
                                        <ReactPlayer
                                            url="https://res.cloudinary.com/dhu8kck7f/video/upload/v1652158875/relajacion/ctuuxztxnruvzayudvxe.mp4"
                                            width="80%"
                                            height="auto"
                                            controls
                                        />
                                    </center><br></br>

                                    <p>La duración de las tomas es algo que dependerá de su bebé y de usted, así como de otras cosas, como:</p>
                                    <br></br>
                                    <br></br>
                                    <ul>
                                        <li>Si ya le ha subido la leche (lo que suele ocurrir entre 2 y 5 días después de que nazca el bebé)</li>
                                        <br></br>
                                        <li>Si su reflejo de eyección (o bajada de la leche), el que hace que la leche fluya desde el pezón cuando el bebé empieza a succionar, es inmediato o tarda varios minutos en cada toma</li>
                                        <br></br>
                                        <li>Si su flujo de salida de la leche es lento o rápido</li>
                                        <br></br>
                                        <li>Si su bebé se agarra bien al pecho, abarcando con la boca la mayor parte posible de la areola mamaria (el círculo oscuro de piel que hay alrededor del pezón)</li>
                                        <br></br>
                                        <li>Si su bebé "va al grano" desde el principio o se toma su tiempo para mamar</li>
                                        <br></br>
                                        <li>Si su bebé está adormilado o se distrae con facilidad</li>

                                    </ul>

                                    <br></br>
                                    <br></br>
                                    ¿CÓMO CUENTO LOS INTERVALOS ENTRE TOMAS?
                                    <br></br>
                                    <br></br>

                                    <p>Los intervalos entre tomas se cuentan desde el momento en que el bebé empieza a mamar (en vez de cuando termina) hasta el inicio de la próxima toma.
                                        <br></br>
                                        <br></br>
                                        En otras palabras, cuando el pediatra le pregunte con qué frecuencia mama su bebé, le puede contestar "aproximadamente cada dos horas" si empieza a amamantarlo a las 6 de la mañana, la siguiente toma empieza en torno a las 8, la otra en torno a las 10 y así sucesivamente.</p>

                                    <br></br>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header><strong>¿Cuándo debería ALTERNAR los pechos?</strong></Accordion.Header>
                                <Accordion.Body className="bodyAcor">
                                    <center>
                                        <ReactPlayer
                                            url="https://res.cloudinary.com/dhu8kck7f/video/upload/v1652165849/relajacion/qzzkrkkivpha97urhwnm.mp4"
                                            width="80%"
                                            height="350px"
                                            controls
                                        />
                                    </center>
                                    <br></br>
                                    <p>Alterne entre ambos pechos y procure que su bebé mame aproximadamente la misma cantidad de tiempo de cada uno de ellos cada día. Esto ayuda a mantener su producción de leche en ambos pechos y previene la dolorosa congestión mamaria (cuando sus pechos están llenos o saturados de leche).
                                        <br></br>
                                        <br></br>
                                        Puede cambiar de pecho a media toma e ir alternando qué pecho que le ofrece antes en tomas consecutivas. ¿No recuerda qué pecho le ha ofrecido primero a su bebé en la última toma? Le puede ayudar el uso de recordatorios, como ponerse un alfiler de seguridad o atarse una pequeña cinta en la tira del sostén del pecho que ha ofrecido a su bebé en segundo lugar para ofrecérselo en primer lugar en la siguiente toma. O bien, anóteselo en una libreta o use una aplicación de lactancia materna para llevar esos registros.
                                        <br></br>
                                        <br></br>
                                        Es posible que su bebé prefiera mamar de ambos pechos en cada toma o que prefiera mamar solamente de un pecho en cada toma. En este segundo caso, ofrézcale el otro pecho en la próxima toma. Sigan la pauta que mejor les funcione y que les resulte más cómoda a ambos.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>



                            <Accordion.Item eventKey="4">
                                <Accordion.Header><strong>¿Frecuencia para hacer ERUCTAR al bebé?</strong></Accordion.Header>
                                <Accordion.Body className="bodyAcor">
                                    <br></br>
                                    <center>
                                        <ReactPlayer
                                            url="https://res.cloudinary.com/dhu8kck7f/video/upload/v1652164988/relajacion/dfgybbw2rcyeuh8hgvsz.mp4"
                                            width="80%"
                                            height="auto"
                                            controls
                                        />
                                    </center>
                                    <br></br>
                                    <p>
                                        Si le ofrece al bebé ambos pechos en cada toma, intente hacerlo eructar cuando lo cambie de pecho y también al final de la toma. A menudo, el mismo movimiento de cambiar al bebé de pecho puede hacerlo eructar.
                                        <br></br>
                                        <br></br>
                                        Algunos bebés necesitan eructar más y otros menos, y esto puede variar de una toma a otra.                            <br></br>
                                        <br></br>
                                        <br></br>
                                        Si su bebé regurgita mucho, trate de hacerlo eructar más a menudo. Aunque es normal que los bebés regurgiten una pequeña cantidad de leche después las tomas o mientras eructan, un bebé no debe vomitar después de mamar. Si su bebé vomita toda la toma o gran parte de ella, podría haber un problema que requeriría atención médica. Si a usted le preocupa que su hijo regurgite demasiado, llame al médico.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header><strong>¿QUÉ ES UN BANCO DE LECHE?</strong></Accordion.Header>
                                <Accordion.Body className="bodyAcor">
                                    <br></br>
                                    <center>
                                        <ReactPlayer
                                            url="https://res.cloudinary.com/dhu8kck7f/video/upload/v1652168118/relajacion/oxqu0yize6qduoxpcvxu.mp4"
                                            width="80%"
                                            height="auto"
                                            controls
                                        />
                                    </center>
                                    <br></br>
                                    <p>¿Qué es un banco de leche?; es una reserva de leche que la madre puede hacer, según sus planes y necesidades, en su casa extrayéndose leche ella misma y almacenándola en su propio frigorífico”.
                                        <br></br>
                                        <br></br>
                                        Ya sea para volver al trabajo, porque tienes que estar unos días alejada de tu bebé o
                                        por otros motivos; puedes necesitar crear un banco de leche para poder dejar leche para
                                        tu bebé en tu ausencia Son muchas las dudas que surgen así que aquí te dejo paso
                                        por paso toda la información y trucos para conseguirlo.
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <h3>¿Cuándo debo empezar?</h3>
                                    <br></br>
                                    <br></br>
                                    <p>
                                        Lo ideal es <strong>empezar entre un mes y 15 días antes de la fecha señalada.</strong> Dependiendo de la cantidad de leche que hayas calculado que vas a necesitar. Así mismo, te tendrás que familiarizar con el sacaleches, comprobar que la copa que vas a usar sea la adecuada e ir viendo si te surgen dificultades en la extracción o consigues la leche con facilidad.
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <h3>¿Qué dificultades puedo tener?</h3>
                                    <br></br>
                                    <br></br>
                                    <p>
                                        La principal es que, <strong>por muy bueno que sea el sacaleches nunca es tan efectivo como un
                                            bebé.</strong> A un bebé le resulta muy simple conseguir estimular el pecho y conseguir una eyección de leche. A tu cuerpo es probable que no le resulte tan fácil responder a la estimulación del sacaleches.
                                        <br></br>
                                        <br></br>
                                        Es por esta razón que muchas veces cuando intentas crear el banco el sacaleches solo consigue extraer el sobrante de leche que hay en el pecho.
                                        <br></br>
                                        <br></br>
                                        Es necesario practicar y encontrar trucos que nos ayuden a conseguir la eyección: oler ropa del bebé o al bebé, grabar un audio del bebé llorando e ir reproduciendo mientras intentamos sacar la leche, pensar en el bebé, realizar un masaje sobre el pecho el pezón y la areola… Todos estos estímulos pueden desencadenar el reflejo de eyección de la leche y nos van a facilitar la tarea.
                                        <br></br>
                                        <br></br>
                                        Otra cosa a tener en cuenta es que a habitualmente es más fácil sacarse leche antes de los tres meses de vida del bebé que a posteriori. Esto pasa porque durante los primeros tres meses, la glándula aún no ha regulado bien la oferta y la demanda, y dispone de un mayor excedente de leche. Llegados a los 3 meses, la producción se regula y se ajusta, lo que puede complicar conseguir esa leche extra que nos hace falta para nuestro banco de leche casero.
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <h3>¿Cuánta leche tengo que conseguir?</h3>
                                    <br></br>
                                    <br></br>
                                    <p>
                                        Deberás contar las tomas en las que te vas a ausentar y contar que cada una de ellas debe estar entre los 50 y los 100 ml (aproximadamente entre 1,50 y 3 oz)
                                        <br></br>
                                        <br></br>
                                        Si el banco de leche lo quieres hacer para simplemente disponer de una reserva de leche, la cantidad recomendada estará entre los 300 y los 500 ml (aproximadamente entre 10 y 17 oz).
                                        <br></br>
                                        <br></br>
                                        Ten en cuenta que <strong>es mejor congelar la leche en cantidades
                                            pequeñas para no tener que desechar la leche.</strong>
                                        <br></br>
                                        <br></br>
                                        Cuando ofreces la leche extraída por primera vez a un bebé es altamente probable que quiera una cantidad muy pequeña. Si congelas leche en grandes volúmenes te verás obligada a descongelar mucha cantidad de leche y, una vez descongelada, la leche aguanta 24h sin manipular. En el caso de que el bebé la haya tomado parcialmente  debes desecharla, si no la ha tomado y la temperatura ambiental no es superior a los 25Cº  puedes ofrecer en la siguiente toma sin volver a calentara.
                                        <br></br>
                                        <br></br>
                                        Así que de cara a que sea más fácil descongelar y ofrecer la leche, tener la precaución de almacenar poca leche en cada recipiente es mucho más práctico.
                                        <br></br>
                                        <br></br>
                                        <h3>¿En qué momento me saco leche?</h3>
                                        <br></br>
                                        <br></br>
                                        <strong>Te puedes sacar la leche en cualquier momento del día o de la noche.</strong>
                                        Normalmente, es mucho más simple hacerlo por la mañana cuando los bebés suelen estar más relajados y maman menos.
                                        <br></br>
                                        <br></br>
                                        Por la tarde y cuando entran en la hora bruja intentar sacarse leche puede ser muy complicado. Así que busca el momento que mejor te vaya para hacerlo: por la mañana, solo de un pecho, muchas veces a lo largo del día, en alguna toma nocturna, una hora después de que el bebé haya mamado, antes de que mame…
                                    </p>

                                    <br></br>
                                    <br></br>
                                    <h3>Si me saco leche para el banco, ¿voy a tener leche para mi bebé?</h3>
                                    <br></br>
                                    <br></br>
                                    <p>
                                        Sí, la glándula y la producción de leche funcionan al contrario de una tarjeta de crédito. Cuando sacas dinero con una tarjeta, la cantidad se descuenta de lo que tienes. Cuando del pecho sacas más y más leche, <strong>el cuerpo entiende que el bebé se queda corto de leche, así que aumenta la producción.</strong>
                                        <br></br>
                                        <br></br>
                                        Puedes incluso sacarte leche antes de que el bebé mame si así te resulta más fácil. Para los sacaleches, como te decía antes, les resulta complicado generar un reflejo de eyección pero el bebé es capaz de producirlo en escasos minutos. Así que te puedes sacar leche antes de que mame, si notas el pecho cargado, y después ponerlo a mamar tranquilamente. Él se encargará de todo. A veces protestan un poco al no encontrar la leche al momento, pero tan solo es cuestión de estar tranquila y esperar unos minutos a que la estimulación ponga en marcha todo el proceso.
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <h3>¿En qué recipientes puedes congelar la leche?</h3>
                                    <br></br>
                                    <br></br>
                                    <p>
                                        Puedes congelar la leche ya sea en recipientes específicos o recipientes de plástico o cristal que tengas por casa.
                                        <br></br>
                                        <br></br>
                                        Si son de plástico, tan solo debes verificar que son aptos para contener alimentos. Lo sabrás porque tienen una marca en forma de un tenedor y una copa.
                                        <br></br>
                                        <br></br>
                                        Si son de cristal, deberás controlar el deterioro de las roscas metálicas y sustituirlas en el momento en que presenten óxido.
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <h3>¿Cuánto tiempo aguanta la leche en la nevera?</h3>
                                    <br></br>
                                    <br></br>
                                    <p>
                                        La leche en la nevera aguanta, <strong>en la parte más fría de la nevera, entre 3 y 8 días </strong>(tiempo óptimo: 5 días) sin que se malmeta. Aunque siempre que sea posible, es mejor que congeles la leche de las mismas 24h.
                                        <br></br>
                                        <br></br>
                                        Puedes ir conservando la leche en la nevera hasta conseguir los 50-75ml óptimos para congelar. Una vez los tengas acumulados, la puedes congelar.
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <h3>¿Y en el congelador?</h3>
                                    <br></br>
                                    <br></br>
                                    <p>
                                        La leche materna la puedes conservar congelada <strong>a -20 ºC unos 6 meses.</strong>
                                        <br></br>
                                        <br></br>
                                        La leche no se pone mala pero sí queda “quemada” por el frío. Podrás observar que se forman pequeñas estrías en la leche y que aparece hielo dentro del recipiente. Para garantizar la mejor conservación y evitar que la leche se estropee, asegúrate de marcar siempre los recipientes con la fecha de extracción y siempre que la necesites, usa la leche más antigua.
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <h3>¿La composición de la leche que voy a congelar le servirá a mi bebé dentro de unos meses?</h3>
                                    <br></br>
                                    <br></br>
                                    Es cierto que la composición de la leche materna va variando a medida que el bebé crece, es una hecho maravilloso, ya que no hay otro alimento que se adapte a las necesidades del bebé. A pesar de estos pequeños cambios, no debes preocuparte si ofreces a tu bebé leche extraída unos meses atrás, esta seguirá alimentando adecuadamente a tu pequeño.

                                </Accordion.Body>
                            </Accordion.Item>



                            <Accordion.Item eventKey="6">
                                <Accordion.Header><strong>¿PUEDO LACTAR SI TENGO LOS PEZONES INVERTIDOS?</strong></Accordion.Header>
                                <Accordion.Body className="bodyAcor">
                                    <br></br>
                                    <center>
                                        <ReactPlayer
                                            url="https://res.cloudinary.com/dhu8kck7f/video/upload/v1652166000/relajacion/fu758kxjflpewaqytwlk.mp4"
                                            width="80%"
                                            height="auto"
                                            controls
                                        />
                                    </center>
                                    <br></br>
                                    <p>
                                        Preparación de los pezones invertidos o planos durante el embarazo
                                        <br></br>
                                        <br></br>
                                        Es posible que notes que, a medida que tus pechos van cambiando durante el embarazo, los pezones empiezan a sobresalir más por sí solos. Si no es así y te preocupa que su forma pueda dificultar la lactancia, puedes utilizar formadores de pezones. Estos discos de silicona, blandos y flexibles, se colocan de forma discreta en el interior del sujetador y aplican una ligera presión sobre los pezones para ayudarles a salir hacia fuera.
                                        <br></br>
                                        <br></br>
                                        Si tu bebé es capaz de succionar tu dedo sin problemas pero no muestra el mismo interés por tu pecho, puede que tu pezón no le llegue al paladar cuando se agarra al pecho. Puede que se frustre, se aparte y empiece a llorar, o incluso que se quede dormido en tu pecho. Si sucede esto, solicita a un especialista o consultora de lactancia que compruebe su agarre.                            <br></br>
                                        <br></br>
                                        <br></br>
                                        Hay varias técnicas que puedes emplear justo antes de cada toma para dar forma a tus pezones y facilitar el agarre del bebé. Sioned sugiere lo siguiente:
                                        <br></br>
                                        <br></br>
                                        <ul>
                                            <li>Girar el pezón con los dedos pulgar e índice para hacer que salga;</li>
                                            <br></br>
                                            <li>Comprimir el pecho justo por debajo de la areola con los dedos en forma de V o de C para hacer que el pezón salga hacia fuera;</li>
                                            <br></br>
                                            <li>Pasar brevemente una compresa fría o un cubito de hielo por el pezón para ponerlo erecto;</li>
                                            <br></br>
                                            <li>Extraer leche con la mano o utilizar un extractor de leche durante un par de minutos antes de la toma para sacar el pezón.</li>
                                        </ul>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="7">
                                <Accordion.Header><strong>TÉCNICAS DE SUPLEMENTACIÓN</strong></Accordion.Header>
                                <Accordion.Body className="bodyAcor">
                                    <center>
                                        <ReactPlayer
                                            url="https://res.cloudinary.com/dhu8kck7f/video/upload/v1652164147/relajacion/ppbmciietfx4mgma6dud.mp4"
                                            width="80%"
                                            height="auto"
                                            controls
                                        />
                                    </center>
                                    <br></br>
                                    <p>
                                        Durante los primeros meses de vida de un niño la mejor alimentación es la leche materna. El agarre espontáneo del bebé al pecho materno es la situación ideal. Cuando esto no es posible, se puede recurrir a técnicas que permitan alimentar al niño sin interferir con el agarre espontáneo.
                                        <br></br>
                                        <br></br>
                                        El biberón, por tener distinta forma de succión que la lactancia materna, puede generar una confusión en el bebé, por este motivo se recomiendan las técnicas que se describen a continuación.
                                        <br></br>
                                        <br></br>
                                        <h3>¿Cuándo están indicadas estas técnicas de suplementación para mi bebé?</h3>
                                        <br></br>

                                        <ul>
                                            <li>Cuando el recién nacido no es capaz de succionar de forma eficaz, por ejemplo los bebés prematuros.</li>
                                            <br></br>
                                            <li>Cuando se queda dormido en la toma no consiguiendo suficiente paso de leche de la madre al niño.</li>
                                            <br></br>
                                            <li>Pérdida de peso de más de un 10% durante los primeros días o problemas en la instauración de la lactancia (subida de la leche de forma tardía, grietas en pezón, etc.).</li>
                                            <br></br>
                                            <li>Por problemas de agarre al pecho, enfermedades que dificulten el agarre espontáneo como el paladar hendido o el frenillo lingual corto, etc.</li>
                                            <br></br>
                                            <li>Separación madre-hijo.</li>
                                        </ul>

                                        <br></br>
                                        <br></br>
                                        <h3>Técnica Dedo-Jeringa</h3>
                                        <br></br>
                                        <br></br>

                                        <ul>
                                            <li>Material necesario: jeringa desechable de 10 ml</li>
                                            <br></br>
                                            <li>Se deben lavar las manos y el material con agua y jabón</li>
                                            <br></br>
                                            <li>La persona que realiza la técnica debe estar sentada, con los pies algo más elevados que la cadera y colocar al bebé incorporado entre sus piernas, de frente</li>
                                            <br></br>
                                            <li>Antes de introducir la jeringa se debe estimular el paladar con el dedo, de elección el meñique por su tamaño menor, haciendo movimientos de afuera a dentro. No se debe sobrepasar el primer tercio de la lengua para no provocar náuseas</li>
                                            <br></br>
                                            <li><strong>La jeringa se mete por una de las dos comisuras labiales y no por el centro de la boca, de esa manera disminuye la posibilidad de atragantamiento</strong></li>
                                            <br></br>
                                            <li>Si se prefiere, se puede añadir una sonda flexible a la jeringa, con ella se facilita la introducción en la comisura y la leche llega más atrás en la boca</li>
                                            <br></br>
                                            <li>Cuando el bebé inicia la succión se aprieta ligeramente el émbolo y se espera a ver cómo succiona y traga, después, él solo con su succión lo bajará</li>
                                            <br></br>
                                            <li>Una vez acabada la toma, la jeringa y la sonda deben ser lavadas con agua y jabón para el siguiente uso, no siendo necesario esterilizarlas</li>
                                        </ul>

                                        <br></br>
                                        <br></br>
                                        <strong>Ventajas:</strong> es útil en bebés dormidos o con succión débil, no derrama mucha cantidad de leche.
                                        <br></br>
                                        <br></br>
                                        <strong>Inconvenientes:</strong>Hay que utilizar jeringas de 10 ml (jeringas de mayor capacidad tienen mas resistencia para la succión del bebé), el volumen administrado es bajo por lo que, si el niño es mayor, hay que recargar la jeringa varias veces, son necesarias las dos manos no pudiendo sujetar al bebé con ellas, debe ser usada de forma transitoria para evitar que el bebé se acostumbre a ella dificultando el enganche al pecho.

                                        <br></br>
                                        <br></br>
                                        <h3>Técnica Vaso</h3>
                                        <br></br>
                                        <br></br>

                                        <ul>
                                            <li><strong>Material necesario:</strong>aunque existen <strong>vasos comercializados </strong> para la técnica, cualquier taza/vaso pequeño sirve</li>
                                            <br></br>
                                            <li>Antes de realizarlo se deben lavar las manos y la taza con agua y jabón</li>
                                            <br></br>
                                            <li>El lactante debe estar incorporado, bien en el regazo del cuidador o de frente a él</li>
                                            <br></br>
                                            <li>Se debe apoyar la taza/vaso sobre el labio inferior del bebé y acercar la leche a la boca sin dejar que se vierta en ella para evitar atragantamientos. El bebé debe sacar la lengua y “lamer” la leche</li>
                                        </ul>

                                        <br></br>
                                        <br></br>
                                        <strong>Ventajas:</strong> es una técnica higiénica, barata y es la que menos interfiere con la lactancia materna.
                                        <br></br>
                                        <br></br>
                                        <strong>Inconvenientes:</strong> es posible que se derrame mayor contenido de leche.

                                        <br></br>
                                        <br></br>
                                        <h3>Alimentación con cuchara</h3>
                                        <br></br>
                                        La técnica es similar a la anterior pero usando una cuchara o un recipiente-cuchara comercializado. Es válida para pequeños volúmenes y con posible derrame de contenido.
                                        <br></br>
                                        <br></br>

                                        <h3>Relactador</h3>
                                        <br></br>
                                        <br></br>
                                        <ul>
                                            <li>Material necesario: <strong>un relactador es un recipiente que la madre cuelga al cuello, del cual salen dos sondas flexibles que se pegan cerca del pecho</strong> dejando la punta de la sonda en el extremo de pezón, la sonda situada en la mama donde el bebé no se agarra debe estar pinzada para no derramar contenido</li>
                                            <br></br>
                                            <li>La sonda debe entrar en la parte lateral de la boca del bebé, con cuidado de no introducirla demasiado para no provocarle lesiones en la boca</li>
                                            <br></br>
                                            <li>Cuando el bebé mama del pecho, succiona también de la sonda (ya despinzada), de forma que permite suplementar a la vez que existe un agarre espontáneo</li>
                                        </ul>
                                        <br></br>
                                        <br></br>
                                        <strong>Ventajas:</strong> permite suplementar a largo plazo, favorece el agarre espontáneo y la formación del vinculo entre la madre y el bebé. También se ahorra tiempo, pues se realiza a la vez que el niño lacta.
                                        <br></br>
                                        <br></br>
                                        <strong>Inconvenientes:</strong> es más costoso y menos higiénico que las técnicas anteriores, existe el peligro de que el bebé se acostumbre y consiga mas leche del relactador que de la mama.

                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="8">
                                <Accordion.Header><strong>¿Durante CUÁNTO TIEMPO debería seguir AMAMANTANDO a mi bebé?</strong></Accordion.Header>
                                <Accordion.Body className="bodyAcor">
                                    <center>
                                        <ReactPlayer
                                            url="https://res.cloudinary.com/dhu8kck7f/video/upload/v1652166511/relajacion/sctxqygdauad2jwxdrkn.mp4"
                                            width="80%"
                                            height="auto"
                                            controls
                                        />
                                    </center>
                                    <br></br>
                                    <p>
                                        Se trata de una decisión personal. Los expertos recomiendan que los bebés se alimenten exclusivamente de leche materna (sin tomar leche de fórmula, otro tipo de leche que no sea materna, agua, jugo ni comida sólida) hasta que cumplan 6 meses. Puede alargar la lactancia materna hasta los 12 meses (y más) si funciona tanto para usted como para su bebé.
                                        <br></br>
                                        <br></br>
                                        La lactancia materna resulta muy beneficiosa tanto para la madre como para el bebé. Los estudios indican que la lactancia materna puede reducir las probabilidades de que un bebé tenga diarrea, infecciones de oído y meningitis bacteriana, o reducir la gravedad de sus síntomas. La lactancia materna también protege a los bebés del síndrome de muerte súbita del lactante (SMSL), la diabetes, la obesidad, y el asma.
                                        <br></br>
                                        <br></br>

                                        En las madres, la lactancia materna quema calorías y ayuda a que el útero se encoja. De hecho, las madres que amamantan a sus bebés suelen volver a tener la figura y el peso que tenían antes de quedarse embarazadas más deprisa que las que optan por la lactancia artificial. La lactancia materna también reduce el riesgo de las madres a padecer enfermedades como:
                                        <br></br>
                                        <br></br>
                                        <ul>
                                            <li>Cáncer de pecho</li>
                                            <br></br>
                                            <li>Hipertensión arterial</li>
                                            <br></br>
                                            <li>Diabetes</li>
                                            <br></br>
                                            <li>Enfermedades cardíacas</li>
                                        </ul>
                                        <br></br>

                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>

                    
                    <Col sm={3} className="divenfermecomen">
                    <br></br>
                    <br></br>
                        <div className="divH3ComentEnfer">
                            <h3>Comentarios</h3>
                        </div>
                        <AddComentariosLactancia />

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Lactancia