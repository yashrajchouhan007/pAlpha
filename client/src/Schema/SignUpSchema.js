import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signUpvalidationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .max(40)
    .required("Please enter first name"),
  lastName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid last name")
    .max(40)
    .required("Please enter last name"),
  phoneNumber: Yup.string()
    .required("Please enter phone number")
    .matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter email"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Your password must contain 8 characters with at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  agree: Yup.boolean().oneOf([true], "Term & condition is required"),
});
