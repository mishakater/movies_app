import "./App.css";

import React, { Component } from "react";
import { Header } from "./Layout/Header.component";
import { Footer } from "./Layout/Footer.cmponent";
import { Main } from "./Layout/Main.component";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
