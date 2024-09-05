import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Rav = () => {
    var [name, setName] = useState()
    const Input = (e) => {
        setName('Angular')
    }
    const Input1 = (e) => {
        setName('React')
    }
    const Input2 = (e) => {
    setName('Vue')
}
    useEffect  (() => {
        Input2()
 },[])
  return (
      <div>
          <Typography variant='h4'>Welcome to:&nbsp;{name}</Typography>
          <Button variant='contained' onClick={Input}>Angular</Button>&nbsp;
          <Button variant='contained' color='secondary' onClick={Input1}>React</Button>&nbsp;
          <Button variant='contained' onClick={Input2}>Vue</Button>
    
    </div>
  )
}

export default Rav