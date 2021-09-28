import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctors from '../Doctors/Doctors';
import './Doctor.scss'
import { doctorsData } from './DoctorData';
const Doctor = () => {
    return (
        <Container className="doctorContainer">
            <h4>OUR DOCTORS</h4>
            <Row>
                {
                    doctorsData.map(data => <Doctors data={data}/>)
                }
            </Row>
        </Container>
    );
};

export default Doctor;