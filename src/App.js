import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ItemPage from './components/ItemPage';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';
import {Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path={"/"} component={MainContent}/>
        <Route path={"/items"} component={ItemPage }/>
        <Route path={"/resume"} component={Resume}/>
        <Footer />
      </div>);
  }
}

export default App;
