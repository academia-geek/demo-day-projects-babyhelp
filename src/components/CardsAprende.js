import React from 'react'
import { useEffect } from 'react'
import { Card, Carousel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listAprendeAsyn } from '../redux/actions/actionAcciones'
import '../styles/cardsLink.css'

const CardsAprende = () => {
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
    <div className="conrainer-fluid conteCarru">
      {
        aprende.map(i => (
          < Link to="/curiosidades" >
            <Card style={{ width: '18rem', padding: 0 }}>
              <Card.Img variant="top" src={i.foto1} height="200px"/>
              <Card.Body>
                <Card.Title>{i.nombre}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))
        
      }

    </div >
  )
}

export default CardsAprende