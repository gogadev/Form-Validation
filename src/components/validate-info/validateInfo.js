export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username Required";
  }

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email Address Is Invalid";
  }

  if (!values.password) {
    errors.password = "Password Is Required";
  } else if (values.password.length < 6) {
    errors.password = "Password Needs To Be 6 Characters Or More";
  }

  if (!values.password2) {
    errors.password2 = "Password Is Required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords Do Not Match";
  }
  return errors;
}
