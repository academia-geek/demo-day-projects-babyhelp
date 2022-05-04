import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap'
// import Lista from './Lista'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { addTODOAsync, editTODOAsync, deleteTODOAsync, listTODOAsyn } from '../../redux/actions/todoActions';
import uuid from 'react-uuid'
import Swal from 'sweetalert2';
import Editar from '../Editar';
import '../../styles/todo.css'

const ImgFondo = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listTODOAsyn())
    }, [])

    const { todo } = useSelector(store => store.todo);
    console.log(todo)


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
            id: uuid()
        }))

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

                <div className="divTareas">

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
                    <div className="contLis">
                        {
                            todo.map(tarea =>
                            (
                                <>
                                    <div className='divList' key={tarea.id}>
                                        <Form.Check className="formCheckL"
                                            type="checkbox"
                                            aria-label="radio 1"
                                            id={tarea.id}
                                            label={tarea.tarea}
                                            value={tarea.active}
                                            name='active'
                                            checked

                                        />
                                        <div className="divList btnTODO">
                                            <Button variant="secondary" className="btnEditar" onClick={() => editar(tarea.id)}>Editar</Button>
                                            <Button variant="danger" onClick={() => handleEliminar(tarea.id)}>Eliminar</Button>
                                        </div>

                                    </div>

                                </>
                            ))
                        }

                        <br></br>
                    </div>
                </div>
                {

                    modal === true ? <Editar modal={enviarDatosModal} setModal={setModal} /> : ''
                }
            </div>
        </div>
    )
}

export default ImgFondo