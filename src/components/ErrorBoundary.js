import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App

    console.log(error);
    console.log(info);
    // logComponentStackToMyService(info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Oops Something went wrong...</h1>;
    }
    return <div>{this.props.children}</div>;
  }
}
