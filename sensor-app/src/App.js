import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeSensor from './HomeSensor';
import Tables from './Tables';

function App() {
  return (
    <>
    <Router>
        <Switch> 
          <Route path='/' exact component={HomeSensor}/>
          <Route path='/tables' exact component={Tables}/>
        </Switch>
    </Router>
        
    </>
  );
}

export default App;
