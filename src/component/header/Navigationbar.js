import React, { useContext } from "react";
import {
  Container,
  Nav,
  Offcanvas,
  Navbar,
  Image,
  Stack,
  Form,
} from "react-bootstrap";
import "./Navigationbar.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { StoreImage } from "../../asset/storeImage/StoreImage";
import ButtonCustom from "../common/buttonCustom/ButtonCustom";
import { ThemeContext } from "../theme/ThemeProvider";

function Navigationbar(props) {
  const navigate = useNavigate();
  const { logo } = StoreImage;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {
    main,
    sideToggel,
    onclickSidebar,
    className,
    logoImg,
    toggelbtnClass,
  } = props;

  return (
    <>
      <header className={`headerDesign ${className}`}>
        <Navbar className="CustomNabar" fixed="top" expand="xxl">
          <Container fluid>
            {logoImg && (
              <Navbar.Brand href="#home">
                <Image src={logo} alt="icon" />
              </Navbar.Brand>
            )}
            {sideToggel && (
              <ButtonCustom
                className={toggelbtnClass}
                onClick={onclickSidebar}
                variant="outline-primary"
              >
                {sideToggel}
              </ButtonCustom>
            )}
            <div
              className="headerDesign_main"
              style={{ display: "inline-flex" }}
            >
              {main && (
                <>
                  <Navbar.Toggle
                    style={{ marginRight: "15px" }}
                    aria-controls={`offcanvasNavbar-expand`}
                  />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand`}
                    aria-labelledby={`offcanvasNavbarLabel-expand`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                        Offcanvas
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                        <Link href="#">Why</Link>
                        <Link href="#">Our</Link>
                        <Link href="#">Eco</Link>
                        <Link href="#">market</Link>
                        <Link href="#">Exchange</Link>
                        <Link href="#">swap</Link>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </>
              )}
              <Stack gap={3} direction="horizontal">
                <ButtonCustom
                  main
                  onClick={() => navigate("/login")}
                  variant="primary"
                  title="login"
                >
                  Login
                </ButtonCustom>
                <ButtonCustom
                  gamingBtn
                  main
                  onClick={() => navigate("/signup")}
                  variant="primary"
                  type="button"
                >
                  Register
                </ButtonCustom>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  onClick={toggleTheme}
                />
              </Stack>
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Navigationbar;
