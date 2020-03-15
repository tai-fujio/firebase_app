import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageHome from './PageHome.jsx'
import NotFound from './NotFound.jsx'
import PageThread from './PageThread.jsx'
import Content from './components/Appcontent.jsx'
import Header from './components/AppHeader.jsx'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route path="/threads/:threadId" component={PageThread} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Content>
      </>
    </BrowserRouter>
  )
}

export default AppRouter;
