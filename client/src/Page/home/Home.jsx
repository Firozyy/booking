import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import Propertylist from '../../components/proprtylist/Propertylist'
import Fetuaredpropertis from '../../components/featured/featuredproperties/Fetuaredpropertis'
import Maillist from '../../components/maillist/Maillist'
import Footer from '../../components/footer/Footer'
import { Row, Col, Container } from "react-bootstrap"
import Offer from '../../components/offer/Offer'
function Home() {
  return (

    <Row>

      <Col className='navbarmain' sm={12}>
        <Navbar />
      </Col>
      <Col Col sm={12} className='Header'>
        <Header />
      </Col>
      < Col sm={12}>
        <Container>
          <Row className="homeContainer ">
          <Col sm={12} >
              <Offer />

            </Col>
            <Col sm={12} >
              <Featured />

            </Col>
            <Col sm={12}>
              <Propertylist />
            </Col>
            <Col sm={12}>
              <Fetuaredpropertis />
            </Col>

          </Row>
        </Container>
        <Col sm={12}>
          <Maillist />
        </Col>





        <Footer />
      </Col>
    </Row>












  )
}

export default Home