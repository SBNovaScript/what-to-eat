import React, {Fragment} from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./screens/home";
import Food from "./screens/food";
import Contact from "./screens/contact";
import Header from "./components/Header";
import {CssBaseline} from "@material-ui/core";

const App = () => {
  return (
      <HashRouter>
        <CssBaseline/>
            <Header/>
            <Fragment>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/food'} component={Food}/>
                <Route path={'/contact'} component={Contact}/>
            </Fragment>
      </HashRouter>
  );
};

export default App;
