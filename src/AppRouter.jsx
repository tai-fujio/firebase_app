import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageHome from './PageHome.jsx'
import NotFound from './NotFound.jsx'
import PageThread from './PageThread.jsx'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="/threads/:threadId" component={PageThread} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter;
