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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';


const ImgFondo = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listTODOAsyn())
    }, [])

    const { todo } = useSelector(store => store.todo);
    console.log(todo)


    //------------------------------------calendario-------------------------------------------------//

    const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(new Date());



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
            <br></br>
            <br></br>
            <Link to="/" className="linkatrasTodo">
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
            </Link>

            <div className="conteTodo">
                <div className="divlactatext">
                    <h5>Sabemos que aveces es muy díficil recordar las nuevas
                        responsablidades que tienes como madre, es por ellos que
                        en esta seccion podras crear, eliminar y filtrar tareas pendientes, esto te ayudará a organizar
                        tu día a día y hacer un poco más fácil tu proceso </h5>
                </div>
                <br></br>


                <div className="inputTodo">
                    <Form onSubmit={handleSubmit} className="formutarea">
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

                <div>
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
                </div>

                {

                    modal === true ? <Editar modal={enviarDatosModal} setModal={setModal} /> : ''
                }
            </div>
        </div >
    )
}

export default ImgFondo