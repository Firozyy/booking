import React, { useState } from 'react'
import Navbar from "../../components/navbar/Navbar"
import Header from '../../components/header/Header'
import './list.css'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns"
import { DateRange } from 'react-date-range'
import Searchitem from '../../components/searchitem/Searchitem'
import { Col, Row } from 'react-bootstrap'
import useFetch from '../../hooks/fetchData'

function List() {
  const location = useLocation();

  const [opendate, setOpenDate] = useState(false);
  const [destnation, setDestination] = useState(location.state.destination);
  const [date, setdate] = useState(location.state.date)
  const [option, setoption] = useState(location.state.option)

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);


  const { data, loading, error, refetchData } = useFetch(`/getallhotel?city=${destnation}&min=${min || 0}&max=${max || 999}`);
  const handlClick = () => {
    refetchData()
  };
 
  return (
    <Row>
      <Navbar />
      <Header type="list" />
      <Col className="listContainer">
        <Row className="listWrapper">
          <Col className="listSearch">
            <h1 className="lsTitle">search</h1>
            <div className="lsItem">
              <label htmlFor="">destination</label>
              <input
                type="text"
                placeholder={destnation}

              />
            </div>
            <div className="lsItem">
              <label htmlFor="">Checkin Date</label>
              <span className='lsdate' onClick={() => setOpenDate(!opendate)}>{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyy")} `}</span>

              {opendate &&
                <DateRange
                  onChange={item => setdate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />

              }
            </div>
            <div className="lsItem">
              <label htmlFor="">options</label>
              <div className="lsoptions">


                <div className="lsOptionItem">
                  <span className="isOptioText">
                    Min Prise <small>perninght</small>

                  </span>
                  <input type="numer" onChange={(e) => setMin(e.target.value)} className="isoptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="isOptioText">
                    max Prise <small>perninght</small>

                  </span>
                  <input type="numer" onChange={(e) => setMax(e.target.value)} className="isoptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="isOptioText">
                    adult

                  </span>
                  <input type="numer" className="isoptionInput" placeholder={option.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="isOptioText">
                    children

                  </span>
                  <input type="numer" className="isoptionInput" placeholder={option.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="isOptioText">
                    Room

                  </span>
                  <input type="numer" className="isoptionInput" placeholder={option.room} />
                </div>
              </div>
              <button onClick={handlClick} className='ooptionSearch'>search</button>
            </div>

          </Col>
          <Col className="listResult">

            {loading ? "loading" : <>
              {data.map((item, index) => (
                <Searchitem item={item} date={date} option={option} key={index} />
              ))}

            </>
            }


          </Col>

        </Row>
      </Col>
    </Row>
  )
}

export default List