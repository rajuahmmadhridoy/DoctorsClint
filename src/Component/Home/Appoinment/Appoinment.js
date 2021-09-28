import { Container, Row, Col } from "react-bootstrap";
import "./Appoinment.scss";
import doctors from "../../../images/docuor.png";
const Appoinment = () => {
 
  return (
    <div className="container contentInner">
      <div className="row ">
        <div className="col-md-5">
          <img
            src={doctors}
            alt=""
          />
        </div>
        <div className="col-md-7 mt-2 appointmentContent">
          <h5>APPOINMENT</h5>
          <h3>Make an Appoinment Today</h3>
          <p>
            it is a long established fact that a reader will be distractedby the
            readable content of a page when looking at its
          </p>
          {/* <Link to='/appointment'><button>Learn More</button></Link> */}
          <button>Learn More</button>
        </div>
      </div>

      {/* <div className="appoinmentBg"></div>
        <Row>
          <Col md={6}>
            <div className="doctorImg d-none d-md-block">
              <img src={doctors} alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className="appoinmentContent">
              <h5>APPOINMENT</h5>
              <h3>Make an Appoinment Today</h3>
              <p>
                it is a long established fact that a reader will be distractedby
                the readable content of a page when looking at its
              </p>
              <button>Learn More</button>
            </div>
          </Col>
        </Row> */}
    </div>
  );
};

export default Appoinment;
