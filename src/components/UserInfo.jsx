import Field from "./shared/Field";
import SidebarHeader from "./SidebarHeader";

/**
 *
 * @param {{ dispatch: import("react").Dispatch<import("../../types").ReducerAction>, userinfo: import("../../types").UserInfo, errors: import("../../types").UserInfoError, touched: import("../../types").Touched}} param0
 */
function UserInfo({ dispatch, userinfo, errors, touched }) {
  const { name, email, phone } = userinfo;
  function handleChange(e) {
    dispatch({
      type: "setUserinfo",
      payload: { [e.target.name]: e.target.value },
    });
  }
  function handleBlur(e) {
    if (!touched[e.target.name]) {
      dispatch({ type: "setTouched", payload: { [e.target.name]: true } });
    }
  }

  return (
    <>
      <SidebarHeader
        title="Personal info"
        subTitle="Please provide your name, email address, and phone number."
      />

      <div className="space-y-5">
        <Field
          id="name"
          label="Name"
          value={name}
          error={touched.name && errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g. Stephen King"
        />
        <Field
          id="email"
          type="email"
          value={email}
          error={touched.email && errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <Field
          id="phone"
          type="number"
          value={phone}
          error={touched.phone && errors.phone}
          onBlur={handleBlur}
          onChange={handleChange}
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </>
  );
}

export default UserInfo;
