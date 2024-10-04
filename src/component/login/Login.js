import React, { useContext, useState } from "react";
import { Form, Card, Nav, Image, Container, Stack } from "react-bootstrap";
import "./Login.scss";
import { StoreImage } from "../../asset/storeImage/StoreImage";
import { ThemeContext } from "../theme/ThemeProvider";
import ButtonCustom from "../common/buttonCustom/ButtonCustom";
import InputCustom from "../common/inputCustom/InputCustom";
import { useFormik } from "formik";
import CustomCard from "../common/cardCustom/CustomCard";
import { Link } from "react-router-dom";
import BasicLayout from "../layout/BasicLayout";
import Customloader from "../loader/Customloader";

const validate = (values) => {
  const errors = {};

  // Validate email
  if (!values.email && values.activeTab === "#Email") {
    errors.email = "Required";
  } else if (
    values.activeTab === "#Email" &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  // Validate password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Password must contain at least one lowercase letter";
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "Password must contain at least one number";
  } else if (!/[!@#$%^&*]/.test(values.password)) {
    errors.password = "Password must contain at least one special character";
  }

  // Validate phone
  if (!values.phone && values.activeTab === "#PhoneNumber") {
    errors.phone = "Required";
  } else if (
    values.activeTab === "#PhoneNumber" &&
    !/^[0-9]{10}$/i.test(values.phone)
  ) {
    errors.phone = "Phone number must be 10 digits";
  }

  return errors;
};

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const { logo } = StoreImage;
  const [activeTab, setActiveTab] = useState("#Email");
  const isAuth = localStorage.getItem("user");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = (values) => {
    if (
      activeTab === "#Email" &&
      values.email === "anil.kumar@antiersolutions.com" &&
      values.password === "Anil@123"
    ) {
      alert("This is a valid user");
    } else if (
      activeTab === "#PhoneNumber" &&
      values.phone === "6284318583" &&
      values.password === "Anil@123"
    ) {
      alert("This is a valid user");
    } else {
      alert("Wrong credentials");
      return;
    }

    // Store the values as an object in local storage
    const userData = {
      email: values.email,
      password: values.password,
      phone: values.phone,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      activeTab: "#Email",
    },
    validate,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    <>
      <BasicLayout>
        {/* <Customloader /> */}
        {isAuth ? (
          <h6>Logged In Successfully</h6>
        ) : (
          <h6>Logged Out Successfully</h6>
        )}
        <div className={`${theme} login-page`}>
          <Container>
            <ButtonCustom
              variant="outline-primary"
              // onClick={() => navigate("/login")}
            >
              <span className="hideShow backbtn">back</span>
            </ButtonCustom>

            <div className="cardCenter-loginMain">
              {isAuth ? (
                <ButtonCustom
                  main
                  style={{ display: "block" }}
                  onClick={handleLogout}
                  variant="primary"
                  type="button"
                >
                  Logout
                </ButtonCustom>
              ) : (
                <>
                  <CustomCard>
                    <Form onSubmit={formik.handleSubmit}>
                      <div className="mb-4">
                        <Image className="movebackLogo" src={logo} />
                      </div>
                      <div className="titleDiscriptions">
                        <h3 className="skyColor">Sign in to Future Exchange</h3>
                        <p className="mt-3 mb-3">
                          Not your device? Use a private or incognito window to
                          sign in.
                        </p>
                      </div>
                      <Nav
                        variant="tabs"
                        defaultActiveKey="#Email"
                        onSelect={(selectedKey) => {
                          setActiveTab(selectedKey);
                          formik.setFieldValue("activeTab", selectedKey);
                        }}
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="#Email">Email</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="#PhoneNumber">
                            Phone number
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      {activeTab === "#Email" ? (
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
                      ) : (
                        <div className="mb-4 mt-4">
                          <InputCustom
                            htmlFor="formGroupPhone "
                            name="phone"
                            value={formik.values.phone}
                            controlId="formGroupPhone"
                            main
                            label="Phone Number"
                            placeholder="6284318583"
                            type="tel"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                              formik.touched.phone && !!formik.errors.phone
                            }
                            text={
                              formik.touched.phone && formik.errors.phone ? (
                                <div className="text-danger">
                                  {formik.errors.phone}
                                </div>
                              ) : null
                            }
                          />
                        </div>
                      )}
                      <div className="mb-4">
                        <InputCustom
                          onClickRight={togglePasswordVisibility}
                          endText={
                            showPassword ? (
                              <i class="bi bi-eye"></i>
                            ) : (
                              <i class="bi bi-eye-slash"></i>
                            )
                          }
                          htmlFor="formGroupPassword "
                          required
                          name="password"
                          value={formik.values.password}
                          controlId="formGroupPassword"
                          label="Password"
                          placeholder="Enter your Password"
                          type="password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={
                            formik.touched.password && !!formik.errors.password
                          }
                          text={
                            formik.touched.password &&
                            formik.errors.password ? (
                              <div className="text-danger">
                                {formik.errors.password}
                              </div>
                            ) : null
                          }
                        />
                      </div>
                      <div className="linkDesign">
                        <Link
                          className="mb-4 d-block text-end "
                          to="/forgetPassword"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Stack direction="vertical" gap={4}>
                        <ButtonCustom main variant="primary" type="submit">
                          Continue
                        </ButtonCustom>
                        <ButtonCustom variant="outline-primary">
                          Create an account
                        </ButtonCustom>
                      </Stack>
                    </Form>
                  </CustomCard>
                </>
              )}
            </div>
          </Container>
        </div>
      </BasicLayout>
    </>
  );
};

export default Login;
