import React from "react";
import { Toaster } from "react-hot-toast";

const Recovery = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <form className="py-1 ">
        <div className="profile flex justify-center py-4">
          {/* <img src={avatar} alt="avatar" /> */}
        </div>

        <div className="textbox flex flex-col items-center gap-6">
          <span>Enter 6 digit OTP send Email</span>
          <input type="password" placeholder="otp" />
          <button type="submit">Let's Go</button>
        </div>

        <div className="text-center py-4">
          <span className="text-gray-500">
            cant get otp ?
            <button className="text-red-500" to="/register">
              resend otp
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Recovery;
