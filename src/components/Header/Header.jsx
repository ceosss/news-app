import React, { Component } from "react";

import { auth, provider } from "./../../firebase.js";
import Tilt from "react-parallax-tilt";

import "./Header.css";
import Spinner from "../Spinner/Spinner.jsx";

class Header extends Component {
  state = {
    user: null,
    loading: true,
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.props.handleLogin(this.state.user);
      }
      this.setState({ loading: false });
    });
  }
  login = () => {
    this.setState({ loading: true });
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({ user });

        this.props.handleLogin(this.state.user);

        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };
  logout = () => {
    this.setState({ loading: true });
    auth.signOut().then(() => {
      this.setState({ user: null });
      this.props.handleLogin(this.state.user);

      this.setState({ loading: false });
    });
  };

  render() {
    return (
      <div className="header">
        <div className="name">
          <h1>MINUTE NEWS</h1>
        </div>
        {this.state.loading ? (
          <Spinner />
        ) : (
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
              <h3 onClick={this.logout}>
                <img src={this.state.user.photoURL} alt="dp" />
                LOGOUT ?{"  "}
                <span role="img" aria-label="img">
                  🥺
                </span>
              </h3>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Header;
