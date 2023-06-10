import React, { useState } from 'react'
import './heder.css'

import { Col, Container, Row, } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Header({ type }) {
    const { isAuthenticated, user } = useSelector(state => state.users);
    const navigate = useNavigate(" ")
    // this use state for culender hiding
    const [openDate, setOpenDate] = useState(false)
    const [date, setDtate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1
    });


    const handleOption = (name, conter) => {

        setOption((prev) => { return { ...prev, [name]: conter === "i" ? option[name] + 1 : option[name] - 1 } })
    };

    const handleSErach = () => {
        navigate("/hotels", { state: { destination, date, option } })
    };
    const [destination, setDestination] = useState("")

    return (

        <Row className='header  '>

            <Col className={type === "list" ? "headerContainer listmode" : "headerContainer"}>
                <Container>
                    <div className="headerList  w-100">
                        <div className="headerListItem active">
                            <FontAwesomeIcon icon={faBed} />
                            <span>stays</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faPlane} />
                            <span>Flight</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faCar} />
                            <span>Car rentels</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faPlane} />
                            <span>Atractions</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faTaxi} />
                            <span>Airpot Taxies</span>
                        </div>
                    </div>

                    {type !== "list" && <>
                        <h1 className="headerTitle">Sign in, save money</h1>
                        <p className="headerDesc">Save 10% or more at participating properties – just look for the blue Genius label.</p>
                        {!isAuthenticated &&
                            <button className="headerBtn">sign in /register</button>
                        }

                        {/* search bar start here!!!! */}
                        <div className='headerSerch' >
                            <div >
                                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                                <input
                                    type="text"
                                    placeholder='wher are you going'
                                    className='headerSearchInput'
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="fordate" >
                                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />

                                <span onClick={() => setOpenDate(!openDate)} className='headersearchText'>{`${format(date[0].startDate, "MM/dd/yyy")} - ${format(date[0].endDate, "MM/dd/yyy")} `}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDtate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                    minDate={new Date()}
                                />}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPerson} className='headerIcon' />

                                {   /* !openOptions OPPOSITE OF OPENOPTION */}
                                <span onClick={() => setOpenOptions(!openOptions)} className='headersearchText'>{`${option.adult} adult .${option.children} children .${option.room} room`}</span>

                                {openOptions &&
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className='optionText'>adult</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={option.adult <= 1}
                                                    className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                                <span className="optionCounterNumber">1</span>
                                                <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                            </div>

                                        </div>
                                        <div className="optionItem">
                                            <span className='optionText'>Children</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={option.children <= 0}
                                                    className="optionCounterButton" onClick={() => handleOption("children", "d")}> - </button>
                                                <span className="optionCounterNumber">0</span>
                                                <button className="optionCounterButton" onClick={() => handleOption("children", "i")}> + </button>
                                            </div>

                                        </div>
                                        <div className="optionItem">
                                            <span className='optionText'>Room</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={option.room <= 1}
                                                    className="optionCounterButton" onClick={() => handleOption("room", "d")}> - </button>
                                                <span className="optionCounterNumber" >1</span>
                                                <button className="optionCounterButton" onClick={() => handleOption("room", "i")}> + </button>
                                            </div>
                                        </div>

                                    </div>
                                }

                            </div>
                            <div >
                                <button className='headerBtn' onClick={handleSErach} >search</button>
                            </div>
                        </div>
                        {/* search bar End here!!!! */}
                    </>}


                </Container>

            </Col>

        </Row>





    )
}

export default Header