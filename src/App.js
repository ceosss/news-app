import React, { Component } from "react";

import Header from "./components/Header/Header";
import TrendingTopics from "./components/TrendingTopics/TrendingTopics";
import { getNews } from "./REQUESTS";
import ClipLoader from "react-spinners/ClipLoader";
import Cards from "./components/Cards/Cards";

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
    this.handleLoading(true);
    let {
      data: { value },
    } = await getNews(id);

    this.setState({ news: value, currentTopic: key });
    this.handleLoading(false);
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
        />
        {this.state.loading ? (
          <div className="spinner">
            <ClipLoader
              size={60}
              color={"#123abc"}
              loading={this.state.loading}
            />
          </div>
        ) : null}

        {this.state.user != null ? (
          <div>
            <div className="trending-topics-div">
              <TrendingTopics
                handleTopicChange={this.handleTopicChange}
                handleLoading={this.handleLoading}
                currentTopic={this.state.currentTopic}
              />
            </div>
            {this.state.news.length !== 0 ? (
              <div className="cards">
                <Cards data={this.state.news} />
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
