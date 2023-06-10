import React from 'react'
import './featured.css'
import { Row, Col, Container } from "react-bootstrap"
import useFetch from '../../hooks/fetchData'
import resources from '../../resourse';
function Featured() {

    const { data, loading,  error, refetchData } = useFetch(resources.fetchCitycount);
   
  
    return (



        <Row className='m-0 mt-5 featured '>
            {loading ? "loading" : <>
                <Col lg={3} sm={6} className='p-0' >
                    <div className="featuredItem">
                        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684720.jpg?k=fdb1d9397eeb9b17d4a1ef6fdf806e6b4366d5ebda38d7f0c212b9c1bec8dcea&o=" alt="" />
                        <div className="featuredTitles">
                            <h1>Wayanad</h1>
                            <h2>{data[3]} properties</h2>
                        </div>
                    </div>

                </Col>

                <Col lg={3} sm={6}  >
                    <div className="featuredItem">
                        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684572.jpg?k=f74af2be72834d9953c8096834db666c7769c5f6c1ba230d6fe5591ba84dd33d&o=" alt="" />
                        <div className="featuredTitles">
                            <h1>Kochi</h1>
                            <h2>{data[1]}properties</h2>
                        </div>
                    </div>
                </Col>

                <Col lg={3} sm={6}  >
                    <div className="featuredItem">
                        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684514.jpg?k=94a24874ade1e734dd61fa72b85a246a86a682b1e6e8a0e257cf82ad151ed1f0&o=" alt="" />
                        <div className="featuredTitles">
                            <h1>Ooty</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                </Col>
                <Col lg={3} sm={6} className='pe-0' >
                    <div className="featuredItem">
                        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684667.jpg?k=df5960dc1926d569786e9cba95399b2892d6b68b8ad685d33645819443550443&o=" alt="" />
                        <div className="featuredTitles">
                            <h1>Idukki</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </Col>
            </>}

        </Row>







    )
}

export default Featured