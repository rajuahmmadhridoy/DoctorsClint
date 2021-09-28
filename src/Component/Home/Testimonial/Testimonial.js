import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Testimonial.scss'
import { testimonialData } from './TestimonialData';
import tooth3 from '../../../images/teath.png'
import Testimonials from '../Testimonials/Testimonials';
const Testimonial = () => {
    return (
        <Container className='testimonialContainer'>
            <div className="d-flex justify-content-between testimonialHeader">
                <div className="testimonialheaderContent">
                    <h4>TESTIMONIAL</h4>
                    <h3>What's Our Patiens <br /> Says</h3>
                </div>
                <div className="testimonialHeaderThumb">
                    <img src={tooth3} alt="" />
                </div>
            </div>
            <Row>
                {
                    testimonialData.map(data => <Testimonials data={data}/>)
                }
            </Row>
        </Container>
    );
};

export default Testimonial;