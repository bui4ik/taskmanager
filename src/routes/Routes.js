import React from 'react'
import { Route, Switch } from 'react-router'
import routes from 'config/routes'
import Processes from 'modules/Processes/Processes'

const Routes = () => (
  <Switch>
    <Route to={routes.root} exact component={Processes} />
  </Switch>
)

export default Routes
