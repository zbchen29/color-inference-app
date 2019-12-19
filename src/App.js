import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

// CSS
import './App.css';

// Components
import Home from './home/Home';
import About from './about/About';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

export default withRouter(App);
