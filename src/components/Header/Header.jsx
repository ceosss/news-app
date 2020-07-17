import React, { Component } from "react";

import { auth, provider } from "./../../firebase.js";
import Tilt from "react-parallax-tilt";

import "./Header.css";

class Header extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    this.props.handleLoading(true);
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.props.handleLogin(this.state.user);
        this.props.handleLoading(false);
      } else {
        this.props.handleLoading(false);
      }
    });
  }
  login = () => {
    this.props.handleLoading(true);
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({ user });
      this.props.handleLogin(this.state.user);
      this.props.handleLoading(false);
    });
  };
  logout = () => {
    this.props.handleLoading(true);
    auth.signOut().then(() => {
      this.setState({ user: null });
      this.props.handleLogin(this.state.user);
      this.props.handleLoading(false);
    });
  };
  // componentDidUpdate() {
  //   this.props.handleLogin(this.state.user);
  // }
  render() {
    return (
      <div className="header">
        <div className="name">
          <h1>MINUTE NEWS</h1>
        </div>

        <div className={`login ${this.state.user ? "out" : "in"}`}>
          {!this.state.user ? (
            <div className="login" onClick={this.login}>
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
                style={{ cursor: "pointer" }}
              >
                <div className="please-login">
                  <img
                    src={require("./../Cards/background3.jpg")}
                    className="back"
                    alt="login"
                  />
                  <h2>
                    <span role="img" aria-label="img">
                      ☝️
                    </span>
                    <br />
                    <br />
                    YOU NEED TO LOGIN{" "}
                    <span role="img" aria-label="img">
                      🥺
                    </span>
                  </h2>
                </div>
              </Tilt>
            </div>
          ) : (
            <h3 onClick={(this.h = this.logout)}>
              LOGOUT ?{" "}
              <span role="img" aria-label="img">
                🥺
              </span>
            </h3>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
