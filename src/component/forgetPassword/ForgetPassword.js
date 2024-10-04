import React, { useState } from "react";
import { Container, Form, Image, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CustomCard from "../common/cardCustom/CustomCard";
import { StoreImage } from "../../asset/storeImage/StoreImage";
import InputCustom from "../common/inputCustom/InputCustom";
import ButtonCustom from "../common/buttonCustom/ButtonCustom";

const ForgetPassword = () => {
  const { logo } = StoreImage;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="cardCenter-forgetPassword-page">
        <div className="">
          <Container>
            <div className="mb-4">
              <ButtonCustom
                variant="outline-primary"
                onClick={() => navigate("/login")}
              >
                <span className="hideShow">back</span>
              </ButtonCustom>
            </div>
            <CustomCard>
              <Form>
                <div className="mb-4">
                  <Image className="movebackLogo" src={logo} />
                </div>
                <div className="titleDiscriptions">
                  <h3 className="skyColor">Change Password</h3>
                  <p className="mt-3 mb-3">Please choose a new password.</p>
                </div>
                <div className="mb-4 mt-4">
                  <InputCustom
                    onClickRight={togglePasswordVisibility}
                    endText={
                      showPassword ? (
                        <i class="bi bi-eye"></i>
                      ) : (
                        <i class="bi bi-eye-slash"></i>
                      )
                    }
                    label="New Password"
                    name="email"
                    htmlFor="formGroupEmail"
                    required
                    // controlId="formGroupEmail"
                    main
                    placeholder="Please enter the new password"
                    type="text"
                  />
                </div>
                <div className="mb-4 mt-4">
                  <InputCustom
                    onClickRight={togglePasswordVisibility}
                    endText={
                      showPassword ? (
                        <i class="bi bi-eye"></i>
                      ) : (
                        <i class="bi bi-eye-slash"></i>
                      )
                    }
                    label="Confirm New Password"
                    name="email"
                    htmlFor="formGroupEmail"
                    required
                    // controlId="formGroupEmail"
                    main
                    placeholder="Please confirm the password again"
                    type="text"
                  />
                </div>
                <Stack direction="vertical">
                  <ButtonCustom
                    main
                    variant="primary"
                    onClick={() => navigate("/forgetReset")}
                    className="mt-4"
                  >
                    Reset password
                  </ButtonCustom>
                </Stack>
              </Form>
            </CustomCard>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
