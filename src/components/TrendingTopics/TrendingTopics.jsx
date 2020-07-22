import React, { Component } from "react";
import { getTendingTopics } from "./../../REQUESTS";
import Topic from "../Topic/Topic";
import "./TrendingTopics.css";
import Spinner from "../Spinner/Spinner";

class TrendingTopics extends Component {
  state = {
    trending_topics: [{ name: "Headlines", id: "headlines" }],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    let {
      data: { trending_topics },
    } = await getTendingTopics();
    this.setState((prevState) => {
      return {
        trending_topics: prevState.trending_topics.concat(trending_topics),
        loading: false,
      };
    });
  }

  render() {
    const { trending_topics } = this.state;
    const { handleTopicChange, currentTopic } = this.props;
    return this.state.loading ? (
      <Spinner />
    ) : (
      <div className="trending-container">
        <div className="trending">
          <h3>
            TRENDING{" "}
            <span role="img" aria-label="emoji">
              {" "}
              🔥{" "}
            </span>{" "}
            TOPICS
          </h3>
        </div>
        <div className="trending-topics">
          {trending_topics.map((topic, index) => (
            <Topic
              data={topic}
              key={topic.id}
              keys={index}
              handleTopicChange={handleTopicChange}
              isCurrentTopic={index === currentTopic ? true : false}
              className="topic"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TrendingTopics;
