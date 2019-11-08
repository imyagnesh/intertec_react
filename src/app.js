import React, { useState, memo, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LocaleConsumer } from "./context/localeContext";
import styles from "./styles";
import Login from "./screens/login";

const App = ({ name }) => {
  const h3 = useRef(null);

  console.log("App");

  const onSubmit = username => {
    console.log("App", username);
  };

  return (
    <div>
      <h1 ref={h3} style={styles.h1}>
        Hello, yagnesh
        <LocaleConsumer>
          {value => {
            return <p>Hello from App {value.locale}</p>;
          }}
        </LocaleConsumer>
      </h1>
      <Login onSubmit={onSubmit} />
    </div>
  );
};

export default memo(App);

// import React, { PureComponent } from "react";
// import ErrorBoundary from "./components/ErrorBoundary";
// import styles from "./styles";

// export default class app extends PureComponent {
//   state = {
//     username: "",
//     password: ""
//   };

//   constructor(props) {
//     super(props);
//     console.log("constructor");
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     console.log("getDerivedStateFromProps");
//     return {
//       greet: `Hello ${nextProps.name}`
//     };
//   }

//   componentDidMount() {
//     document.getElementById("h3").style.color = "green";
//     document.addEventListener("copy", this.copyElement);
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     throw new Error("Booom....");
//     // if(this.props.name !== nextProps.name) {
//     //   return true
//     // }
//     // return false
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     return true;
//   }

//   componentWillUnmount() {
//     document.removeEventListener("copy", this.copyElement);
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {}

//   copyElement = () => {
//     console.log("Copied...");
//   };

//   onChangeText = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   submit = event => {
//     event.preventDefault();
//     console.log(this.username, this.password);
//   };

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h1 style={styles.h1}>Login</h1>
//         <h3 id="h3">{this.state.greet}</h3>
//         <form onSubmit={this.submit}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             onChange={this.onChangeText}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={this.onChangeText}
//           />
//           <h1>{`Username: ${this.state.username}`}</h1>
//           <h1>{`Password: ${this.state.password}`}</h1>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }
// }
