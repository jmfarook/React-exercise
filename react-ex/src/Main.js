import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TableComponent from './table';
import CardComponent from './card';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={TableComponent} />
      <Route exact path='/table' component={TableComponent} />
      <Route path='/card' component={CardComponent} />
    </Switch>
  </main>
)

export default Main