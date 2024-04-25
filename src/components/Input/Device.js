import React, { useState } from 'react'
import Laptop from '../Input/LaptopInput'



function Device(props) {
  let device = props;
  let [laptop,setLaptop]=useState(true)
  let [camera,setCamera]=useState(false)
  let [speaker,setSpeaker]=useState(false)
  let [mobile,setMobile]=useState(false)

  if(device==='camera'){
    setCamera(true)
    setLaptop(false)
    setSpeaker(false)
    setMobile(false)
  }
  else if(device==='speaker'){
    setCamera(false)
    setLaptop(false)
    setSpeaker(true)
    setMobile(false)
  }
  else if(device==='mobile'){
    setCamera(false)
    setLaptop(false)
    setSpeaker(false)
    setMobile(true)
  }
  else{
    setCamera(false)
    setLaptop(true)
    setSpeaker(false)
    setMobile(false)
  }

  return (
    <>
    
       {laptop ? (
        <Laptop/>
      ) : (speaker ? (
        <Laptop/>):(
          camera?(
            <Laptop/>):(
              <Laptop/>
            )
          )
        
      )}
    
    </>
  )
}

export default Device