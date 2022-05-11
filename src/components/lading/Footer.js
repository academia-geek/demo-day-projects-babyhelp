import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin, FaInstagram, FaUserGraduate, FaUniversity } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className="divImgFooter">
                <img
                    src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1650956989/ckmbzwlkjyflf4geksva.png"
                    width="15%"
                    className="d-inline-block align-top imgLogoFooter"
                    alt="logo"
                />
            </div>

            <Row>
                <Col sm={3} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign:'center', alignItems: 'center', padding:'3%, 0'}} className="footerow3">
                    <FaUserGraduate />
                    <p>Andreina Rodriguez</p>
                </Col>

                <Col sm={3} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign:'center', alignItems: 'center', padding:'3%, 0'}} className="footerow3">
                    <FaUniversity />
                    <p className="">Academia Geek</p>
                </Col>

                <Col sm={3} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign:'center', alignItems: 'center', padding:'3%, 0'}} className="footerow3ico">
                    <Link to="/" className="linkFOO">Home</Link>
                    <Link to="/tareas" className="linkFOO">Tareas</Link>
                    <Link to="/aprendemas" className="linkFOO">Aprende</Link>
                    <Link to="/entretenimiento" className="linkFOO">Entretenimiento</Link>
                </Col>

                <Col sm={3} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign:'center', alignItems: 'center', padding:'3%, 0'}} className="footerow3iconos">
                    <a href="www.linkedin.com/in/andreinarodriguezg" target="_blank"><div className="icon"><FaLinkedin /></div></a>
                    <a href="https://github.com/andreaguerrero8" target="_blank"><div className="icon"><FaGithub />  </div></a>
                    <a href="" target="_blank"><div className="icon"><FaInstagram />  </div></a>
                </Col>
            </Row>

        </footer >
    )
}

export default Footer