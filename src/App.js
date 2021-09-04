
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import burritos from './components/items/burritos';
import About from './components/pages/About';
import Nutrition from './components/pages/Nutrition';
import Auth from './components/pages/Auth';
import Legal from './components/pages/Legal-notices';

  function App() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Menu' exact component={Menu} />
            <Route path='/Menu/burritos' exact component={burritos} />
            <Route path='/About' exact component={About} />
            <Route path='/Nutrition' exact component={Nutrition} />
            <Route path='/sign-up' exact component={Auth} />
            <Route path='/Legal-notices' exact component={Legal} />
          </Switch>
        </Router>


    </>
    );
  }

export default App;
