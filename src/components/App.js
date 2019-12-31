import React from 'react';
import { Landing } from './Landing';
import { GameDescription } from './GameDescription';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/game/:id" component={GameDescription} />
      </Switch>
    </Router>
  );
};

export default App;
