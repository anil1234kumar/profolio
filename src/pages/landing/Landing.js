import React from "react";
import Layout from "../../component/layout/Layout";
import CategaryCard from "../../component/card/CategaryCard";
import { Col, Container, Image, Row } from "react-bootstrap";
import animal from "../../asset/img/animal.jpg";
import bird from "../../asset/img/bird.jpg";
import plant from "../../asset/img/plant.jpg";
import fish from "../../asset/img/fish.jpg";
import { Link } from "react-router-dom";
import "./Landing.scss";
import { ButtonTudo } from "../todoCreate/buttonTodo/ButtonTudo";
import { StoreImage } from "../../asset/storeImage/StoreImage";
import ButtonCustom from "../../component/common/buttonCustom/ButtonCustom";
import TradingCards from "./TradingCards";
import ServiceCard from "./ServiceCard";

const Landing = () => {
  const { currencyGroup, whyFuture } = StoreImage;
  // const twoNumberMultiply = (a, b) => {
  //   console.log(b);
  //   console.log(a);
  //   return a * b;
  // };
  // const x = twoNumberMultiply(5, 7);
  // console.log(x);

  // const abc = (document.getElementById("abc").innerHTML = x);

  const dateshow = () => {
    document.getElementById("demo").innerHTML = Date();
    document.getElementById("demo").style.color = "green";
  };
  const nameJob = (name, job, targetId) => {
    console.log("Name:", name);
    console.log("Job:", job);
    document.getElementById(targetId).innerHTML =
      "welcome  " + name + "THE JOB IS " + job;
  };

  const typeCard = [
    {
      id: 1,
      category: "Animals",
      img: animal,
      path: "/animal",
    },
    {
      id: 2,
      category: "Birds",
      img: bird,
      path: "/birds",
    },
    {
      id: 3,
      category: "Plants",
      img: plant,
      path: "/trees",
    },
    {
      id: 4,
      category: "Fish",
      img: fish,
      path: "/fishes",
    },
  ];

  const typeCardlist = typeCard.map((type) => (
    <Col lg={3} key={type.id}>
      <Link to={type.path}>
        <CategaryCard
          categoryDesign={true}
          category={type.category}
          img={type.img}
        />
      </Link>
    </Col>
  ));

  return (
    <>
      <Layout>
        <div className="landing-page">
          <Container style={{ padding: "0 150px" }} fluid>
            <section>
              <Row className="justify-content-center justify-content-lg-between align-items-center ">
                <Col>
                  <div>
                    <div className="titleDiscriptions">
                      <h5>
                        Buy and Sell crypto using our intelligent technology
                      </h5>
                      <h2>
                        CRYPTOCURRENCY
                        <span className="skyColor"> EXCHANGE</span>
                      </h2>
                      <p>
                        With FUTURE you can buy, sell & trade digital currencies
                        with ease and confidence.
                      </p>
                    </div>
                    <ButtonCustom variant="outline-primary" gamingBtn>
                      <span className="rightSide hideShow ">Get Started</span>
                    </ButtonCustom>
                  </div>
                </Col>
                <Col>
                  <Image fluid src={currencyGroup} alt="image" />
                </Col>
              </Row>
              <Row className="mt-5">
                <TradingCards />
              </Row>
            </section>
            <section>
              <Row className="justify-content-center justify-content-lg-between align-items-center ">
                <Col>
                  <Image fluid src={whyFuture} alt="image" />
                </Col>
                <Col>
                  <div>
                    <h2>
                      Why choose
                      <span className="skyColor"> FUTURE </span> <br />
                      as your crypto exchange?
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </Col>
              </Row>
            </section>
            <section>
              <ServiceCard />
            </section>
          </Container>
        </div>
        {/* <div id="module" className="content-area custom-cursor ">
          <section className="first-sec">
            <Container>
              <Row>{typeCardlist}</Row>
            </Container>
          </section>
          <section>
            <Container>
              <ButtonTudo
                id="number"
                onClick={() => {
                  document.getElementById("number").innerHTML = 5 + 6;
                }}
              >
                number
              </ButtonTudo>
              <p id="demo">click date and time to see</p>
              <ButtonTudo onClick={dateshow}>Date and Time</ButtonTudo>
              <ButtonTudo
                id="textPrint"
                onClick={() => {
                  document.getElementById("textPrint").innerHTML = "updated";
                }}
              >
                click for update
              </ButtonTudo>
              <ButtonTudo
                onClick={() => {
                  window.alert("hello");
                }}
              >
                Allert
              </ButtonTudo>
              <p id="namejob"></p>
              <ButtonTudo
                onClick={() => {
                  nameJob("RAMAN", "KSDFDKLSF", "namejob");
                }}
              >
                tryit
              </ButtonTudo>
              <p id="namejob1"></p>
              <ButtonTudo
                onClick={() => {
                  nameJob("RAMAN nagi", "KSDFDKLF kna;llsd", "namejob1");
                }}
              >
                tryit
              </ButtonTudo>
            </Container>
          </section>
          <section>
            <Container>
              <div>hello kya hal ha</div>
            </Container>
          </section>
        </div> */}
      </Layout>
    </>
  );
};

export default Landing;
