import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Form } from 'react-bootstrap';
import { useForm } from '../../Hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { addcomentariosEnfermedadesAsync } from '../../redux/actions/actionComentariosEnfermedades';
import uuid from 'react-uuid';
import '../../styles/Blogs.css'
import ListarComentariosEnfermedades from './ListarComentariosEnfermedades';

export default function AddComentariosEnfermedades() {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target);

        dispatch(addcomentariosEnfermedadesAsync({
            ...formValue,
            nombre: 'pepe',
            fecha: output,
            id: uuid()
        }))

        reset()
    }

    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    console.log(output);

    //-------------------agregar--------------///

    const [formValue, handleInputChange, reset] = useForm({
        comentario: ''
    })
    const { comentario } = formValue;



    return (
        <div className="container-fluid">

            <div className="conteComen">
                <ListarComentariosEnfermedades />
            </div>

            <br></br>
            <br></br>


            <div className="divStack">
                <Stack direction="row" spacing={2} className="divStack">
                    <Avatar src="/broken-image.jpg" />

                    <Form onSubmit={handleSubmit} className="formComen">
                        <input className="controlComentario"
                            size="md"
                            type="text"
                            placeholder="Escribe un comentario"
                            name='comentario'
                            onChange={handleInputChange}
                            value={comentario}
                            required
                        />

                    </Form>
                </Stack>
            </div >
        </div>
    );
}