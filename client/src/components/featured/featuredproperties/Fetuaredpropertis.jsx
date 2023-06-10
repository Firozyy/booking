import React from 'react'
import './fetuaredpropertis.css'
import { Col, Row } from 'react-bootstrap'
import resources from '../../../resourse'
import useFetch from '../../../hooks/fetchData';
function Fetuaredpropertis() {
    const { data, loading, error, refetchData } = useFetch(resources.feturedproperties);

    return (
        <Row className="fp mt-3">
            <h1 className='title'> Home guest love</h1>
            {loading ? "loading please wait" : <>
                {data.map((item, index) => (
                    <Col key={index} sm={6} md={3} className="fpItem">
                        <img src={item.photos} alt="" className="fpimg" />
                        <span className="fpName">{item.name}</span>
                        <span className="fpCity">{item.city}</span>
                        <span className="fpPrice">statrting from {item.cheepestPrice}</span>
                        {item.rating && <div className="fpRating">
                            <button>{item.rating}</button>
                            <span>exelent</span>
                        </div>}
                    </Col>
                ))}

            </>}



        </Row >
    )
}

export default Fetuaredpropertis