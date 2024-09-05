import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
        var [count, setCount] = useState(0)
    const IncreaseCount = (e) => {
        setCount(count+1)
    }
    const DecreaseCount = (e) => {
        setCount(count-1)
    }

  return (
      <div>
          <h1>COUNTER</h1>
          <Typography variant='h4'>count:&nbsp;{count}</Typography>
          <Button variant='contained' onClick={IncreaseCount}>+</Button>&nbsp;
          <Button variant='contained' onClick={DecreaseCount}>-</Button>


    </div>
  )
}

export default Counter