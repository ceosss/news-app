import React from "react";
import "./Topic.css";

const Topic = ({ data, handleTopicChange, keys, isCurrentTopic }) => {
  return (
    <div
      className={`topic ${isCurrentTopic ? "selected-topic" : ""}`}
      onClick={() => handleTopicChange(data.name, keys)}
    >
      <h4>{`#${data.name}`}</h4>
    </div>
  );
};

export default Topic;
