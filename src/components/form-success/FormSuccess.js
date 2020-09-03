import React from "react";

import img from "../../assets/img.png";

import "./form-success.style.css";

const FormSuccess = () => {
  return (
    <div className="container">
      <h1 className="title"> ~Thank you! We have received your request!~</h1>
      <div className="success-img">
        {" "}
        <img className="img" src={img} alt="" />
      </div>
    </div>
  );
};

export default FormSuccess;
