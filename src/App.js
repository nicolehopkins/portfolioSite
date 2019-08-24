import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';


// COMPONENTS
import Nav from './components/Nav';
import Home from './components/Home';


function App() {
  return (
    <HashRouter>
      <Route path='/' component={Nav} />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
