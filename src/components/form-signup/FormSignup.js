import React from "react";

import validate from "../validate-info/validateInfo";

import useForm from "../custom-use-form/useForm";

import image from "../../assets/image.png";

import "./form-signup.style.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="container">
      <h1 className="title">~Form Validation | Custom Hooks~</h1>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="main-img">
          <img className="image" src={image} alt="" />
        </div>
        <div className="form-input">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Your Username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p className="text">{errors.username}</p>}
        </div>
        <div className="form-input">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text">{errors.email}</p>}
        </div>
        <div className="form-input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text">{errors.password}</p>}
        </div>
        <div className="form-input">
          <label>Confirm Password</label>
          <input
            type="password"
            name="password2"
            placeholder="Confirm Your Password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p className="text">{errors.password2}</p>}
        </div>
        <button className="btn" type="submit">
          Sign Up
        </button>
        <span className="login">
          Already have an account? Login <a href="#">Here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
