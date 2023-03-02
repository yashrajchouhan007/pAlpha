import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Please enter the email address"),
  password: Yup.string().required("Please enter password"),
});
