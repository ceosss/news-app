import React from "react";
import { Card, CardWrapper } from "react-swipeable-cards";

import "./Cards.css";

const Cards = ({ data }) => {
  console.log(data);

  return (
    <CardWrapper>
      {data.map((e, index) => (
        <Card key={index} style={CardStyle}>
          <img src={e.urlToImage} alt={e.title} className="img" />
          <span className="title">
            <h3>{e.title}</h3>
          </span>

          <span className="description">
            <p>{e.description}</p>
          </span>

          <span className="source">
            <p>Source: {e.source.name}</p>
          </span>
        </Card>
      ))}
    </CardWrapper>
  );
};
export default Cards;

const getColor = () => {
  const colors = [
    "#FEBCC8",
    "#FFFFD8",
    "#EAEBFF",
    "#E0FEFE",
    "#D3EEFF",
    "#EFB0C9",
    "#F4C2D7",
    "#F8DAE9",
    "#B9D6F3",
    "#A1C9F1",
    "#F1E8D9",
  ];
  const random = Math.floor(Math.random() * colors.length + 1);
  return colors[random];
};

const CardStyle = {
  backgroundColor: getColor(),
  borderRadius: "15px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
  padding: "15px 10px",
};
