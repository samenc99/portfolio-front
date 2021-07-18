import {BrowserRouter, Switch, Route} from "react-router-dom";
import {HOME, PORTFOLIO} from "./urlRoutes";
import React from 'react'
import {Home} from "../Pages/Home/Home";

export const Routes = ()=>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME}>
          <Home/>
        </Route>
        <Route exact path={PORTFOLIO}>
          <div>portfolio</div>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}