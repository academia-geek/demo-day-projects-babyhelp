import React from 'react'
import { Nav } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin, FaInstagram, FaUserGraduate } from 'react-icons/fa';
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


            <div className="row contetrooter">

                <div className="col-3 colF colFooterUno">
                    <FaUserGraduate/>
                    <p>Andreina Rodriguez</p>
                </div>

                <div className="col-3 colF colFooterDos">
                    <div className="colFoote">
                        <img className="imgFoo" src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1649040434/landing%20Page/images/icon-phone_uu61ij.svg" width="13%" height="45%" />
                        <p>+1-543-123-4567</p>
                    </div>

                    <div className="colFoote">
                        <img className="imgFoo" src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1649040434/landing%20Page/images/icon-email_x8qsf5.svg" width="13%" height="45%" />
                        <p>example@fylo.com</p>
                    </div>

                </div>

                <div className="col-3 colF colFooterTres">
                    <Link to="/" className="linkFOO">Home</Link>
                    <Link to="/tareas" className="linkFOO">Tareas</Link>
                    <Link to="/aprende" className="linkFOO">Aprende</Link>
                </div>

                <div className="col-3 colF colFooterCinco">
                    <a href="www.linkedin.com/in/andreinarodriguezg" target="_blank"><div className="icon"><FaLinkedin /></div></a>
                    <a href="https://github.com/andreaguerrero8" target="_blank"><div className="icon"><FaGithub />  </div></a>
                    <a href="" target="_blank"><div className="icon"><FaInstagram />  </div></a>
                </div>

            </div>
        </footer>
    )
}

export default Footer