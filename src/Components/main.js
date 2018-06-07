import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './about'
import Skills from './skills'
import Portfolio from './portfolio'
import Contact from './contact'

const Main = () => (
    <Switch>
        <Route exact path="/" component={About} title="hi"/>
        <Route path="/skills" component={Skills}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
)

export default Main;