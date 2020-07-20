import React from "react";

import ReactCardCarousel from "react-card-carousel";

const data = ["Alexandre", "Thomas", "Lucien"];

export const Wrapper = () => {
  return (
    <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
      {data.map((item) => (
        <div style={CARD_STYLE}>{item}</div>
      ))}
    </ReactCardCarousel>
  );
};

const CARD_STYLE = {
  height: "200px",
  width: "200px",
  paddingTop: "80px",
  textAlign: "center",
  background: "#52C0F5",
  color: "#FFF",
  fontSize: "12px",
  textTransform: "uppercase",
  borderRadius: "10px",
};
