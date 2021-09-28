import React from 'react';
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import styles from './HeaderMain.module.scss'
import chair from '../../../images/chairBg.png';
const HeaderMain = () => {
    const history = useHistory();
    const addAppointment = ()=>{
      history.push('/appointment')
    }
    return (
        <main className={styles.headerMain}>
            <Container>
                <Row style={{height:'600px'}} className="d-flex align-items-center">
                    <Col md={{ span: 5, offset: 1 }} className={styles.headerContent}>
                       <h3>Your New Smile Start Here</h3>
                       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, quod.</p>
                       <button  onClick={addAppointment}>GET APPOINMENT</button>
                    </Col>
                    <Col md={6}>
                        <div className="thumd">
                            <img src={chair} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default HeaderMain;