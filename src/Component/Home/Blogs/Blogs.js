import React from "react";
import { Col } from "react-bootstrap";
import "./Blogs.scss";
const Blogs = (props) => {
  const { name, date, bg, title, description, img } = props.data;
  return (
    <Col md={4}>
      <div className="blogsContainer">
        <div className="blogsContent">
          <div className="d-flex blogspersonTitle">
            <div className="blogsPersonImg">
              <img src={img} alt="" />
            </div>
            <div className="blogsPersonTitlerInfo">
              <h4>{name}</h4>
              <p>{date}</p>
            </div>
          </div>
            <div className="blogsMainContent">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
        <div className="blogsContentHover">
            <h4>{name}</h4>
            <p>{date}</p>
            <h3>{title}</h3>
        </div>
      </div>
    </Col>
  );
};

export default Blogs;
