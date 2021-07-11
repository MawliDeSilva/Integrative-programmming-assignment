import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Sidebar from './components/Sidebar.component';
import HomeSensor from './components/HomeSensor.component';
import Tables from './components/Tables.component';
import AddUser from './components/adduser.component';
import TempReadingTable from './components/TempReadingTable';
import AlertList from './components/alert-list.component';

function App() {
  return (
    <Router>
        <Switch> 
          <div className="row" style={{maxWidth:'100%'}}>
            <Route path='/' component={Sidebar}/>
            <Route path='/' exact component={HomeSensor}/>
            <Route path='/tables' exact component={Tables}/>
            <Route path='/users-add' exact component={AddUser}/>
            <Route path='/tempreadings' exact component={TempReadingTable}/>  
            <Route path='/alerts' exact component={AlertList}/>            
          </div>  
        </Switch>
    </Router>
  );
}

export default App;
