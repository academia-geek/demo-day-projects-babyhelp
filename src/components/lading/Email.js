import React from 'react'
import { Form } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Email = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1zjx49k', 'template_ci800fk', e.target, 'CnzTFWCiU6i4j_Nzh')
            .then(response => (
                Swal.fire({
                    title: 'Mensaje enviado Correctamente, Pronto te daremos respuesta',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            )
            )
            .catch(err => console.log(err))

        Form.reset()

    }


    return (
        <div className="contePrincipalEmail" id="contacto">
            <div className="divEmail" >
                <h3>¿Deseas comentarnos algo?</h3>
                <br></br>

                <div className="divh3">
                    <p>Baby-Help esta dispuesto a escucharte! escribénos y te responderemos a la brevedad posible</p>
                </div>
                <br></br>

                <Form onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className="inputEmail" name='user_name' type="text" placeholder="Nombre" />
                        <br></br>
                        <Form.Control className="inputEmail" name='user_email' type="email" placeholder="email@example.com" />
                        <br></br>
                        <Form.Control className="inputEmailtextarea" as="textarea" rows={3} name='user_message' placeholder="Qué nos quieres decir" />
                        <br></br>
                        <button className="btnEmail"> Enviar Mensaje</button>
                    </Form.Group>
                </Form>


            </div>
        </div>
    )
}

export default Email