import React from 'react';
import { Container, Row } from 'react-bootstrap';
import InfoCard from '../InfoCard/InfoCard';
import './BusinessInfo.scss'
import { infosData } from './BusinessInfoData';
const BusinessInfo = () => {
    return (
        <Container>
            <div className="d-flex justify-content-center">
               <div className="containerWidth row">
               {
                    infosData.map(data => <InfoCard data={data} />)
                }
               </div>
            </div>
        </Container>
    );
};

export default BusinessInfo;