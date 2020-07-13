import React from "react";
import "./Topic.css";

const Topic = ({ data, handleTopicChange }) => {
  return (
    <div className="topic" onClick={() => handleTopicChange(data.name)}>
      <h4>{`#${data.name}`}</h4>
    </div>
  );
};

export default Topic;
