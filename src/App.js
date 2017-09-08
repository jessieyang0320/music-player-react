import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import Header from './component/Header';
import Player from './container/Player';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="components-container">
                <Header/>
                <HashRouter>
                    <Player/>
                </HashRouter>
        </div>
    );
  }
}

export default App;
