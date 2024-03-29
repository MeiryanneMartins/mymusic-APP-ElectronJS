import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    username: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Invalid email").required("Mandatory"),
    password: Yup.string().required(true),
    username: Yup.string().required(true),
  });
}

