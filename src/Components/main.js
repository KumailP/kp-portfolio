import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './about'
import Skills from './skills'
import Contact from './contact'
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
)

export default Main;