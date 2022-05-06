import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../Hooks/useForm'
import Swal from 'sweetalert2';
import { Button, Form, Modal } from 'react-bootstrap';
import { editTODOAsync } from '../redux/actions/todoActions';

import { DatePicker, DateTimePicker, TimePicker } from '@material-ui/pickers'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Editar = ({ modal, setModal }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false)
        setModal(false)
    };

    const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(modal.Fecha);

    const [values, handleInputChange] = useForm({
        tarea: modal.tarea,
        id: modal.id,
        active: modal.active

    })

    const { tarea, id, active } = values

    const handleSubmit = (e) => {
        e.preventDefault()
         console.log(values)
        dispatch(editTODOAsync(
            id, 
            {
                id: id,
                tarea: tarea,
                active: active,
                Fecha: fechaSeleccionada.toString(),
            
            }))
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

                            <Form onSubmit={() => handleSubmit()}>
                                <Form.Label>Nombre de la Tarea</Form.Label>
                                <Form.Control className="forContr" type="text" name="tarea" required placeholder="Nombre de la Tarea" value={tarea} onChange={handleInputChange} />

                                <br></br>

                                <Form.Label>Fecha y Hora</Form.Label>
                                <br></br>
                                <DateTimePicker value={fechaSeleccionada} onChange={cambiarFechaSeleccionada} />

                  
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