import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Form } from 'react-bootstrap';
import { useForm } from '../../Hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { addcomentariosVacunasAsync } from '../../redux/actions/actionComentariosVacunas';
import uuid from 'react-uuid';
import '../../styles/Blogs.css'
import ListarComentariosVacunas from './ListarComentariosVacunas';
import { useEffect } from 'react';
import { listperfilAsyn } from '../../redux/actions/actionPerfil';

export default function AddComentariosVacunas() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listperfilAsyn())
    }, [])

    const { perfil } = useSelector(store => store.perfil)

    let perfill = perfil[0]?.nombremama;

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addcomentariosVacunasAsync({
            ...formValue,
            nombre: perfill,
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
        <div>

            <div className="conteComen">
                <ListarComentariosVacunas />
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

