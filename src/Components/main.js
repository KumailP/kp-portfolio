import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";
import Projects from "./projects";

const Main = () => (
  <Switch>
    <Route exact path="/" component={About} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Main;
