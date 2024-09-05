import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [val, setVal] = useState()
    const takeInput = (e) => {
        setVal(fname)
    
    }
    const handleInput = (e) => {
        console.log(e.target.value)
        setFname(e.target.value)
    }
  return (
      <div>
          <Typography variant='h4'>Welcome {val}</Typography>
          <TextField variant='outlined' label='type your name' onChange={handleInput} />
          <Button  variant='contained' onClick={takeInput}>CONFIRM</Button>    </div>
  )
}

export default Statebasics