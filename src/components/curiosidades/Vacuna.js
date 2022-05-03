import React from 'react'
import { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listAprendeAsyn } from '../../redux/actions/actionAcciones'
import '../../styles/cardsLink.css'

const Vacuna = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listAprendeAsyn())
    }, [])

    const { aprende } = useSelector(store => store.aprende);

    console.log(aprende);

    const handleClick = () => {
        console.log('hola');
    }

    return (
        <div className="conrainer-fluid">
            <br></br>
            <br></br>
            <Link to="/">
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651544520/babyhelp/hgq97eg6ho7ipy7zyiw3.png" width="7%" />
            </Link>
            <div>
                <p>

                </p>
            </div>
            <div className="conteCarru">
                {
                    aprende.map(i => (

                        <Card style={{ width: '18rem', padding: 0 }} className="cardInfor">
                            <Card.Img variant="top" src={i.foto1} height="200px" />
                            <Card.Body>
                                <Card.Title>{i.nombre}</Card.Title>
                            </Card.Body>
                        </Card>

                    ))

                }

            </div>

        </div >
    )
}

export default Vacuna