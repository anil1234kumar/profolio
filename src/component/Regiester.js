import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/Validate";
import { Col, Container, Form, Image, Row, Stack } from "react-bootstrap";
import CustomCard from "./common/cardCustom/CustomCard";
import { StoreImage } from "../asset/storeImage/StoreImage";
import ButtonCustom from "./common/buttonCustom/ButtonCustom";
import InputCustom from "./common/inputCustom/InputCustom";

const Register = () => {
  const [file, setFile] = useState();
  const { accountCreate } = StoreImage;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values);
      console.log(values);
    },
  });
  /** formik doensn't support file upload so we need to create this handler */

  return (
    <>
      <div className="cardCenter-Register-page">
        <Container>
          <div className="RegisterMain">
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <Row className="justify-content-center justify-content-lg-between align-items-center ">
              <Col lg={6}>
                <div className="m-auto">
                  <div className="titleDiscriptions text-center">
                    <h3>
                      Build your wealth <br /> with
                      <span className="skyColor"> Future Exchange</span>
                    </h3>
                    <p className="mt-3 mb-3">
                      Set up your account and verify your photo ID to get <br />{" "}
                      started on trading crypto.
                    </p>
                  </div>
                  <Image fluid src={accountCreate} />
                </div>
              </Col>
              <Col lg={6}>
                <CustomCard className="m-auto">
                  <div className="titleDiscriptions">
                    <h3 className="skyColor">Create an account</h3>
                    <p className="mt-3 mb-3">Required field have an asterisk</p>
                  </div>
                  <Form onSubmit={formik.handleSubmit}>
                    <Stack
                      style={{ maxWidth: "100%" }}
                      direction="horizontal"
                      gap={3}
                    >
                      <div
                        style={{
                          flexGrow: 1,
                          flexShrink: 1,
                        }}
                      >
                        <InputCustom
                          single
                          name="email"
                          htmlFor="formGroupEmail"
                          required
                          value={formik.values.email}
                          controlId="formGroupEmail"
                          main
                          label="First Name"
                          placeholder="John"
                          type="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={
                            formik.touched.email && !!formik.errors.email
                          }
                          text={
                            formik.touched.email && formik.errors.email ? (
                              <div className="text-danger">
                                {formik.errors.email}
                              </div>
                            ) : null
                          }
                        />
                      </div>
                      <div
                        style={{
                          flexGrow: 1,
                          flexShrink: 1,
                        }}
                      >
                        <InputCustom
                          name="email"
                          htmlFor="formGroupEmail"
                          required
                          value={formik.values.email}
                          controlId="formGroupEmail"
                          main
                          label="Last Name"
                          placeholder="Last Name"
                          type="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={
                            formik.touched.email && !!formik.errors.email
                          }
                          text={
                            formik.touched.email && formik.errors.email ? (
                              <div className="text-danger">
                                {formik.errors.email}
                              </div>
                            ) : null
                          }
                        />
                      </div>
                    </Stack>
                    <div className="mb-4 mt-4">
                      <InputCustom
                        name="email"
                        htmlFor="formGroupEmail"
                        required
                        value={formik.values.email}
                        controlId="formGroupEmail"
                        main
                        label="Email"
                        placeholder="john.wick007@gmail.com"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.email && !!formik.errors.email
                        }
                        text={
                          formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">
                              {formik.errors.email}
                            </div>
                          ) : null
                        }
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
                        // onClick={() => navigate("/forgetReset")}
                        className="mt-4"
                      >
                        Create Account
                      </ButtonCustom>
                    </Stack>

                    {/* <input
                      {...formik.getFieldProps("email")}
                      type="text"
                      placeholder="Email*"
                    />
                    <input
                      {...formik.getFieldProps("username")}
                      type="text"
                      placeholder="Username*"
                    />
                    <input
                      {...formik.getFieldProps("password")}
                      type="text"
                      placeholder="Password*"
                    />

                    <div className="text-center py-4">
                      <span className="text-gray-500">
                        already Register
                        <Link className="text-red-500" to="/">
                          log in now
                        </Link>
                      </span>
                    </div> */}
                  </Form>
                </CustomCard>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Register;
