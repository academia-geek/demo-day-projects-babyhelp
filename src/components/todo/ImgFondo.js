import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Table } from 'react-bootstrap'
// import Lista from './Lista'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { addTODOAsync, editTODOAsync, deleteTODOAsync, listTODOAsyn } from '../../redux/actions/todoActions';
import uuid from 'react-uuid'
import Swal from 'sweetalert2';
import Editar from '../Editar';
import '../../styles/todo.css'

import { DatePicker, DateTimePicker, TimePicker } from '@material-ui/pickers'
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Button, Form } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const ImgFondo = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listTODOAsyn())
    }, [])

    const { todo } = useSelector(store => store.todo);
    console.log(todo)


    //------------------------------------calendario-------------------------------------------------//

    const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(new Date());


    //--------------------------------mostrar table--------------------------------------//


    // const StyledTableCell = styled(TableCell)(({ theme }) => ({
    //     [`&.${tableCellClasses.head}`]: {
    //         backgroundColor: theme.palette.common.violet,
    //         color: theme.palette.common.white,
    //     },
    //     [`&.${tableCellClasses.body}`]: {
    //         fontSize: 18,
    //     },
    // }));

    // const StyledTableRow = styled(TableRow)(({ theme }) => ({
    //     '&:nth-of-type(odd)': {
    //         backgroundColor: theme.palette.action.hover,
    //     },
    //     // hide last border
    //     '&:last-child td, &:last-child th': {
    //         border: 0,
    //     },
    // }));


    //-----------------------------------------------------------------------------//



    //-------------------agregar--------------///

    const [formValue, handleInputChange, reset] = useForm({
        tarea: '',
        active: true
    })
    const { tarea, active } = formValue;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);

        dispatch(addTODOAsync({
            ...formValue,
            id: uuid(),
            Fecha: fechaSeleccionada.toString()
        }))

        cambiarFechaSeleccionada(new Date())
        reset()

    }


    //-------------------------eliminar------------------------//
    const handleEliminar = (id) => {

        Swal.fire({
            title: 'Eliminar Tarea?',
            text: "¿Desea eliminar esta Tarea?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {

                dispatch(deleteTODOAsync(id))

                Swal.fire(
                    'Tarea Eliminado!'
                )
            }
        })

        console.log(id);
    }

    //-------------------editar modal-------------//
    const [modal, setModal] = useState(false) //indicarle al modal que se active o no 
    const [enviarDatosModal, setEnviarDatosModal] = useState([])

    const editar = (id) => {
        // //--------t= conseguir los datos de ese objeto con ese id--------------//
        const traerTarea = todo.find(t => t.id === id)

        setModal(true)
        setEnviarDatosModal(traerTarea)
        console.log(traerTarea);

    }



    return (

        <div className="container-fluid">
            <div className="conteTodo">
                <div className="conteTitulo">
                    <p>Sabemos que aveces es muy díficil recordar las nuevas
                        responsablidades que tienes como madre, es por ellos que
                        en esta seccion podras crear, eliminar y filtrar tareas pendientes, esto te ayudará a organizar
                        tu día a día y hacer un poco más fácil tu proceso </p>
                </div>



                <div className="inputTodo">
                    <Form onSubmit={() => handleSubmit()} className="formutarea">
                        <Row>
                            <Col sm={5}>
                                <div className='divInput'>
                                    <label className="inputLabelTarea">Nombre de la Tarea</label>
                                    <Form.Control className="forContr"
                                        type="text"
                                        placeholder="Crear una nueva tarea..."
                                        name='tarea'
                                        onChange={handleInputChange}
                                        value={tarea}
                                        required
                                    />
                                </div>
                            </Col>

                            <Col sm={5}>
                                <div className='divInput'>
                                    <label className="inputLabelTareaFecha">Fecha y Hora</label>
                                    <DateTimePicker value={fechaSeleccionada} onChange={cambiarFechaSeleccionada} />
                                </div>
                            </Col>

                            <Col sm={2} className="btnAgrgTarea">
                                <Button type="submit" onSubmit={handleSubmit} className="btnAddTarea">Agregar tarea</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>

                <Table striped bordered hover responsive>
                    <thead >
                        <tr className="headTable">
                            <th>Nombre de la Tarea</th>
                            <th>Fecha</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo.map((tarea) => (

                            <tr key={tarea.id}>
                                <td className="td">{tarea.tarea}</td>
                                <td className="td">{tarea.Fecha}</td>
                                <td className="tdico"><EditIcon onClick={() => editar(tarea.id)} className="btnIconEdi" /></td>
                                <td className="tdico"><DeleteIcon onClick={() => handleEliminar(tarea.id)} className="btnIcon" /></td>
                            </tr>

                        ))}
                    </tbody>
                </Table>
                {

                    modal === true ? <Editar modal={enviarDatosModal} setModal={setModal} /> : ''
                }
            </div>
        </div >
    )
}

export default ImgFondo