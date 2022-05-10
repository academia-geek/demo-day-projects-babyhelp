import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
import { FileUp } from '../helpers/FileUp'
import { useForm } from '../Hooks/useForm'
import { addAprendeAsync} from '../redux/actions/actionAcciones'
import '../styles/AgregarItemsAprende.css'

const AgregarItemsAprende = () => {
    const dispatch = useDispatch()
    const [values, handleInputChange, reset] = useForm({
        nombre: '',
        nombre1: '',
        nombre2: '',
        nombre3: '',
        nombre4: '',
        descripcionGeneral: '',
        descripcion1: '',
        descripcion2: '',
        descripcion3: '',
        descripcion4: '',
        link: '',
        foto1: '',
        foto2: '',
        foto3: '',
        foto4: '',
        id: uuid()


    }) 

    const { nombre, descripcionGeneral, descripcion1, 
        descripcion2, descripcion3, descripcion4, foto1,
         foto2, foto3, foto4, id, link, nombre1, nombre2, nombre3, nombre4 } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        dispatch(addAprendeAsync(values))
        reset()
    }

    const handleFileChange1 = (e) => {
        const file = e.target.files[0]
        console.log(file)
        //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudi a la foto
        FileUp(file)
            .then(resp => {
                values.foto1 = resp
                console.log(resp)
            })
            .catch(error => {
                console.warn(error)
            })


    }

    const handleFileChange2 = (e) => {
        const file = e.target.files[0]
        console.log(file)
        //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudi a la foto
        FileUp(file)
            .then(resp => {
                values.foto2 = resp
                console.log(resp)
            })
            .catch(error => {
                console.warn(error)
            })


    }

    const handleFileChange3 = (e) => {
        const file = e.target.files[0]
        console.log(file)
        //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudi a la foto
        FileUp(file)
            .then(resp => {
                values.foto3 = resp
                console.log(resp)
            })
            .catch(error => {
                console.warn(error)
            })


    }

    const handleFileChange4 = (e) => {
        const file = e.target.files[0]
        console.log(file)
        //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudi a la foto
        FileUp(file)
            .then(resp => {
                values.foto4 = resp
                console.log(resp)
            })
            .catch(error => {
                console.warn(error)
            })


    }



    return (
        <div className="container-fluid divCont">
            <div className="">
                <Link to="/entretenimiento" className="atrasAprende">
                    <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651021613/kxoh6zxnkgynbzcvlhvn.png" width="7%" />
                    <p>Atrás</p>
                </Link>
            </div>

            <div className="divFormAgregarItemAprende">
                <Form onSubmit={handleSubmit} margin={50} className="formAgregarItem">
                    <Form.Group className="" controlId="formBasicEmail">
                        <Form.Label>nombre Item</Form.Label>
                        <Form.Control type="text" required name="nombre" placeholder="Enter nombre" value={nombre} onChange={handleInputChange} />

                        <Form.Label>nombre 1</Form.Label>
                        <Form.Control type="text" required name="nombre1" placeholder="Enter nombre" value={nombre1} onChange={handleInputChange} />

                        <Form.Label>nombre 2</Form.Label>
                        <Form.Control type="text" required name="nombre2" placeholder="Enter nombre" value={nombre2} onChange={handleInputChange} />

                        <Form.Label>nombre 3</Form.Label>
                        <Form.Control type="text" required name="nombre3" placeholder="Enter nombre" value={nombre3} onChange={handleInputChange} />

                        <Form.Label>nombre 4</Form.Label>
                        <Form.Control type="text" required name="nombre4" placeholder="Enter nombre" value={nombre4} onChange={handleInputChange} />
                        
                        <Form.Label>Descripción general</Form.Label>
                        <Form.Control as="textarea" rows={3} required name="descripcionGeneral" placeholder="El codigo contine dos letras y 3 numeros" value={descripcionGeneral} onChange={handleInputChange} />

                        <Form.Label>Descripción 1</Form.Label>
                        <Form.Control as="textarea" rows={3} required name="descripcion1" placeholder="El codigo contine dos letras y 3 numeros" value={descripcion1} onChange={handleInputChange} />

                        <Form.Label>Descripción 2</Form.Label>
                        <Form.Control as="textarea" rows={3} required name="descripcion2" placeholder="El codigo contine dos letras y 3 numeros" value={descripcion2} onChange={handleInputChange} />

                        <Form.Label>Descripción 3</Form.Label>
                        <Form.Control as="textarea" rows={3} required name="descripcion3" placeholder="El codigo contine dos letras y 3 numeros" value={descripcion3} onChange={handleInputChange} />

                        <Form.Label>Descripción 4</Form.Label>
                        <Form.Control as="textarea" rows={3} required name="descripcion4" placeholder="El codigo contine dos letras y 3 numeros" value={descripcion4} onChange={handleInputChange} />


                        
                        <Form.Label>Imagen 1 </Form.Label>
                        <Form.Control type="file" required name="foto1" placeholder="Ingrese Foto.jpg" onChange={handleFileChange1} />

                        <Form.Label>Imagen 2</Form.Label>
                        <Form.Control type="file" required name="foto2" placeholder="Ingrese Foto.jpg" onChange={handleFileChange2} />

                        <Form.Label>Imagen 3</Form.Label>
                        <Form.Control type="file" required name="foto3" placeholder="Ingrese Foto.jpg" onChange={handleFileChange3} />

                        <Form.Label>Imagen 4</Form.Label>
                        <Form.Control type="file" required name="foto4" placeholder="Ingrese Foto.jpg" onChange={handleFileChange4} />


                        <Form.Label>link</Form.Label>
                        <Form.Control type="text" required name="link" placeholder="link" value={link} onChange={handleInputChange} />

                    </Form.Group>

                    <Button type="submit" >Agregar Item</Button>

                </Form>
                <br></br>
                <br></br>
                
            </div>
        </div>
    )
}

export default AgregarItemsAprende