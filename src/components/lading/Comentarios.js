import React from 'react'
import { Card } from 'react-bootstrap'

const Comentarios = () => {
    return (
        <>

            <br></br>
            <div className="contenedorComenatiros">

                <img className="comillas" src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1649040434/landing%20Page/images/bg-quotes_qrcs4i.png" width="6%" />


                <br></br>
                <br></br>
                <div className="row cardComentarios">

                    <div className="col-md-4">
                        <Card>
                            <Card.Body>

                                <Card.Text>
                                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                                </Card.Text>

                                <div className="imgCard">

                                    <img className="img" src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1649053236/landing%20Page/images/profile-1_ht3qyw.jpg" width="15%" />

                                    <p className="pComImg">Satish Patel<br></br> Founder & CEO Hunddle </p>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card>
                            <Card.Body>

                                <Card.Text>
                                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.

                                </Card.Text>

                                <div className="imgCard">

                                    <img className="img" src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1649040437/landing%20Page/images/profile-2_t56ppl.jpg" width="15%" />

                                    <p className="pComImg">Satish Patel<br></br> Founder & CEO Hunddle </p>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card>
                            <Card.Body>

                                <Card.Text>
                                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.

                                </Card.Text>

                                <div className="imgCard">

                                    <img className="img" src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1649040437/landing%20Page/images/profile-3_bhtpde.jpg" width="15%" />

                                    <p className="pComImg">Satish Patel<br></br> Founder & CEO Hunddle </p>

                                </div>

                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Comentarios