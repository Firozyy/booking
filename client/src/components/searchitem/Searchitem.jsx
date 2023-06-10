import React from 'react'
import './searchitem.css'

import { useNavigate } from 'react-router-dom';
function Searchitem({ item,date ,option}) {
    const navigate = useNavigate(" ")
    const handleSErach = () => {
        navigate(`/hotel/${item._id}`, { state: {  date,option } })
    };

    return (
        <div className='seachItme'>

            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/257018287.webp?k=4cf455ac5314c62d0817c1673fe396e6e91f96e9cee4c4579a2bcea0d204ad2b&o=" alt="" className="siImg" />
            <div className="siDescription">
                <h1 className="siTitle">{item.name}</h1>
                <span className="sidistance">{item.distance}m from town</span>
                <span className="siTaxiop">free airpot taxi</span>
                <span className="siSubtitle">
                    studio apprtment wit air condition
                </span>
                <span className="siFeatures">
                    {item.desc}
                </span>
                <span className="siCancelOp">free cancalation</span>
                <span className="siCancelSubscribe">
                    you can cancel later so look in this grat price today
                </span>
            </div>
            <div className="siDetails">
                {item.rating &&
                    <div className="siRating">
                        <span>Exelent</span>
                        <button>{item.rating}</button>
                    </div>}

                <div className="siDetailsText">
                    <span className="price">{item.cheepestPrice}</span>
                    <span className="siTaxOp">includes taxes and fees</span>
                   
                    <button onClick={handleSErach} className='siCheckbutton'>see avility</button>
                 
                   
                </div>
            </div>
        </div>
    )
}

export default Searchitem