import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/consejosAprende.css'
import Curiosidades from './Curiosidades'

const AprendeMas = () => {
  return (

    <>
<br></br>
<br></br>

      <div className="container-fluid divContenConsejos">

        <Link to="/" className="linkatras">
          <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="9%" />
        </Link>
        <br></br>

        <div className="divConsejos">
          <h1>Consejos que pueden ayudarte en cada etapa del desarrollo de tu bebé</h1>
        </div>

        <div className="divPinicial">
          <p>¿Sabías que hasta un 75% de cada comida sirve para desarrollar el cerebro de tu bebé? ¿O que el 80% del cerebro de tu bebé se forma antes de los tres años?</p>

          <p>Con cada abrazo y cada beso, con cada alimento nutritivo y cada juego compartido, ayudas a desarrollar el cerebro de tu bebé.</p>

          <p>Estos son algunos consejos que te ayudarán a concederle a tu hijo el mejor comienzo en la vida:</p>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div className="contImgMeses" id="inicio">
          <Row>
            <Col sm={4}>
              <a href="#recien" className="aImgMeses">
                <div>
                  <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651809430/xwtlruqusuirbf0fftda.png" width="40%" />
                </div>
                <br></br>
                <p>Consejos sobre bebés: recién nacidos</p>
              </a>
            </Col>

            <Col sm={4}>
              <a href="#unoSeisMeses" className="aImgMeses">
                <div>
                  <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651809526/rwsyrxdtusisa1h7fmsy.png" width="40%" />
                </div>
                <br></br>
                <p>Consejos sobre bebés: de 1-6 meses</p>
              </a>
            </Col>

            <Col sm={4}>
              <a href="#seisNueveMeses" className="aImgMeses">
                <div>
                  <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651809531/vzobnniuexainco90f2m.png" width="40%" />
                </div>
                <br></br>
                <p>Consejos sobre bebés: de 6-9 meses</p>
              </a>
            </Col>
          </Row>


          <Row>
            <Col sm={4}>
              <a href="#nueveDoceMeses" className="aImgMeses">
                <div>
                  <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651809536/qn84lahoefriyzkv0weg.png" width="40%" />
                </div>
                <br></br>
                <p>Consejos sobre bebés: de 9-12 meses</p>
              </a>
            </Col>

            <Col sm={4}>
              <a href="#unoDosAños" className="aImgMeses">
                <div>
                  <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651810562/j9kzkeoesnxxpjuunhpm.png" width="40%" />
                </div>
                <br></br>
                <p>Consejos sobre bebés: de 1-2 años</p>
              </a>
            </Col>

            <Col sm={4}>
              <a href="#masDosAños" className="aImgMeses">
                <div>
                  <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651810565/mn2bjtiijjgqpr7helek.png" width="40%" />
                </div>
                <br></br>
                <p>Consejos sobre bebés: de 2+ años</p>
              </a>
            </Col>
          </Row>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="divInfoSabias">
          <div id="recien" className="divrecien">
            <h3 className="h3aprendemas">Bebés recién nacidos</h3>
            <br></br>

            <center>
              <div>
                <img src="https://www.babysitio.com/wp-content/uploads/2016/02/controles-del-recien-nacido.jpg"  width="60%" className="imgSabiasBb" />
              </div>
            </center>

            <hr></hr>
            <p className="pSabias">
              ¿Sabías qué? </p>
            <p className="pDescripSabias">
              En solo unos días, los bebés pueden comenzar a sonreír cuando alguien les sonríe.
            </p>
            <hr></hr>

            <br></br>
            <br></br>

            <ul>
              <li><strong>Encuentra formas para que tu bebé vea, oiga, se mueva libremente y te toque.</strong>Verás que los brazos y las piernas de tu bebé se mueven de forma descoordinada. Poco a poco, tu bebé aprenderá a controlar sus movimientos.</li>
              <li><strong>Mira a tu bebé a los ojos y sonríele cuando te sonría</strong>Verás que tu bebé reacciona de forma positiva a tus movimientos, gestos y expresiones faciales.</li>
              <li><strong>Háblale con un tono suave y utilizando su “idioma”.</strong>Tanto el padre, como la madre y otros cuidadores deberían comunicarse con el recién nacido. Notarás que te oye y, pronto, comenzará a memorizar y a copiar tus palabras.</li>
              <li><strong>Cambia gradualmente el sonido de tu voz.</strong>Habla más lento y más rápido, más alto y más bajo, más fuerte y más suavemente. Observarás la reacción de tu bebé en su rostro y en su cuerpo y notarás que interactúa contigo.</li>
              <li><strong>Coloca a tu bebé boca abajo y agita un sonajero o una campana delante de él o ella.</strong>Eleva un poco el sonajero y anima a tu bebé a que levante la cabeza y los hombros para ver cómo se mueve. Al hacerlo, tu bebé seguirá el sonajero con la mirada y aprenderá a levantar la cabeza y los hombros.</li>
              <li><strong>Con cuidado, tranquiliza, acaricia y abraza a tu bebé.</strong>Lo verás reconfortado y feliz de sentirse acunado en tus brazos.</li>
              <li><strong>Mantén un contacto piel con piel con tu bebé.</strong>Sentir, oír y oler tu presencia le proporcionará una sensación de calma y seguridad.</li>
            </ul>
            <br></br>
            <a href="#inicio" className="pLinkVolverArriba">Volver Arriba</a>

          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div id="unoSeisMeses" className="divrecien">
            <h3 className="h3aprendemas">De uno a seis meses</h3>
            <br></br>

            <center>
              <div>
                <img src="https://www.eltiempo.com/abc_files/article_main/uploads/2017/10/11/59def2d900149.jpeg"  width="60%" className="imgSabiasBb" />
              </div>
            </center>

            <hr></hr>
            <p className="pSabias">
              ¿Sabías qué? </p>
            <p className="pDescripSabias">
              Los bebés de uno a tres meses ven mejor las cosas cuando están a 20 o 30 centímetros de distancia. Para cuando cumplen tres meses, tienen un rango de visión más amplio.
            </p>
            <hr></hr>

            <br></br>
            <br></br>

            <ul>
              <li><strong>Encuentra formas para que tu bebé vea, oiga, se mueva libremente y te toque.</strong> Poco a poco, tu bebé tomará confianza contigo.</li>
              <li><strong>Mueve con cuidado objetos coloridos para que tu bebé los vea y trate de alcanzarlos.</strong>Un juguete casero sencillo, como un sonajero, puede llamar la atención de tu bebé por el sonido que hace.</li>
              <li><strong>Sonríe y ríete con tu bebé.</strong>Pronto, verás que tu bebé te sonríe a ti también.</li>
              <li><strong>Háblale y copia sus sonidos o gestos.</strong>Verás que poco a poco fijará la mirada en tu rostro y tratará de imitar lo que haces.</li>
              <li><strong>Ayúdale a seguir un objeto.</strong>Cuando lo vea, muévelo lentamente de un lado a otro y de arriba abajo. Verás cómo trata de seguirlo con la mirada.</li>
              <li><strong>Anima a tu bebé a que trate de alcanzar un objeto seguro.</strong>Inténtalo con algo como un vaso de plástico. Verás cómo trata de agarrarlo o tocarlo.</li>
              <li><strong>Recorta imágenes sencillas de cosas, personas o animales que pueda conocer.</strong>Intenta mostrarle imágenes en las que haya montones de colores, texturas, escenas y caras diferentes. Habla sobre las imágenes mientras tu bebé las mira. Observarás cómo escucha lo que le explicas y participa a su manera.</li>
              <li><strong>Juega con tu bebé.</strong>Coloca a tu bebé boca abajo y acércale tus manos moviendo los dedos. Luego, hazle cosquillas de forma suave y rápida diciendo: “allá van mis dedos, allá van, cada vez más cerca, te atraparon”. Para cambiar el juego, acércate primero más rápido y luego más lento, o espera más o menos tiempo antes de hacerle cosquillas. Verás cómo muestra su disfrute riéndose o dando chillidos.</li>
            </ul>

            <br></br><a href="#inicio" className="pLinkVolverArriba">Volver Arriba</a>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>


          <div id="seisNueveMeses" className="divrecien">
            <h3 className="h3aprendemas">De seis a nueve meses</h3>
            <br></br>


            <center>
              <div>
                <img src="https://madreshoy.com/wp-content/uploads/2012/10/Juegos-estimulantes-para-bebes-de-6-a-9-meses-2.jpg"  width="60%" className="imgSabiasBb" />
              </div>
            </center>

            <hr></hr>
            <p className="pSabias">
              ¿Sabías qué? </p>
            <p className="pDescripSabias">
              A los seis meses, tu bebé puede comer de todo excepto miel, un alimento que no debe probar hasta cumplir un año.
            </p>
            <hr></hr>

            <br></br>
            <br></br>

            <ul>
              <li><strong>Cuando le hagas una pregunta, dale tiempo de sobra para responder.</strong> Cuenta hasta 10 mentalmente. Si no responde, hazlo tú mismo. A la próxima, intenta hacerle una pregunta más fácil.</li>
              <li><strong>Pronuncia el nombre de tu bebé todo lo posible.</strong>Mirará para ver quién lo está diciendo y tratará de llegar hasta esa persona.</li>
              <li><strong>No hables ni cantes demasiado fuerte,</strong>ya que los bebés pueden asustarse.</li>
              <li><strong>Sonríe todo lo posible</strong> y transmite a tu bebé comodidad y confianza.</li>
              <li><strong>Dale a tu hijo objetos limpios, seguros y coloridos,</strong>como cucharas de madera o boles de plástico a fin de que los utilice y los toque, les dé golpes o los tire.</li>
              <li><strong>Crea libros con fotos, puzles, marionetas y muñecas sencillas</strong>para desarrollar la curiosidad de tu bebé y ayudarlo a aprender cosas nuevas. Para hacer un puzle sencillo, solo tienes que pegar una imagen en un trozo de cartón u otro material y cortarlo en distintas piezas.</li>
            </ul>

            <br></br><a href="#inicio" className="pLinkVolverArriba">Volver Arriba</a>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div id="nueveDoceMeses" className="divrecien">
            <h3 className="h3aprendemas">De nueve a 12 meses</h3>
            <br></br>

            <center>
              <div>
                <img src="https://e.rpp-noticias.io/xlarge/2019/11/27/402940_869358.jpg"  width="60%" className="imgSabiasBb" />
              </div>
            </center>

            <hr></hr>
            <p className="pSabias">
              ¿Sabías qué? </p>
            <p className="pDescripSabias">
              Para aumentar la autoestima y la confianza de los bebés, debes adoptar siempre un enfoque positivo en el proceso de aprendizaje de tu hijo. Intenta decir "sí", "bueno", "bien hecho" con más frecuencia, en lugar de "no", "malo", "no es bueno"..
            </p>
            <hr></hr>

            <br></br>
            <br></br>

            <ul>
              <li><strong>Juega al escondite con tu bebé</strong> y comprueba si sabe encontrar los objetos que tú escondes. Puedes esconder algo debajo de una manta y decir: “¿a dónde se ha ido?”, “¿puedes buscarlo?”. Verás cómo crece la curiosidad de tu hijo y su disposición para descubrir qué ha pasado con el objeto.</li>
              <li><strong>Indica a tu hijo el nombre de cosas y personas. </strong>Debería mostrar interés y, pronto, tratar de asociar palabras con objetos o personas.</li>
              <li><strong>Enseña a tu hijo a decir cosas con las manos, como “adiós”.</strong>ya que los bebés pueden asustarse.Pronto, tratará de imitarte y dirá “adiós” con la mano él solo, creando una asociación entre un movimiento y una expresión vocal.nfianza.</li>
              <li><strong>Señala los ojos, la nariz y la boca de un muñeco.</strong>Después de enseñarle una de esas partes en el muñeco, señala la misma en ti y en él. Toma la mano de tu bebé y haz que toque los ojos, la nariz y la boca de la muñeca y luego los tuyos y los suyos. Poco a poco, el bebé será capaz de memorizar e identificar esas palabras y relacionarlas con las partes de su cuerpo.</li>
            </ul>

            <br></br><a href="#inicio" className="pLinkVolverArriba">Volver Arriba</a>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div id="unoDosAños" className="divrecien">
            <h3 className="h3aprendemas">De uno a dos años</h3>
            <br></br>

            <center>
              <div>
                <img src="https://jugueteeducativo.org/wp-content/uploads/2018/11/Juguetes-educativos-para-ni%C3%B1os-de-1-a-2-a%C3%B1os-1024x525.jpg"  width="60%" className="imgSabiasBb" />
              </div>
            </center>

            <hr></hr>
            <p className="pSabias">
              ¿Sabías qué? </p>
            <p className="pDescripSabias">
              Los niños son especialmente felices cuando ven que ellos también hacen felices a los adultos que les rodean.
            </p>
            <hr></hr>

            <br></br>
            <br></br>

            <ul>
              <li><strong>Dale a tu hijo cosas que pueda meter en recipientes y luego sacar.</strong>Intentará sacarlas y volverlas a meter sin ayuda, lo cual es muy bueno para desarrollar habilidades de coordinación de ojos y manos.</li>
              <li><strong>Dale a tu hijo cosas para amontonar.</strong> Debería tratar de amontonar más cosas sin ayuda y luego tirarlas, o amontonarlas hasta que se caigan solas.</li>
              <li><strong>Hazle a tu hijo preguntas sencillas y responde a sus intentos de hablar.</strong>Debería estar dispuesto o dispuesta a interactuar respondiendo y/o haciendo más preguntas.</li>
              <li><strong>Intenta hablar con tu hijo sobre distintas realidades,</strong>como la naturaleza, imágenes y cosas de su entorno. El niño debería moverse y estar dispuesto a explorar el entorno que le rodea.</li>
              <li><strong>Observa lo que hace tu hijo y ponle nombre:</strong>“estás llenando la caja”. Le alegrará enseñarte lo que ha aprendido y ganará autoestima.</li>
              <li><strong>Juega con tu hijo y ofrécele ayuda:</strong>“hagámoslo juntos. Aquí hay más piedras que podemos meter en tu caja”. Esos descubrimientos deberían hacerle feliz y aportarle más seguridad.</li>
              <li><strong>Aprovecha cualquier oportunidad para entablar una conversación con tu hijo,</strong>también mientras come o lo bañas o mientras trabajas a su lado. Pronto, debería comenzar a entender lo que le dices y ser capaz de seguir indicaciones fáciles.</li>
              <li><strong>Convierte preguntas sencillas en juegos:</strong>“¿dónde está tu dedo del pie?” o “¿dónde está el pájaro?”. También pueden mirar imágenes y hablar sobre lo que ven. El niño debería mostrar cada vez más curiosidad y disposición para comunicarse acerca de lo que ve y oye.</li>
            </ul>

            <br></br><a href="#inicio" className="pLinkVolverArriba">Volver Arriba</a>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div id="masDosAños" className="divrecien">
            <h3 className="h3aprendemas">A partir de dos años</h3>
            <br></br>

            <center>
              <div>
                <img src="https://img.freepik.com/foto-gratis/nina-dos-anos-dibuja-colorea-suelo_87414-1002.jpg"  width="60%" className="imgSabiasBb" />
              </div>
            </center>

            <hr></hr>
            <p className="pSabias">
              ¿Sabías qué? </p>
            <p className="pDescripSabias">
              Los niños aprenden mejor cuando les enseñan a comportarse bien que cuando los castigan por haberse comportado mal.
            </p>
            <hr></hr>

            <br></br>
            <br></br>

            <ul>
              <li><strong>Hazle preguntas sencillas y escucha sus respuestas.</strong>Anima a tu hijo a hablar: “¿qué es esto?”, “¿dónde está la ventana?”, “¿qué pelota es más grande?”, “¿quieres la taza roja?”. Verás cómo crece su interés por interactuar contigo y responder a tus preguntas.</li>
              <li><strong>Léele historias a tu hijo y hazle preguntas sobre lo que se vea en el libro.</strong> Notarás que memoriza y trata de repetir lo que tú lees.</li>
              <li><strong>Ayúdalo a aprender a contar preguntando “cuántos” y cuenten cosas juntos.</strong>Al principio cometerá errores, pero aprenderá de repetir las cosas muchas veces.</li>
              <li><strong>Dale recortes de círculos y otras formas de colores para que los compare y los clasifique.</strong>Debería ponerse contento al tratar de clasificar cosas y aprenderá a unir y a establecer relaciones entre distintos objetos, colores y formas.</li>
            </ul>

            <br></br><a href="#inicio" className="pLinkVolverArriba">Volver Arriba</a>
          </div>

        </div>



        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <h2>Otros temas que te pueden interesar</h2>
        <br></br>
        <br></br>

        <div className="divCurioAprende">
          <Curiosidades />

        </div>

      </div >
    </>
  )
}

export default AprendeMas