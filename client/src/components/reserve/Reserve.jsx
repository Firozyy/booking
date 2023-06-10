import React, { useContext, useState } from 'react'
import './reserve.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/fetchData'
import instance from '../../instance'
import { Navigate } from 'react-router-dom'
function Reserve({ setOpen, hotelId, date }) {
  const { data, loading, error, refetchData } = useFetch(`/room/${hotelId}`);

  const [selectedRooms, setSelectedRooms] = useState([])

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };
  const alldates = getDatesInRange(date[0].startDate, date[0].endDate);

  const isAvailable = (roomNumber) => {

    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };
  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          console.log(roomId);
          const res = instance.put(`/RoomAvailability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      Navigate("/");
    } catch (err) { }
  };


  return (
    <div className='reserve'>
      <div className="rContainer">
        <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={() => setOpen(false)} />
        <span>Select your rooms</span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax"> Max People: {item.maxPeople}</div>
              <div className="rPrice">  {item.price}</div>

            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map(room => (

                <div className="room">
                  <label >{room.number}</label>
                  <input type="checkbox" value={room._id} onChange={handleSelect} disabled={!isAvailable(room)} />
                </div>

              ))}
            </div>
          </div>
        ))}

        <button onClick={handleClick} className="rButton">Reserve now!</button>
      </div>
    </div>
  )
}

export default Reserve