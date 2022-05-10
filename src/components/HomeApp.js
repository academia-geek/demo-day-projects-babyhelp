import React from 'react'
import { useState } from 'react';
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