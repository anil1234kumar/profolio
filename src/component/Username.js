import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/Validate";

const Username = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <form className="py-1 " onSubmit={formik.handleSubmit}>
        <div className="profile flex justify-center py-4">
          {/* <img src={avatar} alt="avatar" /> */}
        </div>

        <div className="textbox flex flex-col items-center gap-6">
          <input
            {...formik.getFieldProps("username")}
            type="text"
            placeholder="Username"
          />
          <button type="submit">Let's Go</button>
        </div>

        <div className="text-center py-4">
          <span className="text-gray-500">
            Not a Member{" "}
            <Link className="text-red-500" to="/register">
              Register Now
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Username;
