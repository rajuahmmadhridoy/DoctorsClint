import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppointmentBtDate from "../AppointmentBtDate/AppointmentBtDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./appointments.css";

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    fetch("http://localhost:4000/appointments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ date: selectedDate }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [selectedDate]);
  console.log(appointments);
  return (
    <Container fluid className='lightSky'>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={5} className="appointmentsCal">
          <h3>Appointments</h3>
          <Calendar onChange={handleDateChange} value={new Date()} />
        </Col>
        <Col md={5} className="appointmentsCal">
          <AppointmentBtDate appointments={appointments} />
        </Col>
      </Row>
    </Container>
  );
};

export default Appointments;
