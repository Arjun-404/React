import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <h1>SIGNUP</h1>
          
          <TextField label="Name" variant="outlined" />
          <br /><br />
          <TextField label="e-mail" variant="outlined" />
          <br /><br />
          <TextField label="PASSWORD"  type='password' variant="outlined" />
          <br /><br />
          <TextField label="CONFIRM PASSWORD" type='password' variant="outlined" />
          <br /><br />
          <Button variant="contained">SINGUP</Button>
          
          
          
              
    </div>
  )
}

export default Signup