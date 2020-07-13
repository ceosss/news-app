import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header/Header";

import TrendingTopics from "./components/TrendingTopics/TrendingTopics";
import { getNews } from "./REQUESTS";
import ClipLoader from "react-spinners/ClipLoader";
import Cards from "./components/Cards/Cards";

class App extends Component {
  state = {
    loading: false,
    news: [],
  };
  handleLoading = (value) => {
    if (value === true) {
      this.setState({ loading: true });
    } else {
      this.setState({ loading: false });
    }
  };
  handleTopicChange = async (id) => {
    this.handleLoading(true);
    let {
      data: { articles },
    } = await getNews(id);

    this.setState({ news: articles });
    this.handleLoading(false);
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.loading ? (
          <div className="spinner">
            <ClipLoader
              size={60}
              color={"#123abc"}
              loading={this.state.loading}
            />
          </div>
        ) : null}

        <div className="trending-topics-div">
          <TrendingTopics
            handleTopicChange={this.handleTopicChange}
            handleLoading={this.handleLoading}
          />
        </div>
        {this.state.news.length ? (
          <div className="cards">
            <Cards data={this.state.news} />
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
