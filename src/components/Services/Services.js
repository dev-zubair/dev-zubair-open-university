import React from "react";
import "./Services.css";

const Services = (props) => {
  const { name, picture, day, duration, course } = props.course;
  return (
    <div>
      <div className="card-style" style={{ width: "300px" }}>
        <div className="card h-100 mb-5">
          <img src={picture} alt="" />
          <div className="card-body ">
            <h5>{course}</h5>
            <h5 className="card-title">By {name}</h5>
            <p className="card-title">Duration: {duration}</p>
            <p>Classes: {day}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
