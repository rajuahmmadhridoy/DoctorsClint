import React, { useState } from "react";
import { Col } from "react-bootstrap";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./BookingCard.scss";
const BookingCard = (props) => {
  const { subject, visitingHour, totalSpace} = props.data;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Col md={4}>
      <div className="bookingCardInner">
        <h3>{subject}</h3>
        <h4>{visitingHour}</h4>
        <p>{totalSpace} SPACES ABAILABLE</p>
        <button onClick={openModal}>BOOK APPOINMENT</button>
        <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={subject} closeModal={closeModal} selectedDate={props.selectedDate}/>
      </div>
    </Col>
  );
};

export default BookingCard;
