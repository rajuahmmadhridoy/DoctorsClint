import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";
import "./AppointmentForm.scss";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const AppointmentForm = ({
  modalIsOpen,
  closeModal,
  appointmentOn,
  selectedDate,
})  => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = selectedDate;
    data.createdDate = new Date();
    data.action = 1;
    fetch("http://localhost:4000/addappointment", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then(success => {
      if(success){
        closeModal();
        alert('success')
      }
    })
  };

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{appointmentOn}</h2>
        <p>Date{selectedDate.toDateString()}</p>

        {/* <button onClick={closeModal}>close</button> */}
        <form className="FormContainer" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              {...register("firstName", {
                // pattern: /^[A-Za-z]+$/i,
                required: true,
                minLength: 4,
              })}
              placeholder="Your name"
              className="form-control"
            />
            {errors.firstName?.type === "required" && "First name is required"}
          </div>
          <div className="form-group">
            <input
              type="number"
              {...register("number", { required: true, pattern: [0 - 1] })}
              placeholder="Your Phone Number"
              className="form-control"
            />
            {errors.number && "Please enter number for age."}
          </div>
          <div className="form-group">
            <input
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
                required: true,
              })}
              placeholder="Your email"
              className="form-control"
            />
            {errors.email?.type === "required" && "invalid email address"}
          </div>
          <Row>
            <Col md={4}>
              <div className="form-group">
                <select {...register("gender")} className="form-control">
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
                {errors.gender?.type === "required" && "invalid gender"}
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group">
                <input
                  type="number"
                  {...register("number", { required: true, pattern: [0 - 1] })}
                  className="form-control"
                  placeholder="Your name"
                />
                {errors.number && "Please enter number for age."}
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group">
                <input
                  type="number"
                  {...register("number", { required: true, pattern: [0 - 1] })}
                  className="form-control"
                  placeholder="Your name"
                />
                {errors.number && "Please enter number for age."}
              </div>
            </Col>
          </Row>
          <input className="subBtn" type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
