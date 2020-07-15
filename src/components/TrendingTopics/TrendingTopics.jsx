import React, { Component } from "react";
import { getTendingTopics } from "./../../REQUESTS";
import Topic from "../Topic/Topic";
import "./TrendingTopics.css";

class TrendingTopics extends Component {
  state = {
    // trending_topics: [
    //   { name: "Headlines", id: "Headlines" },
    //   { name: "Central Board of Secondary Education", id: 1 },
    //   { name: "COVID-19", id: 2 },
    //   { name: "CBSE Exam", id: 3 },
    //   { name: "class 12", id: 4 },
    //   { name: "India", id: 5 },
    //   { name: "Nepal", id: 6 },
    //   { name: "Ashok Gehlot", id: 7 },
    //   { name: "Sachin Pilot", id: 8 },
    //   { name: "Sundar Pichai", id: 9 },
    //   { name: "Indian National Congress", id: 10 },
    // ],
    trending_topics: [{ name: "Headlines", id: "headlines" }],
  };
  async componentDidMount() {
    this.props.handleLoading(true);
    let {
      data: { trending_topics },
    } = await getTendingTopics();
    this.setState((prevState) => {
      return {
        trending_topics: prevState.trending_topics.concat(trending_topics),
      };
    });
    this.props.handleLoading(false);
  }

  render() {
    const { trending_topics } = this.state;
    const { handleTopicChange, currentTopic } = this.props;
    return (
      <div className="trending-container">
        <div className="trending">
          <h3>TRENDING TOPICS</h3>
        </div>
        <div className="trending-topics">
          {trending_topics.map((topic, index) => (
            <Topic
              data={topic}
              key={topic.id}
              keys={index}
              handleTopicChange={handleTopicChange}
              isCurrentTopic={index === currentTopic ? true : false}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TrendingTopics;
