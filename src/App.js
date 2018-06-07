import React, { Component } from 'react';
import './App.css';
import MiniDrawer from './Components/MiniDrawer';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="drawer-style">
          <MiniDrawer/>
        </div>
      </div>
    );
  }
}

export default App;
