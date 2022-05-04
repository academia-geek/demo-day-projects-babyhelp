import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import Aprende from './Aprende';
import ImgFondo from './todo/ImgFondo';

const HomeApp = () => {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <ImgFondo/>
    </div>

  )
}

export default HomeApp