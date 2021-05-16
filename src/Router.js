import React from 'react'
import { Route, Switch } from 'react-router'
import CreateNote from './Pages/Create'
import Notes from './Pages/Notes'

function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={Notes} />
      <Route path='/create' component={CreateNote} />
    </Switch>
  )
}

export default Routes
