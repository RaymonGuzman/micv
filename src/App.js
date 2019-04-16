import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurriculumVitae from './components/CurriculumVitae';

class App extends Component {
  render() {
    return (
      <div className="App">
       <CurriculumVitae></CurriculumVitae>
      </div>
    );
  }
}

export default App;
