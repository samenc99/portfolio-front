import {BrowserRouter, Switch, Route} from "react-router-dom";
import {HOME, PORTFOLIO} from "./urlRoutes";
import React from 'react'
import {Home} from "../Pages/Home/Home";
import {Portfolio} from "../Pages/Portfolio/Portfolio";

export const Routes = ()=>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME}>
          <Home/>
        </Route>
        <Route exact path={PORTFOLIO}>
          <Portfolio/>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}