import * as Yup from "yup";

export const forgotPasswordEmailSchema = Yup.object().shape({
  userEmail: Yup.string().required("Please enter the email address"),
});
export const forgotPasswordVerifySchema = Yup.object().shape({
  verificationCode: Yup.string()
    .required("Code is required")
    .matches(/^\d{6}$/, "Code must be a six-digit number"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string()
      .required("Password is required")
      .oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password should be same"
      ),
  }),
});
