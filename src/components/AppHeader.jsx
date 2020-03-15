import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar position={'sticky'} color={'default'}>
      <Toolbar>
        <Typography color={'inherit'} component={Link} to={'/'} variant={'h5'}>
          Homeへ
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
