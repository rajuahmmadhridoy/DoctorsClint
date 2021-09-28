import React from "react";

const AppointmentBtDate = ({ appointments }) => {
    const handleAction = (action,id)=>{
        fetch(`http://localhost:4000/updateAppointment/${id}`, {
            method: "PATCH",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({action:action.target.value}),
          })
          .then((res) => res.json())
          .then(success => {
          })
    }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Schedule</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((data, index) => (
            <tr>
              <td>{data.firstName}</td>
              <td>{data.date}</td>
              <td>
                <select 
                onChange={(e)=>handleAction(e,data._id)}
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected={data.action == 1} value="1">Not Visited</option>
                  <option selected={data.action == 2} value="2">Visited</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentBtDate;
