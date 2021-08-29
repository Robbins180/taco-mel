import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
          <Footer />
        </Router>
      </>
  );
}

export default App;
