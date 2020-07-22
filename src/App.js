import React, { Component } from "react";

import Header from "./components/Header/Header";
import TrendingTopics from "./components/TrendingTopics/TrendingTopics";
import { getNews } from "./REQUESTS";
import Cards from "./components/Cards/Cards";
import Spinner from "./components/Spinner/Spinner";

import "./App.css";

class App extends Component {
  state = {
    loading: false,
    news: [],
    currentTopic: "0",
    user: null,
  };

  handleLoading = (value) => {
    if (value === true) {
      this.setState({ loading: true });
    } else {
      this.setState({ loading: false });
    }
  };
  handleTopicChange = async (id, key) => {
    this.setState({ loading: true });
    let {
      data: { value },
    } = await getNews(id);

    this.setState({ news: value, currentTopic: key, loading: false });
  };
  handleLogin = (user) => {
    this.setState({ user });
  };

  async componentDidMount() {
    await this.handleTopicChange(this.state.currentTopic, 0);
  }

  render() {
    return (
      <div className="App">
        <Header
          handleLogin={this.handleLogin}
          handleLoading={this.handleLoading}
          className="header"
        />
        {this.state.user != null ? (
          <div className="container">
            <div className="trending-topics-div">
              <TrendingTopics
                handleTopicChange={this.handleTopicChange}
                handleLoading={this.handleLoading}
                currentTopic={this.state.currentTopic}
                className="trending-topics"
              />
            </div>
            {this.state.loading ? (
              <Spinner />
            ) : this.state.news.length !== 0 ? (
              <div className="cards">
                <Cards data={this.state.news} className="card" />
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="footer">
          <p>
            MADE WITH{" "}
            <span role="img" aria-label="heart">
              🧡
            </span>{" "}
            by{" "}
            <a href="https://www.instagram.com/ceo.sss/" target="blank">
              {" "}
              ceo.sss
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
