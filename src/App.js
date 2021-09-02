
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import About from './components/pages/About';
import Nutrition from './components/pages/Nutrition';
import Auth from './components/pages/Auth';

  function App() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='Menu' exact component={Menu} />
            <Route path='About' exact component={About} />
            <Route path='Nutrition' exact component={Nutrition} />
            <Route path='/sign-up' exact component={Auth} />
          </Switch>
        </Router>


    </>
    );
  }

export default App;
