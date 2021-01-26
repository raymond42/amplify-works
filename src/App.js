import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Main from './components/Main';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/home" component={Landingpage} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
