import * as Yup from "yup";

export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  newpassword: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup.string().when("newpassword", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string()
      .required("Password is required")
      .oneOf(
        [Yup.ref("newpassword")],
        "Password and Confirm Password should be same"
      ),
  }),
});
