import CarouselImage from "./CarouselImage";
import CarouselWritings from "./CarouselWritings";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IMG_URL, LOCAL_COMPANY_URL, LOCAL_IMG_URL } from "../imgData";
import { motion } from "framer-motion";
import { Carousel } from "react-bootstrap";
import { ArrowPrev, ArrowNext } from "./ArrowCaros";

import { Row, Col } from "react-bootstrap";

import Slider from "react-slick";

import './CarouselPage.css'
import './CarouselWritings.css'


function CarouselPage({ setGoHome }) {
    const [imgNum, setImgNum] = useState(0);
    const [ImgData, setImgData] = useState([]);

    const testData = ImgData[imgNum];

    const { company } = useParams();
    const { projectype } = useParams();

    useEffect(() => {
        if (projectype) {
            fetch(`${IMG_URL}/${company}/${projectype}`)
                .then(resp => resp.json())
                .then(data => setImgData(data))
                .catch(e => alert('failed to fetch carousel images'));
        } else {
            fetch(`${IMG_URL}/${company}`)
                .then(resp => resp.json())
                .then(data => setImgData(data))
                .catch(e => alert('failed to fetch carousel images'));
        }
        setGoHome(true);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        swipeToSlide: true,
        slidesToScroll: 1,
        className: 'slider',
        beforeChange: (current, next) => setImgNum(next),
    };

    if (ImgData.length !== 0) {
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                style={{height: '93vh'}}
            >
              {window.innerWidth > 950 ? (
                <Row style={{height: '100%'}}>
                    <Col md={6} style={{height: '100%'}}>
                    <Carousel 
                        style={{height: '100%'}} 
                        interval={null}
                        onSlid={(event, direc) => setImgNum(event)}
                        indicators={false}
                        prevIcon = {<ArrowPrev />}
                        nextIcon = {<ArrowNext />}
                    >
                        {ImgData.map((img, index) => (
                            <Carousel.Item key={index}>
                                <img src={img.url} alt={img.title} height='100%' width='100%' loading="lazy" style={{objectFit: 'cover'}} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    </Col>
                    
                    <Col md={6} style={{padding: '10% 10% 0', position: 'relative'}} >
                    { testData && (
                        <div>
                            <h3 style={{marginBottom: '20px'}}>{testData.title}</h3>
                            <p style={{fontSize: '14px', whiteSpace: 'pre-wrap', wordBreak: 'break-word'}}>{testData.description}</p>
                        </div>
                    ) }
                    <div style={{padding: '6% 0', position: 'absolute', bottom: '0'}}>
                        <Link style={{fontSize: '20px', fontWeight: '500'}} to={`/${company}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="24" width="24" height="24" rx="12" transform="rotate(-90 0 24)" fill="black"/>
                                <path d="M6.5 17.75L6.5 6.25L18 6.25" stroke="white" strokeWidth="2"/>
                                <path d="M6.66657 6.4165L17.6666 17.4165" stroke="white" strokeWidth="2"/>
                            </svg> {company}
                        </Link>
                    </div>
                    </Col>
                </Row>  
              ) : (
                <div>
                    <div>
                    <Slider {...settings}>
                        {ImgData.map((img,index) => (
                            <CarouselImage url={img.url} title={img.title} key={index} />
                        ))}
                    </Slider>
                    </div>
                    
                    <div>
                    { testData && (
                        <div style={{padding: '3% 10%'}}>
                            <CarouselWritings title={testData.title} description={testData.description}/>
                        </div>
                    ) }
                    <div style={{padding: '6% 10%'}}>
                        <Link style={{fontSize: '20px', fontWeight: '500'}} to={`/${company}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="24" width="24" height="24" rx="12" transform="rotate(-90 0 24)" fill="black"/>
                            <path d="M6.5 17.75L6.5 6.25L18 6.25" stroke="white" strokeWidth="2"/>
                            <path d="M6.6666 6.41699L17.6666 17.417" stroke="white" strokeWidth="2"/>
                            </svg> {company}
                        </Link>
                    </div>
                    </div>
                </div>
              )}
            </motion.div>
        );
    } else {
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <div style={{paddingTop: '45%', textAlign: 'center'}}>No Projects uploaded for this studio</div>
                <div style={{margin: '0% 6%', padding: '6% 0'}}>
                    <Link style={{display: 'inline-block', fontSize: '20px', fontWeight: '500'}} to={`/${company}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="24" width="24" height="24" rx="12" transform="rotate(-90 0 24)" fill="black"/>
                        <path d="M6.5 17.75L6.5 6.25L18 6.25" stroke="white" strokeWidth="2"/>
                        <path d="M6.6666 6.41699L17.6666 17.417" stroke="white" strokeWidth="2"/>
                        </svg>
                        {company}
                    </Link>
                </div>
            </motion.div>
        );
    }
    
}

export default CarouselPage;