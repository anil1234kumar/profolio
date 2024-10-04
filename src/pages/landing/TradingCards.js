import React from "react";
import { Col, Image } from "react-bootstrap";
import "./Landing.scss";

const TradingCards = (props) => {
  const { hot } = props;
  const info = [
    {
      id: 1,
      icon: <i class="bi bi-gift-fill"></i>,
      title: "Get $,1000 Bonus",
      Discription: "Get $,1000 USDT bonus",
    },
    {
      id: 2,
      icon: <i class="bi bi-bar-chart-fill"></i>,
      title: "Spot Trading",
      Discription: "Buy & Sell cryptos",
      hot: true,
      date: "Published: June 18th, 2020",
    },
    {
      id: 3,
      icon: <i class="bi bi-grid-fill"></i>,
      title: "Grid Trading",
      Discription: "Buy & Sell cryptos",
    },
    {
      id: 4,
      icon: <i class="bi bi-clipboard-data-fill"></i>,
      title: "Copy Trading",
      Discription: "Buy & Sell cryptos",
    },
  ];
  return (
    <>
      {info.map((infoText) => (
        <Col key={infoText.id} lg={3}>
          <div className="TradingCard">
            {infoText.hot && (
              <div className="ribbon-container">
                <div className="ribbon-tag">Comming soon</div>
              </div>
            )}
            <div className="TradingCard_main">
              <span className="TradingCard_IconOuter">{infoText.icon}</span>
              <h4>
                {infoText.title}
                <br />
                <small>{infoText.Discription}</small>
              </h4>
            </div>
            {infoText.date && (
              <div className="card19-meta">{infoText.date}</div>
            )}
          </div>
        </Col>
      ))}
    </>
  );
};

export default TradingCards;
