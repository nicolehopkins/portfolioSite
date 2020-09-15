import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';


// COMPONENTS
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './containers/Footer';


function App() {
  
  return (
    <HashRouter>
      <Route path='/' component={Nav} />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      <Route path='/' component={Footer} />
    </HashRouter>
  );
}

export default App;
