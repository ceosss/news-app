import React from "react";

import Background from "./background3.jpg";

import "./Cards.css";

const Cards = ({ data }) => {
  return (
    <div className="container-style">
      {data.map((e, index) => (
        <div
          key={index}
          style={{ backgroundColor: getColor() }}
          className="card-class"
        >
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
                ? e.provider[0].name.length > 11
                  ? e.provider[0].name.substring(0, 11) + ".."
                  : e.provider[0].name
                : "Unknown"}
            </p>
            <p>
              <a href={e.url} target="blank">
                Read More
              </a>
            </p>
          </span>
        </div>
      ))}
    </div>
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
  const random = Math.floor(Math.random() * colors.length);
  // console.log(colors[random]);

  return colors[random];
};
