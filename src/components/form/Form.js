import React, { useState } from "react";

import FormSignup from "../form-signup/FormSignup";
import FormSuccess from "../form-success/FormSuccess";

import "./form.style.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="container">
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Form;
