import React, { Fragment } from 'react';
import Home from './pages/Home'
import Nav from './components/Nav'

import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Fragment>
    <Switch>
      <Route exact= {true} path='/' component={Home}></Route>     
      {/* <Route path='/results' component={Results}></Route>   */}
   </Switch>
    </Fragment>
 </BrowserRouter>    
)}


export default App;
