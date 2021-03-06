import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ItemPage from './components/ItemPage';
import Contact from './components/Contact';
import Projects from './components/Projects';
// import Resume from './components/Resume';
// import Footer from './components/Footer';
// import { library  } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
// import { faStroopwafel  } from '@fortawesome/free-solid-svg-icons'

       // <Route path='/smurf-form' render={(props) => <SmurfForm {...props} newSmurf={this.newSmurf}/>} />
// const  dotenv = require('dotenv')
// library.add(faStroopwafel);

          // <Route path={"/resume"} component={Resume}/>


import './App.css';
import {Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path={"/"} component={MainContent}/>
          <Route path={"/contact"} component={Contact} />
          <Route path={"/projects"} component={Projects} />
          <Route path={"/:id"} component={ItemPage} />
        </Switch>
      </div>);
  }
}

export default App;
