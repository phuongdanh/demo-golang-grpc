import React from 'react';
import '../asset/css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/login'
import Home from '../pages/home'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/"><Home/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
