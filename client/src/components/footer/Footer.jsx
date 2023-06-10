import React from 'react'
import "./foorer.css"
import { Col, Container, Row } from 'react-bootstrap'
function Footer() {
    return (
        <Container>
        <Row className='footer '>
     
     <Col> <ul className="flist">
        <li className="fListItem">Seasonal and holiday deals</li>
        <li className="fListItem">Traveller Review Awards</li>
        <li className="fListItem">Car hire</li>
        <li className="fListItem">Restaurant reservations</li>
        <li className="fListItem">Booking.com for Travel Agents</li>
        <li className="fListItem"> Coronavirus (COVID-19) FAQs</li>

    </ul>  </Col>

    <Col>  <ul className="flist">
        <li className="fListItem">About Booking.com</li>
        <li className="fListItem">Customer Service help</li>
        <li className="fListItem">Partner help</li>
        <li className="fListItem">Careers</li>
        <li className="fListItem">Sustainability</li>
        <li className="fListItem">    Press centre</li>

    </ul> </Col>
    <Col><ul className="flist">
        <li className="fListItem">All destinations</li>
        <li className="fListItem">All car hire locations</li>
        <li className="fListItem">Discover</li>
        <li className="fListItem">Reviews</li>
        <li className="fListItem">Discover monthly stays</li>
        <li className="fListItem">Unpacked: Travel articles</li>
    </ul>   </Col>
    <Col><ul className="flist">
        <li className="fListItem">B&Bs</li>
        <li className="fListItem">Guest houses</li>
        <li className="fListItem">states</li>
        <li className="fListItem">districts</li>
        <li className="fListItem">airpot</li>
        <li className="fListItem">hotels</li>
    </ul></Col>
    <Col>
        <ul className="flist">
            <li className="fListItem"> Places of interest </li>
            <li className="fListItem"> Homes  </li>
            <li className="fListItem"> Apartments </li>
            <li className="fListItem">Resorts  </li>
            <li className="fListItem">Villas  </li>
            <li className="fListItem">Hostels  </li>
        </ul>
    </Col>
    <Col sm={12} className="fText">
        copyright@2023 easybook
    </Col>
</Row>
        </Container>

    )
}

export default Footer