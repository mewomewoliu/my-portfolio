import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Gallery } from "./Gallery";
import { ProjectItem } from "./ProjectItem";

import "./style.css";



const Projects = () => (
  <Router>
    <Route
      render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/image/:id" component={ProjectItem} />
          </Switch>
        </AnimatePresence>
      )}
    />
  </Router>
);

export default Projects;