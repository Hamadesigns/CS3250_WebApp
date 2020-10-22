import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './home';
import Contact from './crud';





const Main = () =>
(
<main>
    <Switch>
    <Route exact path ='/' component={Home}/>
    <Route exact path ='/home' component={Home}/>
        <Route exact path ='/about' component={About}/>
        <Route exact path ='/contact' component={Contact}/>
  
        
    </Switch>
</main>


)
export default Main;