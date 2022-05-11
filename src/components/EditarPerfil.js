import React from 'react'
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { FileUp } from '../helpers/FileUp';
import { useForm } from '../Hooks/useForm';
import { editperfilAsync, listperfilAsyn } from '../redux/actions/actionPerfil';

const EditarPerfil = ({ modal, setModal }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false)
        setModal(false)
    }

    const [values, handleInputChange] = useForm({
        nombremama: modal.nombremama,
        nombrebebe: modal.nombrebebe,
        semanas: modal.semanas,
        foto: modal.foto,
        id: modal.id

    })

    const { nombremama, nombrebebe, semanas, foto, id } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        //  console.log(values)
        dispatch(editperfilAsync(id, values))
        dispatch(listperfilAsyn())

        console.log(values)
        handleClose()

    }


    let timerInterval;
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        console.log(file)
        //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudi a la foto
        FileUp(file)
            .then(resp => {
                Swal.fire({
                    title: 'Cargando Imagen!',
                    html: 'Espera <b></b> milisegundos.',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })

                values.foto = resp
                console.log(resp)
            })
            .catch(error => {
                console.warn(error)
            })
    }

    return (
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Perfil</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={() => handleSubmit()}>
                            <Form.Label>Nombre Mamá</Form.Label>
                            <Form.Control type="text" required name="nombremama" placeholder="Ingresa tu Nombre" value={nombremama} onChange={handleInputChange} />


                            <Form.Label>Nombre Bebé</Form.Label>
                            <Form.Control type="text" required name="nombrebebe" placeholder="Ingresa el Nombre del Bebé" value={nombrebebe} onChange={handleInputChange} />

                            <Form.Label>Semanas del Bebé</Form.Label>
                            <Form.Control type="number" required name="semanas" placeholder="Ingresa Semanas del Bebé en NÚMERO" value={semanas} onChange={handleInputChange} />

                            <Form.Label>Foto de Perfil</Form.Label>
                            <Form.Control type="file" required name="foto" placeholder="Ingresa Foto.jpg" onChange={handleFileChange} />



                            <br></br>
                            <br></br>
                            
                            <Button type="submit" className="btnedi" onClick={handleSubmit}>
                                Guardar
                            </Button>
                        </Form>

                    </Modal.Body>


                </Modal>
            </>
        </div>
    );
}

export default EditarPerfil