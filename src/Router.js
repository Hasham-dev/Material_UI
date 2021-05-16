import React from 'react'
import { Route, Switch } from 'react-router'
import CreateNote from './Pages/Create'
import Notes from './Pages/Notes'

function Routes () {
  return (
    <Switch>
      <Route path='/' component={CreateNote} />
      {/* <Route exact path='/' component={Notes} /> */}
    </Switch>
  )
}

export default Routes
