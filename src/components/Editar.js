import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../Hooks/useForm'
import Swal from 'sweetalert2';
import { Button, Form, Modal } from 'react-bootstrap';
import { editTODOAsync } from '../redux/actions/todoActions';


const Editar = ({ modal, setModal }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false)
        setModal(false)
    };

    const [values, handleInputChange] = useForm({
        tarea: modal.tarea,
        id: modal.id,
        active: modal.active

    })

    const { tarea, id, active } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        //  console.log(values)
        dispatch(editTODOAsync(id, values))
        Swal.fire(
            'Tarea Editada Correctamente!'
        )

        console.log(values)
        handleClose()

    }


    return (
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Tarea</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="inputTodo">

                            <Form onSubmit={handleSubmit}>
                                <div className='divInput'>
                                    <input className="control"
                                        size="md"
                                        type="text"
                                        placeholder="Crear una nueva tarea..."
                                        name='tarea'
                                        onChange={handleInputChange}
                                        value={tarea} />

                                </div>
                            </Form>
                        </div>
                        <center>
                            <Button variant="secondary" onClick={handleSubmit}>Guardar Tarea Editada</Button>
                        </center>
                    </Modal.Body>


                </Modal>
            </>
        </div>

    );
}

export default Editar