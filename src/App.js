import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ItemPage from './components/ItemPage';
import Resume from './components/Resume';
import Footer from './components/Footer';
// import { library  } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
// import { faStroopwafel  } from '@fortawesome/free-solid-svg-icons'

// const  dotenv = require('dotenv')
// library.add(faStroopwafel);



import './App.css';
import {Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Route exact path={"/"} component={MainContent}/>
        <Route path={"/items"} component={ItemPage }/>
        <Route path={"/resume"} component={Resume}/>
      </div>);
  }
}

export default App;
