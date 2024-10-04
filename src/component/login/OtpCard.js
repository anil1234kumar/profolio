import React from "react";
import CustomCard from "../common/cardCustom/CustomCard";
import { Container, Form, Image, Stack } from "react-bootstrap";
import { StoreImage } from "../../asset/storeImage/StoreImage";
import InputCustom from "../common/inputCustom/InputCustom";
import ButtonCustom from "../common/buttonCustom/ButtonCustom";

const OtpCard = () => {
  const { logo } = StoreImage;
  return (
    <>
      <div className="cardCenter-otp-page">
        <div className="otpMain">
          <Container>
            <CustomCard>
              <Form>
                <div className="mb-4">
                  <Image className="movebackLogo" src={logo} />
                </div>
                <div className="titleDiscriptions">
                  <h3 className="skyColor">
                    Enter the Verification code we sent to jayd119@gmail.com
                  </h3>
                  <p className="mt-3 mb-3">
                    This helps us keep your account secure by verifying that
                    it's really you.
                  </p>
                  <div className="mb-4">
                    <InputCustom
                      onClickRight=""
                      endText="Get Code"
                      htmlFor="formGroupPassword "
                      required
                      name="otp"
                      controlId="formGroupPassword"
                      placeholder="Enter your Password"
                      type="Enter Code"
                    />
                  </div>
                </div>
                <Stack direction="vertical">
                  <ButtonCustom
                    main
                    variant="primary"
                    type="submit"
                    className="mt-4"
                  >
                    Continue
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

export default OtpCard;
