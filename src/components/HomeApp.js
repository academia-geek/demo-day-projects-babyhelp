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
      <>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </>

      <ImgFondo/>

    </div>

  )
}

export default HomeApp