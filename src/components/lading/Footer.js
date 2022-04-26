import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1650956989/ckmbzwlkjyflf4geksva.png"
                    width="20%"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </div>


            <div className="row contetrooter">

                <div className="col-3 colF colFooterUno">
                    <img className="imgFoo" src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1649040436/landing%20Page/images/icon-location_xpo7cn.svg" width="20%" height="15%" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <div className="col-2 colF colFooterDos">
                    <div className="colFoote">
                        <img className="imgFoo" src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1649040434/landing%20Page/images/icon-phone_uu61ij.svg" width="13%" height="45%" />
                        <p>+1-543-123-4567</p>
                    </div>

                    <div className="colFoote">
                        <img className="imgFoo" src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1649040434/landing%20Page/images/icon-email_x8qsf5.svg" width="13%" height="45%" />
                        <p>example@fylo.com</p>
                    </div>

                </div>

                <div className="col-2 colF colFooterTres">
                    <p>About us</p>
                    <p>Jobs</p>
                    <p>Press</p>
                    <p>Blog</p>
                </div>

                <div className="col-2 colF colFooterCuatro">
                    <p>Contact Us</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>

                <div className="col-3 colF colFooterCinco">
                    <div className="icon"><FaFacebookF />  </div>
                    <div className="icon"><FaTwitter />  </div>
                    <div className="icon"><FaInstagram />  </div>
                </div>



            </div>
        </footer>
    )
}

export default Footer