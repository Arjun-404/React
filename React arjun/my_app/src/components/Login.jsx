import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <TextField label="Name" variant="outlined" />
      <br />
      <br />
      <TextField label="Password" type="password" variant="outlined" />
      <br />
      <br />
      <Button variant="contained">LOGIN</Button></div>
  )
}

export default Login