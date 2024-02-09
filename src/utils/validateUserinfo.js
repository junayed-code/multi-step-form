import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userinfoShemas = yup.object().shape({
  name: yup.string().min(3).required("This field is required."),
  email: yup.string().email().required("This field is required."),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is invalid")
    .required("This field is required."),
});

/**
 *
 * @param {import("../../types").UserInfo} userinfo
 */
export function validateUserinfo(userinfo) {
  try {
    userinfoShemas.validateSync(userinfo, { abortEarly: false });
    return null;
  } catch (errors) {
    return errors.inner.reduce(
      (accu, error) => ({ ...accu, [error.path]: error.message }),
      {}
    );
  }
}
