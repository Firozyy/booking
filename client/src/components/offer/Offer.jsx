import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './offer.css'
function Offer() {
    return (
        <Row className='mt-3 ' >
            <h4 className='text-bold'>Offers</h4>

            <p>Promotions, deals and special offers for you</p>
            <Col className=' rounded '>
                <Card className="bg-dark text-black border-0   ">
                    <Card.Img src="https://d3r8gwkgo0io6y.cloudfront.net/upload/assets/images/Best-Deal-Offers.jpg" alt="Card image" />

                </Card>
            </Col>   <Col className=' rounded '>
                <Card className="bg-dark text-black border-0 ">
                    <Card.Img src="https://www.travtips.ae/img/customise-banner.jpg" alt="Card image" />


                </Card>
            </Col>
        </Row>
    )
}

export default Offer