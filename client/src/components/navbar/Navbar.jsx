import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Col, Container, Row, } from "react-bootstrap"
import { useSelector } from 'react-redux';
function Navbar() {
    const { isAuthenticated, user } = useSelector(state => state.users);

    return (
        < >
        
                <Row className='mainbox'>
             
                    <Col >
                    <Container className='navCol'>

                    <Link to={"/"} style={{ textDecoration: "none" }}>
                            <span className="logo">easybook</span>
                        </Link>
                        {isAuthenticated ? user.username : (
                        <div className="navItems">
                            <button className="navButton">Register</button>
                            <Link to={'/login'}>
                                <button className="navButton">sign in</button>
                            </Link>

                        </div>
                             )}
                    </Container>
                       
                    </Col>
                  
                </Row>
            

            {/* <Row className='navbar'>
                 <div className="navContainer">
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                        <span className="logo">easybook</span>
                    </Link>
                    {isAuthenticated ? user.username : (
                        <div className="navItems">
                            <button className="navButton">Register</button>
                            <Link to={'/login'}>
                                <button className="navButton">login</button>
                            </Link>

                        </div>



                    )}
                </div> 
               

            </Row> */}
        </>

    )
}

export default Navbar