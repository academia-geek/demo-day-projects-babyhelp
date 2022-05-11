import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FileUp } from '../helpers/FileUp';
import { useForm } from '../Hooks/useForm';
import { listperfilAsyn } from '../redux/actions/actionPerfil';
import EditarPerfil from './EditarPerfil';
import '../styles/lactar.css'


const Perfil = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listperfilAsyn())
    }, [])

    const { perfil } = useSelector(store => store.perfil)

    const [values, handleInputChange, reset] = useForm({
        nombremama: perfil[0]?.nombremama,
        nombrebebe: perfil[0]?.nombrebebe,
        semanas: perfil[0]?.semanas,
        foto: perfil[0]?.foto,
        id: perfil[0]?.id
    })

    const { nombremama, nombrebebe, semanas, foto, id } = values



    //-----------------------------------editar-----------------------------------//

    const [modal, setModal] = useState(false) //indicarle al modal que se active o no 
    const [enviarDatosModal, setEnviarDatosModal] = useState([])

    const editar = (id) => {
        //--------t= conseguir los datos de ese objeto con ese codigo--------------//
        const traerPerfil = perfil.find(t => t.id === id)

        setModal(true)
        setEnviarDatosModal(traerPerfil)
    }

    return (
        <div>
            <div className="container-fluid divCont">
                <br></br>
                <br></br>
                <div>
                    <Link to="/" className="linkhom">
                        <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
                    </Link>
                </div>

                <div className="divFormAgregarItemAprende dic" style={{backgroundColor: 'rgb(98, 98, 98)', width:'60%', padding:'4% 0', borderRadius:'15px', boxShadow:'4px 4px 10px rgba(0, 0, 0, 0.8), -4px -4px 10px rgba(255, 255, 255, 0.4), inset -4px -4px 10px rgba(0, 0, 0, 0.4), inset 4px 4px 10px rgba(255, 255, 255, 0.4)'}}>
                    <center>
                        <div style={{backgroundColor: 'rgb(202, 202, 202)', borderRadius:'90px', width: '20%', padding: '3% 0'}}>
                            <img src={perfil[0]?.foto} width="100%" height="25%" alt="" />
                        </div>
                    </center>
                    <br></br>



                    <Form margin={50} className="formAgregarItem" style={{display:'flex', flexDirection:'column',justifyContent: 'center',alignItems: 'center'}}>
                        <Form.Group  controlId="formBasicEmail" style={{width: '60%'}} className="contP">
                            <Form.Label>Nombre Mamá</Form.Label>
                            <Form.Control type="text" required readOnly name="nombremama" placeholder="Ingresa tu Nombre" value={perfil[0]?.nombremama} onChange={handleInputChange} />


                            <Form.Label>Nombre Bebé</Form.Label>
                            <Form.Control type="text" required readOnly name="nombrebebe" placeholder="Ingresa el Nombre del Bebé" value={perfil[0]?.nombrebebe} onChange={handleInputChange} />


                            <Form.Label>Semanas del Bebé</Form.Label>
                            <Form.Control type="number" required readOnly name="semanas" placeholder="Ingresa Semanas del Bebé en NÚMERO" value={perfil[0]?.semanas} onChange={handleInputChange} />

                        </Form.Group>


                        <br></br>
                        <br></br>
                        <Button onClick={() => editar(perfil[0]?.id)} className="btnedi">
                        Editar Perfil <br></br> PRESIONA AQUÍ 
                        </Button>
                        

                    </Form>
                    <br></br>
                    <br></br>

                </div>
            </div>

            {
                modal === true ? <EditarPerfil modal={enviarDatosModal} setModal={setModal} /> : ''
            }


        </div>
    )
}

export default Perfil