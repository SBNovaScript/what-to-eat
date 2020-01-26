import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./screens/home";
import Food from "./screens/Food";
import Contact from "./screens/contact";
import Header from "./components/Header";

const App = () => {
  return (
      <HashRouter>
        <div>
            <Header/>
            <div  className="content">
                <Route exact path={'/'} component={Home}/>
                <Route path={'/food'} component={Food}/>
                <Route path={'/contact'} component={Contact}/>
            </div>
        </div>
      </HashRouter>
  );
};

export default App;
