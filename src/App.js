import React, { Component } from 'react';
import './App.scss';
import Navbar from "./components/NavBar/Navbar"
import TourList from "./components/TourList/index.js";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App;
