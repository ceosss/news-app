import React from "react";
import { Card, CardWrapper } from "react-swipeable-cards";
import Background from "./background3.jpg";

import "./Cards.css";

const Cards = ({ data }) => {
  // console.log(data);

  return (
    <CardWrapper style={{ paddingBottom: "100px", paddingTop: "30px" }}>
      {data.map((e, index) => (
        <Card key={index} style={CardStyle} className="card-class">
          <img
            src={e.image ? e.image.thumbnail.contentUrl : Background}
            alt={e.title}
            className="img"
          />
          <span className="title">
            <h3>{e.name}</h3>
          </span>

          <span className="description">
            <p>
              {e.description.length > 310
                ? e.description.substring(0, 310) + "..."
                : e.description}
            </p>
          </span>

          <span className="source">
            <p>
              Source:{" "}
              {e.provider[0].name
                ? e.provider[0].name.length > 20
                  ? e.provider[0].name.substring(0, 20) + "..."
                  : e.provider[0].name
                : "Unknown"}
            </p>
            <p>
              <a href={e.url} target="blank">
                Read More
              </a>
            </p>
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
  console.log(colors[random]);

  return colors[random];
};

const CardStyle = {
  backgroundColor: getColor(),
  borderRadius: "15px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
  padding: "15px 10px",
  width: "375px",
  height: "700px",
};
