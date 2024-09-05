import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>My App</Typography>&nbsp;
                  <Link to='/login'>
                      <Button variant='contained' color='secondary'>Login</Button></Link>&nbsp; &nbsp;
                  <Link to='/signup'>
                      <Button variant='contained'>Signup</Button></Link>&nbsp; &nbsp;
                  <Link to='/S'>
                      <Button variant='contained' color='secondary'>State</Button></Link>&nbsp; &nbsp;
                  <Link to='/C'>
                      <Button variant='contained' color='primary'>Count</Button></Link>&nbsp; &nbsp;
                  <Link to='/R'>
                      <Button variant='contained' color='secondary'>Rav</Button></Link>&nbsp; &nbsp;
                  <Link to='/Api'>
                      <Button variant='contained' color='primary'>Api</Button></Link>&nbsp; &nbsp;
                  <Link to='/P'>
                      <Button variant='contained' color='secondary'>poke</Button></Link>&nbsp; &nbsp;
              </Toolbar>
             
          </AppBar>
    </div>
  )
}

export default Navbar