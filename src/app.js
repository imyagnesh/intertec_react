import React, { Component } from "react";
import styles from "./styles";

export default class app extends Component {
  state = {
    username: "",
    password: ""
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    return {
      greet: `Hello ${nextProps.name}`
    };
  }

  componentDidMount() {
    document.getElementById("h3").style.color = "green";
    document.addEventListener("copy", this.copyElement);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if(this.props.name !== nextProps.name) {
    //   return true
    // }
    // return false
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    retun 'xyz'
  }
  

  componentDidUpdate(prevProps, prevState, snapshot) {
    
  }
  

  copyElement = () => {
    console.log("Copied...");
  };

  onChangeText = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    console.log(this.username, this.password);
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1 style={styles.h1}>Login</h1>
        <h3 id="h3">{this.state.greet}</h3>
        <form onSubmit={this.submit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.onChangeText}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.onChangeText}
          />
          <h1>{`Username: ${this.state.username}`}</h1>
          <h1>{`Password: ${this.state.password}`}</h1>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
