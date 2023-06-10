import React, { useState } from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleRight, faCircleXmark, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Maillist from '../../components/maillist/Maillist'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { Row } from 'react-bootstrap'
import useFetch from '../../hooks/fetchData'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Reserve from '../../components/reserve/Reserve'

function Hotel() {
  //redux
  const { isAuthenticated } = useSelector(state => state.users);
  //redux
  const { id } = useParams()
  const { data, loading, error } = useFetch(`/getHotel/${id}`);

  const { state } = useLocation();

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24
  function dayDifreance(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY)
    return diffDays
  }

  const StayCount = dayDifreance(state.date[0].endDate, state.date[0].startDate);


  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/430271570.jpg?k=fa7a32fff5ab55b1eaeebe7144122c07c5d212a6f0170de9104247b5439a74a2&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/429869178.jpg?k=0db28426fb3e1b345d5bca7386b9f266363b776ba7d70b13c15c7c10a6078eaa&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/430271787.jpg?k=5d846f768573247ac45791c19a03604f2c247c1d4c89bb0cbe6f7c26a5fa82db&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/430471596.jpg?k=c40e0ba17ce185755ac5c192e3a2f959959d0e85a31aa59be959434d3c48644d&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/430471595.jpg?k=95df2bd91a511f225cb47f81b8177c2d2777e0a815c233fa235a01c58ee4d707&o=&hp=1"
    },
  ]
  const [slidenumber, setslidenumber] = useState(0)
  const [openslider, setsopenslider] = useState(false)

  function handleslide(i) {
    setslidenumber(i)
    setsopenslider(!openslider)
  };

  const hendlMove = (direction) => {
    let newslidernumber;
    if (direction === "l") {
      newslidernumber = slidenumber === 0 ? 4 : slidenumber - 1
    } else {
      newslidernumber = slidenumber === 4 ? 0 : slidenumber + 1
    }
    setslidenumber(newslidernumber)
  };
  //click function reserve
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false);
  const bookingHandler = (event) => {

    if (isAuthenticated) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <Row className="hotle">

      <Navbar />
      <Header type={"list"} />
      {loading ? "loading " : <>
        <div className="hotelcontainer">
          {openslider &&
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className='close'
                onClick={() => setsopenslider(!openslider)}
              />

              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className='arrow'
                onClick={() => hendlMove("l")}
              />
              <div className="sliderwrapper">
                <img src={photos[slidenumber].src} alt="" className="sliderimg" />
              </div>

              <FontAwesomeIcon
                icon={faCircleRight}
                className='arrow'
                onClick={() => hendlMove("r")}
              />
            </div>}
          <div className="hotelWrapper">
            <button onClick={bookingHandler} className='booknow'>Resrve or Book</button>
            <h1 className="hotleTitle">
              {data.name}
            </h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              exelent location {data.distance} m from center
            </span>
            <span className="hotelPriceHilight">
              Book a stay {data.cheepestPrice}at this property and get a free airpot taxi
            </span>
            <div className="hotelimages">
              {photos.map((photo, i) => (
                <div className="hotelImagewrapper">
                  <img onClick={() => handleslide(i)} src={photo.src} alt="" className="hotelimg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotleDetailsText">
                <h1 className="hotelTitle"> {data.title}</h1>
                <p className='desc'>
                  {data.desc}
                </p>

              </div>
              <div className="hotleDetailsprice">
                <h1>perfect for stay a {StayCount} night stay</h1>
                <span>
                  lacated in the real heart of kochi this proprty exelent lacation score of 9.8
                </span>
                <h2> <b> ${StayCount * data.cheepestPrice * state.option.room}  </b> for {StayCount}night</h2>
                <button onClick={bookingHandler}>Reserve or Book now</button>
              </div>
            </div>
          </div>
          <Maillist />
        </div>
      </>

      }
     {openModal && (<Reserve setOpen={setOpenModal} hotelId={id} date={state.date} />)}
    </Row>

  )
}

export default Hotel