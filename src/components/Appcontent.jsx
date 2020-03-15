import { makeStyles } from '@material-ui/styles'
import React from 'react'

const Styles = makeStyles({
  root: {
    display: 'grid',
    gridRowGap: 16,
    margin: 'auto',
    maxWidth: 960,
    padding: 16,
  }
})

const Content = ({ children }) => {
  const classes = Styles()

  return <main className={classes.root}>{children}</main>
}

export default Content
