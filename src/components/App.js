import { createMuiTheme, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import PageHome from './PageHome'
import NotFound from './NotFound'
import PageThread from './PageThread'

const App = () => {
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={'/'}>
            <PageHome />
          </Route>
          <Route exact path={'/threads/:threadId'}>
            <PageThread />
          </Route>
          <Route path={'*'}>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
