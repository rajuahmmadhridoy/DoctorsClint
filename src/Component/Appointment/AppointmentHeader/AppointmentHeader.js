import { Col, Container, Row } from "react-bootstrap";
import chair from "../../../images/chairBg.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleDateChange}) => {

  return (
    <main>
      <Container>
        <Row style={{ height: "600px" }} className="d-flex align-items-center">
          <Col md={{ span: 5, offset: 1 }}>
            <Calendar onChange={handleDateChange} value={new Date()} />
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

export default AppointmentHeader;
