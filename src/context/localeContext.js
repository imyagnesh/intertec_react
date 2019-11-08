import React, { createContext, Component } from "react";

export const {
  Provider: LocaleProvide,
  Consumer: LocaleConsumer
} = createContext();

export default class LocaleContext extends Component {
  state = {
    locale: "en",
    switchLocale: () => {
      this.setState(state => ({ locale: state.locale === "en" ? "es" : "en" }));
    }
  };

  render() {
    const { children } = this.props;
    return <LocaleProvide value={this.state}>{children}</LocaleProvide>;
  }
}
