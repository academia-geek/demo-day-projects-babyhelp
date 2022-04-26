import React from 'react'
import { Form } from 'react-bootstrap'

const Email = () => {
    return (
        <div className="contePrincipalEmail" id="contacto">
            <div className="divEmail" >
                <h3>¿Deseas comentarnos algo?</h3>
                <br></br>

                <div className="divh3">
                    <p>Baby-Help esta dispuesto a escucharte! escribénos y te responderemos a la brevedad posible</p>
                </div>
                <br></br>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className="inputEmail" type="email" placeholder="email@example.com" />
                        <button className="btnEmail"> Enviar Mensaje</button>
                    </Form.Group>
                </Form>


            </div>
        </div>
    )
}

export default Email