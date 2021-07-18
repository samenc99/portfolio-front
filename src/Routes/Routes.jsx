import {BrowserRouter, Switch, Route} from "react-router-dom";
import {HOME} from "./urlRoutes";
import React from 'react'
import {Home} from "../Pages/Home/Home";

export const Routes = ()=>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exat path={HOME}>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}